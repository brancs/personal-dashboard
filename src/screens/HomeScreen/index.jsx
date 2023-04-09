import Head from "next/head";
import Style from "./index.module.css";
import Title from "@/components/Title";
import CardScores from "./CardScores";
import CardTimeline from "./CardTimeline";
import CardBreakTimer from "./CardBreakTimer";
import CardWorkblocks from "./CardWorkblocks";
import CardActivity from "./CardActivity";
import CardProjects from "./CardProjects";
import CardTimeBreakdown from "./CardTimeBreakdown";
import CardWorkHours from "./CardWorkHours";

function index() {
  const currentDate = new Date().toLocaleDateString("pt-br", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Head>
        <title>Personal Dashboard</title>
        <meta name="description" content="Personal Dashboard" />
      </Head>
      <main>
        <div className={Style.mainGrid}>
          <Title as={"h2"}>{currentDate}</Title>
          <div className={`${Style.mainCols}`}>
            <div className={`${Style.mainCol1}`}>
              <CardTimeline />
              <div className={`${Style.subCol1}`}>
                <div className={`${Style.subCol2}`}>
                  <CardBreakTimer />
                  <CardActivity />
                </div>
                <div className={`${Style.subCol2}`}>
                  <CardWorkblocks />
                  <CardProjects />
                </div>
              </div>
            </div>
            <div className={`${Style.mainCol2}`}>
              <CardWorkHours />
              <CardScores />
              <CardTimeBreakdown />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default index;
