import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Lesson } from "../../types/lessons/lessons";
import { supabase } from "../../utils/supabaseClient";

export async function getServerSideProps(context: any) {
  const { data, error }: any = await supabase.from("lessons").select();

  return {
    props: { lessons: data },
  };
}

const Home: NextPage<{ lessons: Lesson[] }> = ({ lessons }) => {
  return (
    <div>
      <Head>
        <title>Daily Code Lessons</title>
        <meta
          name="description"
          content="Create and share prompts for different AI systems"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <ul style={styles.list}>
          {lessons.map((lesson) => {
            return (
              <li key={lesson.id}>
                <Link href={`/courses/${lesson.id}`} style={styles.link}>
                  {lesson.title} | {lesson.duration}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  list: {
    listStyleType: "none",
    padding: 0,
  },
  link: {
    color: "#282a36",
    fontSize: "1.2em",
    textDecoration: "none",
    display: "block",
    padding: "8px 16px",
  },
};

export default Home;
