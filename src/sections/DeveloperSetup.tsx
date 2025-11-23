import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from '../components/Card/Card';
import { Text } from '../components/Text/Text';
import { Button } from '../components/Button/Button';

export const DeveloperSetup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="developer-setup"
      style={{
        maxWidth: '1100px',
        margin: '2rem auto 0',
        padding: '3rem 1.5rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        background: 'rgba(15, 23, 42, 0.82)',
        borderRadius: '1.5rem',
        boxShadow: '0 25px 80px rgba(15, 23, 42, 0.9)',
        color: '#e5e7eb',
        border: '1px solid rgba(148, 163, 184, 0.35)',
        backdropFilter: 'blur(14px)',
      }}
    >
      {/* Header */}
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <h2
            style={{
              fontSize: '1.6rem',
              margin: 0,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Developer Setup
          </h2>

          <Button label="← Back to Basic Info" onClick={() => navigate('/')} />
        </div>

        <Text size="medium">
          A quick overview of how I configure my editor, terminal, and fonts to stay productive and
          keep my projects consistent.
        </Text>
      </header>

      {/* VS Code Setup */}
      <Card title="VS Code Setup" content="">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            fontSize: '0.95rem',
            color: '#cbd5f5',
          }}
        >
          <Text size="small">Key extensions I use:</Text>

          <ul
            style={{
              margin: 0,
              paddingLeft: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            <li>ESLint – to keep JavaScript/TypeScript code consistent.</li>
            <li>Prettier – for automatic formatting on save.</li>
            <li>SQLite extension - for exploring and database query</li>
            <li>Python / PHP extensions – for language support when needed.</li>
            <li>Live Server – to quickly preview front-end projects.</li>
          </ul>
        </div>
      </Card>

      {/* Terminal Setup */}
      <Card title="Terminal Setup" content="">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            fontSize: '0.95rem',
            color: '#cbd5f5',
          }}
        >
          <Text size="small">
            I usually work with the integrated terminal in VS Code so I can keep everything in one
            window.
          </Text>

          <div style={{ marginTop: '0.5rem' }}>
            <Text size="small">Common commands I run:</Text>
          </div>

          <ul
            style={{
              margin: 0,
              paddingLeft: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            <li>
              <code>npm install</code> / <code>npm run dev</code> or <code>npm run build</code> for
              React projects.
            </li>
            <li>
              <code>git status</code>, <code>git commit</code>, and <code>git push</code> for
              version control.
            </li>
          </ul>

          <div style={{ marginTop: '0.75rem' }}>
            <Text size="small">
              I prefer using a dark theme in the terminal to match the rest of my development
              environment.
            </Text>
          </div>
        </div>
      </Card>

      {/* Preferred Editor Font */}
      <Card title="Preferred Editor Font" content="">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            fontSize: '0.95rem',
            color: '#cbd5f5',
          }}
        >
          <Text size="small">
            I like using a clean, developer-friendly font that makes code easy to scan and read.
          </Text>

          <ul
            style={{
              margin: 0,
              paddingLeft: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            <li>
              Examples of fonts I like: <strong>Segoe UI, Sans-Serif, or Montserrat</strong>.
            </li>
          </ul>

          <div style={{ marginTop: '0.75rem' }}>
            <Text size="small">
              Using a consistent font across projects helps keep everything visually familiar when I
              switch between assignments.
            </Text>
          </div>
        </div>
      </Card>
    </section>
  );
};
