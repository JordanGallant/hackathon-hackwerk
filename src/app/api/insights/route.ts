// app/api/insights/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { AzureOpenAI } from 'openai';

// Initialize Azure OpenAI client
const client = new AzureOpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY!,
  apiVersion: "2024-02-15-preview",
  endpoint: process.env.AZURE_OPENAI_ENDPOINT!,
});

// Subsidy data (you can move this to a database later)
const subsidies = [
  {
    id: 'glb-2025',
    name: 'Subsidies Gemeenschappelijk landbouwbeleid (GLB)',
    description: 'Het Gemeenschappelijk Landbouwbeleid (GLB) ondersteunt boeren en landbouwbedrijven bij het realiseren van duurzame en innovatieve landbouwpraktijken.',
    requirements: {
      sector: ['landbouw', 'duurzame landbouw', 'biologische landbouw'],
      hasKvk: true,
      sustainableFocus: true,
      minBudget: 0,
      maxEmployees: null
    },
    budget: '€5.8 miljard (EU-breed)',
    conditions: [
      'U bent actief in de landbouwsector',
      'Uw bedrijf is geregistreerd bij de Kamer van Koophandel',
      'U voldoet aan de Europese regelgeving voor landbouwsubsidies',
      'U implementeert duurzame landbouwpraktijken'
    ]
  },
  {
    id: 'wbso-2025',
    name: 'WBSO (Speur- en ontwikkelingswerk)',
    description: 'De WBSO is een fiscale tegemoetkoming voor bedrijven die innovatieve activiteiten uitvoeren.',
    requirements: {
      sector: ['technologie', 'research', 'innovatie'],
      conductingRD: true,
      location: 'Netherlands'
    },
    budget: 'Variabel',
    conditions: [
      'U voert speur- en ontwikkelingswerk uit',
      'Uw bedrijf is gevestigd in Nederland',
      'Het project heeft technische en/of financiële risico\'s'
    ]
  }
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userData } = body;

    if (!userData) {
      return NextResponse.json(
        { error: 'User data is required' },
        { status: 400 }
      );
    }

    // Generate AI insights
    const insights = await generateInsights(userData, subsidies);

    return NextResponse.json(insights);

  } catch (error) {
    console.error('Error generating insights:', error);
    return NextResponse.json(
      { error: 'Failed to generate insights' },
      { status: 500 }
    );
  }
}

async function generateInsights(userData: any, subsidies: any[]) {
  const prompt = `Je bent een subsidie-adviseur die een gebruikersprofiel analyseert voor subsidiemogelijkheden.

GEBRUIKERSPROFIEL:
${JSON.stringify(userData, null, 2)}

BESCHIKBARE SUBSIDIES:
${JSON.stringify(subsidies, null, 2)}

Analyseer het gebruikersprofiel en geef inzichten in JSON-formaat met de volgende structuur (IN HET NEDERLANDS):
{
  "matchScore": 0-100,
  "likelihood": "Uitstekend" | "Goed" | "Redelijk" | "Laag",
  "recommendations": [
    "Specifieke aanbeveling 1",
    "Specifieke aanbeveling 2",
    "Specifieke aanbeveling 3"
  ],
  "matchedRequirements": [
    "Voldoet aan criterium 1",
    "Voldoet aan criterium 2"
  ],
  "missingRequirements": [
    "Mogelijk ontbrekend: criterium 1",
    "Nog niet duidelijk: criterium 2"
  ],
  "topSubsidies": [
    {
      "subsidyId": "glb-2025",
      "subsidyName": "Naam van de subsidie",
      "matchScore": 0-100,
      "estimatedBenefit": "Geschatte voordeel in euros",
      "nextSteps": "Concrete volgende stappen",
      "priority": "hoog" | "middel" | "laag"
    }
  ],
  "keyInsights": [
    "Belangrijk inzicht 1",
    "Belangrijk inzicht 2",
    "Belangrijk inzicht 3"
  ]
}

Wees specifiek en praktisch. Focus op concrete stappen die ${userData.name} kan nemen.`;

  try {
    const response = await client.chat.completions.create({
      model: process.env.AZURE_OPENAI_DEPLOYMENT_NAME || "gpt-4o",
      messages: [
        {
          role: "system",
          content: "Je bent een expert subsidie-adviseur die gepersonaliseerde inzichten geeft in het Nederlands."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }
    });

    const insights = JSON.parse(response.choices[0].message.content || '{}');

    // Log usage for cost tracking
    const usage = response.usage;
    if (usage) {
      const inputCost = (usage.prompt_tokens / 1_000_000) * 2.50;
      const outputCost = (usage.completion_tokens / 1_000_000) * 10.00;
      const totalCost = inputCost + outputCost;
      
      console.log('API Cost:', {
        totalCost: `$${totalCost.toFixed(4)}`,
        inputTokens: usage.prompt_tokens,
        outputTokens: usage.completion_tokens
      });
    }

    return insights;

  } catch (error) {
    console.error('Error calling Azure OpenAI:', error);
    throw error;
  }
}