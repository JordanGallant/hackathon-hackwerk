'use client';

import { useRouter } from 'next/navigation';
import { 
  Button,
  Heading,
  Paragraph
} from "@rijkshuisstijl-community/components-react";

export default function SubsidyInfoPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  // Pieter's data
  const userData = {
    name: "Pieter",
    company: "MONEY",
    kvk: "32164066",
    type: "Eenmanszaak",
    sector: "Duurzame",
    address: "Hilvertsweg 281 1214JG Hilversum"
  };

  // AI Insights (dummy data)
  const aiInsights = {
    matchScore: 72,
    likelihood: "Goed",
    recommendations: [
      "Zorg ervoor dat uw landbouwactiviteiten voldoen aan de milieueisen",
      "Bereid documentatie voor over uw duurzame praktijken",
      "Check of uw bedrijfsgrootte binnen de gestelde limieten valt"
    ],
    matchedRequirements: [
      "Actief in de landbouwsector",
      "Geregistreerd bij KVK",
      "Focus op duurzaamheid"
    ],
    missingRequirements: [
      "Mogelijk ontbrekende landbouwregistratie",
      "Nog niet duidelijk: minimale bedrijfsomvang"
    ]
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f5f5f5',
      padding: '2rem'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Heading level={1} style={{ marginBottom: '0.5rem' }}>
            Subsidie Informatie
          </Heading>
          <Paragraph style={{ color: '#666' }}>
            Meer informatie over deze subsidie en hoe u kunt aanvragen.
          </Paragraph>
        </div>

        {/* AI Insights Card */}
        <div style={{
          background: 'linear-gradient(135deg, #154273 0%, #1a5a99 100%)',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 4px 12px rgba(21, 66, 115, 0.3)',
          marginBottom: '1.5rem',
          color: 'white'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            <Heading level={2} style={{ fontSize: '1.5rem', margin: 0, color: 'white' }}>
              AI Analyse voor {userData.name}
            </Heading>
          </div>

          {/* Match Score */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <Paragraph style={{ fontSize: '0.875rem', margin: 0, opacity: 0.9 }}>
                Match score
              </Paragraph>
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '0.25rem 0.75rem',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                {aiInsights.likelihood}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                flex: 1,
                height: '12px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${aiInsights.matchScore}%`,
                  height: '100%',
                  background: aiInsights.matchScore >= 70 ? '#4ade80' : aiInsights.matchScore >= 50 ? '#fbbf24' : '#ef4444',
                  borderRadius: '6px',
                  transition: 'width 0.5s ease'
                }}></div>
              </div>
              <Paragraph style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                {aiInsights.matchScore}%
              </Paragraph>
            </div>
          </div>

          {/* Matched Requirements */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Paragraph style={{ fontSize: '0.875rem', marginBottom: '0.75rem', opacity: 0.9 }}>
              ✓ Voldoet aan
            </Paragraph>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {aiInsights.matchedRequirements.map((req, index) => (
                <li key={index} style={{ fontSize: '0.9375rem' }}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Missing Requirements */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Paragraph style={{ fontSize: '0.875rem', marginBottom: '0.75rem', opacity: 0.9 }}>
              ⚠ Aandachtspunten
            </Paragraph>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {aiInsights.missingRequirements.map((req, index) => (
                <li key={index} style={{ fontSize: '0.9375rem' }}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          <div>
            <Paragraph style={{ fontSize: '0.875rem', marginBottom: '0.75rem', opacity: 0.9 }}>
              💡 Aanbevelingen
            </Paragraph>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {aiInsights.recommendations.map((rec, index) => (
                <li key={index} style={{ fontSize: '0.9375rem' }}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subsidy Info Card */}
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '1.5rem'
        }}>
          <Heading level={2} style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            Subsidies Gemeenschappelijk landbouwbeleid (GLB)
          </Heading>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Description */}
            <div>
              <Paragraph style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>
                Beschrijving
              </Paragraph>
              <Paragraph style={{ margin: 0 }}>
                Het Gemeenschappelijk Landbouwbeleid (GLB) ondersteunt boeren en landbouwbedrijven bij het 
                realiseren van duurzame en innovatieve landbouwpraktijken. De subsidie stimuleert investeringen 
                in milieuvriendelijke technieken en draagt bij aan de versterking van de landbouwsector.
              </Paragraph>
            </div>

            {/* Conditions */}
            <div>
              <Paragraph style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>
                Voorwaarden
              </Paragraph>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <li>U bent actief in de landbouwsector</li>
                <li>Uw bedrijf is geregistreerd bij de Kamer van Koophandel</li>
                <li>U voldoet aan de Europese regelgeving voor landbouwsubsidies</li>
                <li>U implementeert duurzame landbouwpraktijken</li>
              </ul>
            </div>

            {/* Dates */}
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <Paragraph style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>
                  Startdatum aanvragen
                </Paragraph>
                <Paragraph style={{ fontWeight: '500', margin: 0 }}>
                  01 januari 2025
                </Paragraph>
              </div>
              <div>
                <Paragraph style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>
                  Einddatum aanvragen
                </Paragraph>
                <Paragraph style={{ fontWeight: '500', margin: 0 }}>
                  31 december 2025
                </Paragraph>
              </div>
            </div>

            {/* Budget Info */}
            <div>
              <Paragraph style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem' }}>
                Beschikbaar budget
              </Paragraph>
              <Paragraph style={{ fontWeight: '500', margin: 0 }}>
                € 5,8 miljard (EU-breed)
              </Paragraph>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Button appearance="primary-action-button">
              Subsidie aanvragen
            </Button>
            <Button onClick={handleBack}>
              Terug naar overzicht
            </Button>
          </div>
        </div>

        {/* Extra Info */}
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <Heading level={2} style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
            Veelgestelde vragen
          </Heading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <Paragraph style={{ fontWeight: '500', marginBottom: '0.25rem' }}>
                Wie kan aanvragen?
              </Paragraph>
              <Paragraph style={{ margin: 0 }}>
                Alle landbouwbedrijven, zowel klein als groot, kunnen aanvragen indien zij voldoen aan de Europese 
                criteria en geregistreerd zijn als landbouwbedrijf.
              </Paragraph>
            </div>

            <div>
              <Paragraph style={{ fontWeight: '500', marginBottom: '0.25rem' }}>
                Hoeveel subsidie kan ik krijgen?
              </Paragraph>
              <Paragraph style={{ margin: 0 }}>
                Het subsidiebedrag varieert op basis van bedrijfsgrootte, type investering en de mate van duurzaamheid. 
                Gemiddeld kunnen bedrijven tussen €10.000 en €250.000 per jaar ontvangen.
              </Paragraph>
            </div>

            <div>
              <Paragraph style={{ fontWeight: '500', marginBottom: '0.25rem' }}>
                Wat zijn duurzame landbouwpraktijken?
              </Paragraph>
              <Paragraph style={{ margin: 0 }}>
                Dit omvat onder andere biologische landbouw, precisielandbouw, verminderd gebruik van pesticiden, 
                waterbeheer en investeringen in hernieuwbare energie.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}