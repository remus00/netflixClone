import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import SectionCards from "@/components/Card/SectionCards";
import { getVideos } from "@/lib/videos";

export async function getServerSideProps() {
    const disneyVideos = await getVideos("disney trailer");
    const travelVideos = await getVideos("travel");
    const productivityVideos = await getVideos("productivity");
    // const popularVideos = await getVideos();
    return { props: { disneyVideos, travelVideos, productivityVideos } };
}

export default function Home({
    disneyVideos,
    productivityVideos,
    travelVideos,
}) {
    console.log("DA HOME", disneyVideos);
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

                <SectionCards title="Travel"
                    videos={travelVideos}
                    size="small"
                />
                <SectionCards
                    title="Productivity"
                    videos={productivityVideos}
                    size="medium"
                />
                <SectionCards
                    title="Popular"
                    videos={disneyVideos}
                    size="small"
                />
            </div>
        </>
    );
}
