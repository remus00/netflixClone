import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import SectionCards from "@/components/Card/SectionCards";
import { getVideos } from "@/lib/videos";

export default function Home() {
    const disneyVideos = getVideos();

    return (
        <>
            <Head>
                <title>Netflix Clone</title>
                <meta name="description" content="Netflix Clone" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar username="remus.burlacu00@gmail.com" />
            <Banner
                title="Clifford the red dog"
                subtitle="He's a very cute dog"
                imgURL="/static/clifford.webp"
            />

            <div className={styles.sectionWrapper}>
                <SectionCards
                    title="Disney"
                    videos={disneyVideos}
                    size="large"
                />

                <SectionCards
                    title="Productivity"
                    videos={disneyVideos}
                    size="medium"
                />
            </div>
        </>
    );
}
