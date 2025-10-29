import React from "react";
import Layout from "@theme/Layout";

const ProjectManifest = () => {
  return (
    <Layout title="Our ideals">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          rowGap: "3rem",
          marginTop: "2rem",
          marginRight: "auto",
          marginBottom: "4rem",
          marginLeft: "auto",
          width: "60%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontFamily: `'Orbitron', sans-serif`,
            textShadow: "0 0 15px rgba(0,0,0,0.25)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "inherit",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow:
              "0 4px 12px rgba(139, 92, 246, 0.6), 0 2px 6px rgba(236, 72, 153, 0.6), 0 1px 3px rgba(248, 113, 113, 0.6)",
            margin: "0 auto",
          }}
          className="docusaurus-theme-classic"
        >
          <h1
            style={{
              margin: 0,
              marginBottom: "1rem",
              fontWeight: "bold",
              textShadow: "0 0 10px rgba(255,255,255,0.85)",
              animation: "pulse 2s infinite",
            }}
          >
            DesignPatternPedia manifesto
          </h1>
          <div
            style={{
              display: "grid",
              rowGap: "1rem",
              margin: "1rem",
            }}
          >
            <p>
              We shan't limit the access to knowledge of design patterns behind
              paywalls, sketchy cookies, forced sign-ups, or dark patterns.
              Users shan't be held in the dark regarding their data and privacy.
              We believe in open access to knowledge, transparency, and user
              empowerment.
            </p>
            <p>
              Together, we envision a digital ecosystem where learning is
              democratized, trust is cultivated, and every individual is
              equipped with the tools and knowledge to build with confidence and
              conscience.
            </p>
            <p>
              This manifesto stands as a pledge to uphold these ideals in every
              line of code, every shared insight, and every interaction within
              our community.
            </p>
            <p>
              And most important of all; we mayn't let ourselves be tempted to
              constantly try to force users to buy our book.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectManifest;
