import React from "react";
import { useNavigate } from "react-router-dom";

import { Card } from "../components/Card/Card";
import { Text } from "../components/Text/Text";
import { Button } from "../components/Button/Button";

type Resource = {
  title: string;
  summary: string;
  imageUrl: string;
  link: string;
};

const resources: Resource[] = [
  {
    title: "W3Schools – Quick Syntax Reference",
    summary:
      "Beginner-friendly reference for HTML, CSS, JavaScript, and back-end technologies. Great for quickly refreshing syntax and trying examples.",
    imageUrl: "/images/schools-img.png",
    link: "https://www.w3schools.com/",
  },
  {
    title: "Stack Overflow",
    summary:
      "A massive Question & Answer platform for professionals and enthusiat programmers where developers share solutions, debug issues, and discuss real-world coding problems across all languages.",
    imageUrl: "/images/stack.png",
    link: "https://stackoverflow.com/",
  },
  {
    title: "GitHub",
    summary:
      "A powerful cloud-based platform that offers tools for version control, code hosting, and project management, such as issue tracking, bug fixes, and feature requests collaboration.",
    imageUrl: "/images/github.png",
    link: "https://github.com/",
  },
  {
    title: "Figma",
    summary:
      "A collaborative UI/UX design tool used for wireframes, prototypes, and creating consistent design systems for web interfaces.",
    imageUrl: "/images/figma.png",
    link: "https://www.figma.com/",
  },
  {
    title: "CSS-Tricks",
    summary:
      "Home to hundreds of articles on layouts, animations, responsive design, and modern CSS techniques that inspire and improve styling skills.",
    imageUrl: "/images/csstricks.png",
    link: "https://css-tricks.com/",
  },
];

export const Resources: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="resources"
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
      {/* Header */}
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
            alignItems: "center",
            gap: "1rem",
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
            Resources
          </h2>

          <Button
            label="Back to Basic Info"
            onClick={() => navigate("/")}
          />
        </div>

        <Text size="medium">
          What can be seen here are the list of tools, references, and platforms that continuously supports my
          learning throughout in and outside of full stack development and my courses.
        </Text>
      </header>

      {/* Resource Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.75rem",
        }}
      >
        {resources.map((res) => (
          <Card key={res.title} title={res.title} content={res.summary}>
            {/* Image/Icon */}
            <div
              style={{
                marginTop: "0.75rem",
                height: "140px",
                borderRadius: "1rem",
                overflow: "hidden",
                background: "#020617",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={res.imageUrl}
                alt={res.title}
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  display: "block",
                  opacity: 0.95,
                }}
              />
            </div>

            {/* Button */}
            <div
              style={{
                marginTop: "1.1rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                label="Visit"
                onClick={() =>
                  window.open(res.link, "_blank", "noopener,noreferrer")
                }
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
