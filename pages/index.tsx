import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daily Code Lessons</title>
        <meta name="description" content="Daily code lessons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Daily Code Lessons</h1>
        <p>
          Welcome to Daily Code Lessons, where you can learn Python and other
          programming languages online.
        </p>
        <h2>Featured Courses</h2>
        <ul>
          <li>
            <Link href="#">Python for Beginners</Link>
          </li>
          <li>
            <Link href="#">Data Structures and Algorithms in Python</Link>
          </li>
          <li>
            <Link href="#">Web Development with Python and Django</Link>
          </li>
        </ul>
        <div style={{ textAlign: "center" }}>
          <Link href="/courses">
            <button
              style={{
                fontFamily: "Inconsolata",
                fontSize: "32px",
                padding: "10px 20px",
                color: "#f8f8f2",
                backgroundColor: "#44475a",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              View All Courses
            </button>
          </Link>
        </div>
        <h2>Join Our Community</h2>
        <p>
          Join our community of learners and instructors on our forums and
          social media channels to share your knowledge and experiences.
        </p>
        <ul>
          <li>
            <Link href="#">Forums</Link>
          </li>
          <li>
            <Link href="#">Facebook</Link>
          </li>
          <li>
            <Link href="#">Twitter</Link>
          </li>
          <li>
            <Link href="#">LinkedIn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
