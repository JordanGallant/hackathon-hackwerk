'use client';

import { useState } from 'react';
import { 
  Button,
  Heading,
  Paragraph
} from "@rijkshuisstijl-community/components-react";

export default function AccountPage() {
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
            Mijn Account
          </Heading>
          <Paragraph style={{ color: '#666' }}>
            Bekijk en beheer uw accountgegevens
          </Paragraph>
        </div>

        {/* Account Cards */}
        <div style={{ 
          display: 'grid', 
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}>
          {/* Personal Information Card */}
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <Heading level={2} style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
              Persoonlijke gegevens
            </Heading>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <Paragraph style={{ fontSize: '0.875rem', color: '#666', margin: 0, marginBottom: '0.25rem' }}>
                  Naam
                </Paragraph>
                <Paragraph style={{ fontWeight: '500', margin: 0 }}>
                  Pieter
                </Paragraph>
              </div>

              <div>
                <Paragraph style={{ fontSize: '0.875rem', color: '#666', margin: 0, marginBottom: '0.25rem' }}>
                  Sector
                </Paragraph>
                <Paragraph style={{ fontWeight: '500', margin: 0 }}>
                  Duurzame
                </Paragraph>
              </div>
            </div>

            <Button 
              style={{ marginTop: '1.5rem', width: '100%' }}
            >
              Gegevens bewerken
            </Button>

            {/* Subsidies Section */}
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e0e0e0' }}>
              <Heading level={3} style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
                Mijn subsidieaanvragen
              </Heading>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Subsidy 1 */}
                <div style={{ 
                  padding: '1rem', 
                  background: '#f9f9f9', 
                  borderRadius: '4px',
                  borderLeft: '4px solid #4caf50'
                }}>
                  <Paragraph style={{ fontWeight: '500', margin: 0, marginBottom: '0.5rem' }}>
                    ISDE - Subsidie duurzame energie
                  </Paragraph>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Paragraph style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
                      Aanvraag: 15 september 2025
                    </Paragraph>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      background: '#4caf50', 
                      color: 'white', 
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      Goedgekeurd
                    </span>
                  </div>
                </div>

                {/* Subsidy 2 */}
                <div style={{ 
                  padding: '1rem', 
                  background: '#f9f9f9', 
                  borderRadius: '4px',
                  borderLeft: '4px solid #ff9800'
                }}>
                  <Paragraph style={{ fontWeight: '500', margin: 0, marginBottom: '0.5rem' }}>
                    SDE++ - Hernieuwbare energie
                  </Paragraph>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Paragraph style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
                      Aanvraag: 28 september 2025
                    </Paragraph>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      background: '#ff9800', 
                      color: 'white', 
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      In behandeling
                    </span>
                  </div>
                </div>

                {/* Subsidy 3 */}
                <div style={{ 
                  padding: '1rem', 
                  background: '#f9f9f9', 
                  borderRadius: '4px',
                  borderLeft: '4px solid #2196f3'
                }}>
                  <Paragraph style={{ fontWeight: '500', margin: 0, marginBottom: '0.5rem' }}>
                    WBSO - Innovatie
                  </Paragraph>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Paragraph style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
                      Aanvraag: 01 oktober 2025
                    </Paragraph>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      background: '#2196f3', 
                      color: 'white', 
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      Ingediend
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Information Card */}
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <Heading level={2} style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
              Bedrijfsgegevens
            </Heading>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <Paragraph style={{ fontSize: '0.875rem', color: '#666', margin: 0, marginBottom: '0.25rem' }}>
                  Bedrijfsnaam
                </Paragraph>
                <Paragraph style={{ fontWeight: '500', margin: 0 }}>
                  MONEY
                </Paragraph>
              </div>

              <div>
                <Paragraph style={{ fontSize: '0.875rem', color: '#666', margin: 0, marginBottom: '0.25rem' }}>
                  KVK-nummer
                </Paragraph>
                <Paragraph style={{ fontWeight: '500', margin: 0 }}>
                  32164066
                </Paragraph>
              </div>

              <div>
                <Paragraph style={{ fontSize: '0.875rem', color: '#666', margin: 0, marginBottom: '0.25rem' }}>
                  Type onderneming
                </Paragraph>
                <Paragraph style={{ fontWeight: '500', margin: 0 }}>
                  Eenmanszaak
                </Paragraph>
              </div>

              <div>
                <Paragraph style={{ fontSize: '0.875rem', color: '#666', margin: 0, marginBottom: '0.25rem' }}>
                  Status
                </Paragraph>
                <Paragraph style={{ fontWeight: '500', margin: 0 }}>
                  Hoofdvestiging
                </Paragraph>
              </div>

              <div>
                <Paragraph style={{ fontSize: '0.875rem', color: '#666', margin: 0, marginBottom: '0.25rem' }}>
                  Vestigingsnummer
                </Paragraph>
                <Paragraph style={{ fontWeight: '500', margin: 0 }}>
                  000006258360
                </Paragraph>
              </div>

              <div>
                <Paragraph style={{ fontSize: '0.875rem', color: '#666', margin: 0, marginBottom: '0.25rem' }}>
                  Adres
                </Paragraph>
                <Paragraph style={{ fontWeight: '500', margin: 0 }}>
                  Hilvertsweg 281<br />
                  1214JG Hilversum
                </Paragraph>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Actions */}
        <div style={{
          background: 'white',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          marginTop: '1.5rem'
        }}>
          <Heading level={2} style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            Account acties
          </Heading>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button appearance="primary-action-button">
              Dashboard
            </Button>
            <Button>
              Instellingen
            </Button>
            <Button style={{ marginLeft: 'auto' }}>
              Uitloggen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}