import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
        color: "#fff",
        backgroundColor: "#282a36",
        borderTop: "1px solid #ccc",
        marginTop: "30px",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "18px",
        }}
      >
        <span role="img" aria-label="lightning bolt">
          💥
        </span>
        &nbsp;&nbsp; 2022 Daily Code Lessons &nbsp;&nbsp;
        <span role="img" aria-label="computer">
          💻
        </span>
      </p>
    </footer>
  );
};

export default Footer;
