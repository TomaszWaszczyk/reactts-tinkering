import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: "#333",
        color: "#fff",
        padding: "10px 20px",
        textAlign: "center",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <p>
        © {new Date().getFullYear()} Currencies Dashboard. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
