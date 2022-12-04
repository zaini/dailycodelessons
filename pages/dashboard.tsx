import { useEffect, useState } from "react";
import type { GetServerSidePropsContext, NextPage } from "next";
import { useSession, getSession, signIn } from "next-auth/react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      session: await getSession(context),
    },
  };
};

const Dashboard: NextPage = () => {
  const { data: session } = useSession();

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  if (!session) {
    signIn();
    return <p>Access Denied</p>;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <h2>Hello {session.user?.name}</h2>
      <p>You can view this page because you are signed in.</p>
    </div>
  );
};

export default Dashboard;
