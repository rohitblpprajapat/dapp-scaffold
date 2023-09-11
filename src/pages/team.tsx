import type { NextPage } from "next";
import Head from "next/head";
import { TeamView } from "../views";

const Team: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Team - SolShare</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <TeamView />
    </div>
  );
};

export default Team;