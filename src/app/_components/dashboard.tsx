'use client';

import { useState, useEffect } from 'react';
import LoginModal from './login';

interface Subsidy {
    title: string;
    url: string;
    identifier: string;
    type: string;
    sector: string;
}

export default function SubsidiesDashboard() {
    const [subsidies, setSubsidies] = useState<Subsidy[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [filterSector, setFilterSector] = useState('all');
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isVoorMijActive, setIsVoorMijActive] = useState(false);


    useEffect(() => {
        async function loadSubsidies() {
            try {
                const response = await fetch('/api/subsidies');
                if (!response.ok) {
                    throw new Error('Failed to fetch subsidies');
                }
                const data = await response.json();
                setSubsidies(data.subsidies || []);
                setLoading(false);
            } catch (err) {
                setError('Kan subsidies niet laden. Probeer het later opnieuw.');
                setLoading(false);
                console.error('Error loading subsidies:', err);
            }
        }

        loadSubsidies();
    }, []);

    const types = ['all', ...new Set(subsidies.map(s => s.type))];
    const sectors = ['all', ...new Set(subsidies.map(s => s.sector).filter(Boolean))];

    const filteredSubsidies = subsidies.filter(subsidy => {
        const matchesSearch = subsidy.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === 'all' || subsidy.type === filterType;
        const matchesSector = filterSector === 'all' || subsidy.sector === filterSector;
        return matchesSearch && matchesType && matchesSector;
    });

    if (loading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <p>Subsidies laden...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
            }}>
                <div style={{
                    background: 'white',
                    borderRadius: '8px',
                    padding: '2rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    maxWidth: '500px'
                }}>
                    <h3>Fout</h3>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', padding: '2rem', background: '#f5f5f5' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div>
                            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Subsidies Dashboard</h1>
                            <p style={{ margin: '0.5rem 0' }}>Ontdek en doorzoek beschikbare subsidies</p>
                            <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem', margin: 0 }}>
                                Totaal beschikbare subsidies: {subsidies.length}
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {/* Inloggen */}
                            <button
                                onClick={() => setIsLoginModalOpen(true)}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    background: '#154273',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#0f3154'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#154273'}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                    <polyline points="10 17 15 12 10 7"></polyline>
                                    <line x1="15" y1="12" x2="3" y2="12"></line>
                                </svg>
                                Inloggen
                            </button>

                            {/* Voor mij */}
                            <button
                                onClick={() => {
                                    console.log('Filtering for: duur');
                                    setIsLoginModalOpen(false);
                                    setSearchTerm('duur'); // Search in titles instead
                                    setFilterSector('all'); // Reset sector filter
                                    setIsVoorMijActive(true)
                                }}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    background: '#275937',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#1d4428'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#275937'}
                            >
                                Voor mij
                            </button>

                        </div>
                    </div>
                </div>

                {/* Search and Filter Bar */}
                <div style={{
                    background: 'white',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    marginBottom: '2rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                    <div style={{
                        display: 'grid',
                        gap: '1rem',
                        gridTemplateColumns: '1fr auto auto'
                    }}>
                        <div>
                            <label htmlFor="search" style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: '500'
                            }}>
                                Zoeken
                            </label>
                            <input
                                id="search"
                                type="text"
                                placeholder="Zoek subsidies..."
                                value={isVoorMijActive ? '' : searchTerm} // Hide text when Voor mij is active
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setIsVoorMijActive(false); // Reset when user types manually
                                }}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>

                        <div style={{ minWidth: '200px' }}>
                            <label htmlFor="filter-type" style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: '500'
                            }}>
                                Type
                            </label>
                            <select
                                id="filter-type"
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    fontSize: '1rem',
                                    background: 'white'
                                }}
                            >
                                {types.map(type => (
                                    <option key={type} value={type}>
                                        {type === 'all' ? 'Alle Types' : type}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div style={{ minWidth: '200px' }}>
                            <label htmlFor="filter-sector" style={{
                                display: 'block',
                                marginBottom: '0.5rem',
                                fontWeight: '500'
                            }}>
                                Sector
                            </label>
                            <select
                                id="filter-sector"
                                value={filterSector}
                                onChange={(e) => setFilterSector(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    fontSize: '1rem',
                                    background: 'white'
                                }}
                            >
                                {sectors.map(sector => (
                                    <option key={sector} value={sector}>
                                        {sector === 'all' ? 'Alle Sectoren' : sector}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <p style={{ marginBottom: '1rem', color: '#666' }}>
                    {filteredSubsidies.length} van {subsidies.length} subsidies weergegeven
                </p>

                {/* Subsidies Grid */}
                <div style={{
                    display: 'grid',
                    gap: '1.5rem',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
                }}>
                    {filteredSubsidies.map((subsidy) => (
                        <article
                            key={subsidy.identifier}
                            style={{
                                background: 'white',
                                borderRadius: '8px',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'box-shadow 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                            }}
                        >
                            <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                {subsidy.type && (
                                    <span style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.375rem',
                                        padding: '0.375rem 0.875rem',
                                        fontSize: '0.8125rem',
                                        fontWeight: '600',
                                        color: '#154273',
                                        background: '#e6f0f8',
                                        borderRadius: '14px'
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        </svg>
                                        {subsidy.type}
                                    </span>
                                )}
                                {subsidy.sector && (
                                    <span style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.375rem',
                                        padding: '0.375rem 0.875rem',
                                        fontSize: '0.8125rem',
                                        fontWeight: '600',
                                        color: '#275937',
                                        background: '#e8f5e9',
                                        borderRadius: '14px'
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                        </svg>
                                        {subsidy.sector}
                                    </span>
                                )}
                            </div>

                            <h3 style={{
                                marginBottom: '1rem',
                                fontSize: '1.125rem',
                                flexGrow: 1,
                                margin: '0 0 1rem 0'
                            }}>
                                {subsidy.title}
                            </h3>

                            <a
                                href={subsidy.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    background: '#154273',
                                    color: 'white',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    fontWeight: '500',
                                    transition: 'background 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#0f3154';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#154273';
                                }}
                            >
                                Bekijk details
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </article>
                    ))}
                </div>

                {/* No Results */}
                {filteredSubsidies.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                        <p style={{ fontSize: '1.125rem', color: '#666' }}>
                            Geen subsidies gevonden die voldoen aan uw zoekcriteria
                        </p>
                    </div>
                )}
            </div>

            {/* Login Modal */}
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
            />
        </div>
    );
}
