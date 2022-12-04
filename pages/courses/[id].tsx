import type { NextPage } from "next";
import Head from "next/head";
import { supabase } from "../../utils/supabaseClient";
import { Lesson } from "../../types/lessons/lessons";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";

export async function getServerSideProps(context: any) {
  const id = context.params.id;

  const { data, error }: any = await supabase
    .from("lessons")
    .select(`*, segments (*)`)
    .eq("id", id)
    .order("id", { foreignTable: "segments" });

  return {
    props: { lesson: data[0] },
  };
}

const Lesson: NextPage<{ lesson: Lesson }> = ({ lesson }) => {
  return (
    <div>
      <Head>
        <title>Daily Code Lessons | Lesson {lesson.id}</title>
        <meta
          name="description"
          content="Create and share prompts for different AI systems"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Lesson {lesson.id}: {lesson.title}
      </h1>
      <p>{lesson.description}</p>
      {lesson.segments.map((segment) => {
        return (
          <div key={segment.id}>
            <h3>{segment.title}</h3>
            <div>
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        showLineNumbers
                        children={String(children).replace(/\n$/, "")}
                        language={match[1]}
                        PreTag="div"
                        style={dracula as any}
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {segment.description}
              </ReactMarkdown>
            </div>
            {segment.task != null && (
              <div>
                {/* <Sandpack /> */}
                <h4>Coding task</h4>
                <p>{segment.task.title}</p>
                <ReactMarkdown
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter
                          showLineNumbers
                          wrapLongLines
                          children={String(children).replace(/\n$/, "")}
                          language={match[1]}
                          PreTag="div"
                          style={dracula as any}
                          {...props}
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {segment.task.initialCode}
                </ReactMarkdown>
                {segment.task.replitUrl != null && (
                  <Link href={segment.task.replitUrl}>
                    <button
                      style={{
                        fontFamily: "Inconsolata",
                        fontSize: "16px",
                        padding: "10px 20px",
                        color: "#f8f8f2",
                        backgroundColor: "#44475a",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Open in Replit
                    </button>
                  </Link>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Lesson;
