import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        backgroundColor: "#282a36",
        color: "#fff",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "#fff" }}>
        <h1
          style={{
            margin: 0,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Daily Code Lessons
        </h1>
      </Link>
      <Link
        href="/courses"
        style={{
          display: "inline-block",
          margin: 0,
          padding: "10px 15px",
          color: "#3ab8ef",
          textDecoration: "none",
          fontWeight: "bold",
          backgroundColor: "transparent",
          border: "2px solid #3ab8ef",
          borderRadius: 4,
        }}
      >
        Courses
      </Link>
    </header>
  );
};

export default Navbar;
