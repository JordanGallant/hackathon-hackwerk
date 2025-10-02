
interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}
function LoginModal({ isOpen, onClose }: LoginModalProps) {
    if (!isOpen) return null;

    const handleEHerkenningLogin = () => {
        console.log('Redirecting to eHerkenning authentication...');
        window.location.href = '/account';
    };

    const handleDigiDLogin = () => {
        console.log('Redirecting to DigiD authentication...');
        window.location.href = '/account';
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    maxWidth: '500px',
                    width: '100%',
                    padding: '2rem',
                    position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: '#666',
                        padding: '0.5rem',
                        lineHeight: 1
                    }}
                    aria-label="Sluiten"
                >
                    ×
                </button>

                <div style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                        Inloggen
                    </h2>
                    <p style={{ color: '#666', margin: 0 }}>
                        Kies uw inlogmethode om verder te gaan
                    </p>
                </div>
                


                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div
                        style={{
                            border: '2px solid #e0e0e0',
                            borderRadius: '8px',
                            padding: '1.5rem',
                            transition: 'border-color 0.2s ease'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '1rem',
                            gap: '1rem'
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: '#154273',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                    <path d="M16 11l2 2 4-4"></path>
                                </svg>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem', margin: 0 }}>
                                    eHerkenning
                                </h3>
                                <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
                                    Voor ondernemers en organisaties
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleEHerkenningLogin}
                            style={{
                                width: '100%',
                                padding: '0.75rem 1.5rem',
                                background: '#154273',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '1rem',
                                fontWeight: '500',
                                cursor: 'pointer',
                                transition: 'background 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#0f3154'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#154273'}
                        >
                            Inloggen met eHerkenning
                        </button>
                    </div>

                    <div
                        style={{
                            border: '2px solid #e0e0e0',
                            borderRadius: '8px',
                            padding: '1.5rem',
                            transition: 'border-color 0.2s ease'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '1rem',
                            gap: '1rem'
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: '#275937',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem', margin: 0 }}>
                                    DigiD
                                </h3>
                                <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
                                    Voor particulieren
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleDigiDLogin}
                            style={{
                                width: '100%',
                                padding: '0.75rem 1.5rem',
                                background: '#275937',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '1rem',
                                fontWeight: '500',
                                cursor: 'pointer',
                                transition: 'background 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#1d4428'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#275937'}
                        >
                            Inloggen met DigiD
                        </button>
                    </div>
                </div>

                <div style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    background: '#f5f5f5',
                    borderRadius: '4px'
                }}>
                    <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
                        <strong>Let op:</strong> Heeft u nog geen eHerkenning of DigiD?
                        Vraag deze aan via{' '}
                        <a
                            href="https://www.eherkenning.nl"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#154273', textDecoration: 'underline' }}
                        >
                            eherkenning.nl
                        </a>
                        {' '}of{' '}
                        <a
                            href="https://www.digid.nl"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#154273', textDecoration: 'underline' }}
                        >
                            digid.nl
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default LoginModal
