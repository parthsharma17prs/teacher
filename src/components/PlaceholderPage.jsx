import React from 'react';
import { Construction } from 'lucide-react';

const PlaceholderPage = ({ title }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60vh',
            textAlign: 'center',
            color: 'var(--text-secondary)'
        }}>
            <div style={{ background: '#f1f5f9', padding: '2rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                <Construction size={48} color="var(--primary-color)" />
            </div>
            <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{title}</h2>
            <p>This module is currently under development.</p>
        </div>
    );
};

export default PlaceholderPage;
