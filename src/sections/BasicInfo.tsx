import React from "react";
import { NavLink } from "react-router-dom";

import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { HeroImage } from "../components/HeroImage/HeroImage";
import { Table } from "../components/Table/Table";

export const BasicInfo: React.FC = () => {
  const handleContactClick = () => {
    window.location.href =
      "mailto:aquino.ralphdaren@gmail.com?subject=Let%27s%20connect&body=Hi%20Ralph%2C%0D%0A%0D%0A";
  };

  const handleViewResumeClick = () => {
    window.open(
      "/resume/resume-portfolio.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="basic-information"
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "3rem 1.5rem 4rem",
        display: "flex",
        flexDirection: "column",
        gap: "2.5rem",
        background: "rgba(15, 23, 42, 0.78)",
        borderRadius: "1.5rem",
        boxShadow: "0 25px 80px rgba(15, 23, 42, 0.9)",
        color: "#e5e7eb",
        border: "1px solid rgba(148, 163, 184, 0.35)",
        backdropFilter: "blur(14px)",
      }}
    >
      {/* Hero area */}
      <HeroImage
        title="Ralph Aquino"
        subtitle="Full Stack Web Development Student • Front-end Developer • Back-end Developer"
        imageUrl="/images/hero-image.jpeg"
      />

      {/* Nav bar */}
      <nav
        aria-label="Portfolio sections"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0.25rem",
          marginBottom: "0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { label: "Work", path: "/work" },
            { label: "Skills", path: "/skills" },
            { label: "Resources", path: "/resources" },
            { label: "Developer Setup", path: "/setup" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                padding: "0.45rem 1.1rem",
                borderRadius: "999px",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                border: "1px solid rgba(148, 163, 184, 0.6)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                background: isActive
                  ? "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(34,211,238,0.18), rgba(99,102,241,0.25))"
                  : "rgba(15, 23, 42, 0.9)",
                color: "#e5e7eb",
                boxShadow: "0 12px 24px rgba(15, 23, 42, 0.9)",
                transform: isActive ? "translateY(-1px)" : "none",
                transition:
                  "background 0.15s ease-out, transform 0.15s ease-out, box-shadow 0.15s ease-out",
              })}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(30,41,59,0.75)";
                el.style.boxShadow = "0 16px 30px rgba(15,23,42,1)";
                el.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "";
                el.style.boxShadow = "";
                el.style.transform = "";
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Main content: About + Quick Facts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.7fr) minmax(0, 1.3fr)",
          gap: "2rem",
        }}
      >
        {/* About Me */}
        <Card
          title="About Me"
          content="I’m a full stack web development student focused on modern front & back-end engineering. My passion lies in crafting intuitive user interfaces and seamless user experiences and building robust server-side applications."
        >
          <p
            style={{
              marginTop: "0.75rem",
              lineHeight: 1.7,
              color: "#9ca3af",
              fontSize: "0.95rem",
            }}
          >
            I like turning requirements into clean, reusable UI components and
            building production-ready workflows. This portfolio highlights
            coursework and projects where I experiment with what my industry can
            offer.
          </p>

          <p
            style={{
              marginTop: "0.75rem",
              lineHeight: 1.7,
              color: "#9ca3af",
              fontSize: "0.95rem",
            }}
          >
            Outside of coding and development, I enjoy playing video games,
            exploring new tech trends, and contributing to open-source projects.
            Feel free to reach out if you’d like to connect or collaborate!
          </p>

          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            <Button label="Contact Me" onClick={handleContactClick} />
            <Button label="View Resume" onClick={handleViewResumeClick} />
          </div>
        </Card>

        {/* Quick Facts */}
        <Card
          title="Quick Facts"
          content="A quick snapshot of where I am in my journey."
        >
          <Table
            headers={["Field", "Details"]}
            data={[
              ["Program", "Full Stack Web Development"],
              ["Focus", "Both Front-end & Back-end"],
              ["Location", "Winnipeg, Canada"],
              ["Current Term", "Third Term"],
              ["Interests", "Design systems, UI/UX, Databases"],
            ]}
          />

          <div
            style={{
              marginTop: "1.25rem",
              fontSize: "0.85rem",
              opacity: 0.9,
              lineHeight: 1.6,
              color: "#9ca3af",
            }}
          >
            Actively exploring opportunities for internships, part-time work,
            and collaboration on front-end projects.
          </div>
        </Card>
      </div>
    </section>
  );
};
