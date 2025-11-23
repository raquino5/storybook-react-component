import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Card } from '../components/Card/Card';
import { Text } from '../components/Text/Text';
import { Table } from '../components/Table/Table';
import { Button } from '../components/Button/Button';
import { Dropdown } from '../components/Dropdown/Dropdown';

export const Skills: React.FC = () => {
  const navigate = useNavigate();
  const [toolCategory, setToolCategory] = useState<string>('editor');

  const toolOptions = [
    { label: 'Editor & IDE', value: 'editor' },
    { label: 'Version Control', value: 'version-control' },
    { label: 'UI & Components', value: 'ui' },
    { label: 'Testing', value: 'testing' },
    { label: 'Debugging', value: 'debugging' },
  ];

  const renderToolsForCategory = () => {
    switch (toolCategory) {
      case 'editor':
        return [
          'VS Code for daily development',
          'Integrated terminal for running scripts and servers',
        ];
      case 'version-control':
        return [
          'Git for managing branches and commits',
          'GitHub for remote repositories and collaboration',
        ];
      case 'ui':
        return ['Storybook for documenting and testing UI components'];
      case 'testing':
        return ['Jest / Testing Library (introductory testing for React components)'];
      case 'debugging':
        return ['Browser DevTools for debugging, layout inspection, and performance checks'];
      default:
        return [];
    }
  };

  return (
    <section
      id="skills"
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
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        {/* Title + Back Button Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
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
            Skills
          </h2>

          <Button label="← Back to Basic Info" onClick={() => navigate('/')} />
        </div>

        <Text size="medium">
          In this section, you can find all the skills I use to build full stack web applications,
          from front-end interfaces to back-end logic.
        </Text>
      </header>

      {/* Description */}
      <Card title="Overview" content="">
        <Text size="medium">
          I enjoy working across full stack from designing reusable user interface components,
          wiring up business logic, and modeling data. I focus on writing maintainable code and
          learning modern tools that support clean workflows. Occasionally, I continue to explore
          new technologies and frameworks to expand my skill set.
        </Text>
      </Card>

      {/* Two-column layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1.1fr)',
          gap: '1.75rem',
        }}
      >
        {/* Languages / Frameworks */}
        <Card title="Languages & Frameworks" content="">
          <Table
            headers={['Area', 'Technologies']}
            data={[
              ['Front-end', 'HTML, CSS, JavaScript, TypeScript, React'],
              ['Back-end', 'PHP, Python (Flask basics), Node.js (intro)'],
              ['Databases', 'MySQL, PostgreSQL (coursework)'],
            ]}
          />
        </Card>

        {/* Tools */}
        <Card title="Tools" content="">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <Text size="medium">Select a category to see the tools I use:</Text>

            <Dropdown
              options={toolOptions}
              defaultValue="editor"
              onChange={(value) => setToolCategory(value as string)}
            />

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                fontSize: '0.9rem',
                color: '#cbd5f5',
              }}
            >
              {renderToolsForCategory().map((tool) => (
                <li key={tool}>• {tool}</li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
};
