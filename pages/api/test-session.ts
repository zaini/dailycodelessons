import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const testSession = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) {
    // Not Signed in
    res.status(401).json({ message: "Unauthenticated user" });
  }
  // Signed in
  res.status(200).json({ message: "Success", session });
};

export default testSession;
