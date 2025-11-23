import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { Text } from "../components/Text/Text";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Portfolio – Using Component Library",
    description:
      "A portfolio that uses reusable React component library built for course assignments. It focuses on consistent design tokens, composable components, and a smooth developer experience with Storybook and testing.",
    imageUrl: "/images/library-img.png",
    link: "https://github.com/raquino5/storybook-react-component",
    tech: ["React", "TypeScript", "Storybook", "Jest", "Styled Components"],
  },
  {
    title: "ByteBite Winnipeg – Restaurant CMS",
    description:
      "A CMS-style web app for managing restaurant listings, categories, and content. It includes role-based access for admins and restaurant owners and supports basic moderation create, read, update, and delete features.",
    imageUrl: "/images/bytes-img.png",
    link: "https://github.com/raquino5/aquino_cms-final-project",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "CRUD Operations"],
  },
  {
    title: "Trending Films Website – UI/UX with HTML, CSS, JavScript",
    description:
      "A responsive website for Story&Wonderland Studios that displays of their sample good user interface and user experience. Features includes their detailed film and photography sample information page with their services and about page.",
    imageUrl: "/images/trendy-img.png",
    link: "https://github.com/raquino5/trendingfilms",
    tech: ["HTML", "Stylesheets", "JavaScript", "Responsive Design"],
  },
];

export const Work: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="work"
      style={{
        maxWidth: "1100px",
        margin: "2rem auto 0",
        padding: "3rem 1.5rem 4rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        background: "rgba(15, 23, 42, 0.82)",
        borderRadius: "1.5rem",
        boxShadow: "0 25px 80px rgba(15, 23, 42, 0.9)",
        color: "#e5e7eb",
        border: "1px solid rgba(148, 163, 184, 0.35)",
        backdropFilter: "blur(14px)",
      }}
    >
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              fontSize: "1.6rem",
              margin: 0,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Work
          </h2>

          <Button
            label="Back to Basic Info"
            onClick={() => navigate("/")}
          />
        </div>

        <Text size="medium">
          In this section, you can find the course projects and experiments that showcase my
          progress as a full stack web development student.
        </Text>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.75rem",
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            content={project.description}
          >
            {/* Image */}
            <div
              style={{
                marginTop: "0.75rem",
                borderRadius: "1rem",
                overflow: "hidden",
                background: "#020617",
                minHeight: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Tech list */}
            <div
              style={{
                marginTop: "1rem",
              }}
            >
              <Text size="small">Tech used</Text>
              <ul
                style={{
                  margin: "0.35rem 0 0",
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                }}
              >
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    style={{
                      fontSize: "0.8rem",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "999px",
                      background: "rgba(15, 23, 42, 0.9)",
                      border: "1px solid rgba(148, 163, 184, 0.6)",
                    }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Link */}
            <div
              style={{
                marginTop: "1.1rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                label="View Project"
                onClick={() =>
                  window.open(project.link, "_blank", "noopener,noreferrer")
                }
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
