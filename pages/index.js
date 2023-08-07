import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import SectionCards from "@/components/Card/SectionCards";
import { getPopularVideos, getVideos } from "@/lib/videos";

export async function getServerSideProps() {
    const disneyVideos = await getVideos("disney trailer");
    const travelVideos = await getVideos("travel");
    const productivityVideos = await getVideos("productivity");
    const popularVideos = await getPopularVideos();
    return {
        props: {
            disneyVideos,
            travelVideos,
            productivityVideos,
            popularVideos,
        },
    };
}

export default function Home({
    disneyVideos,
    productivityVideos,
    travelVideos,
    popularVideos,
}) {
    console.log("DA HOME", disneyVideos);
    return (
        <div className={styles.container}>
            <Head>
                <title>Netflix Clone</title>
                <meta name="description" content="Netflix Clone" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.main}>
                <NavBar username="prova@gmail.com" />
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
                        title="Travel"
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
                        videos={popularVideos}
                        size="small"
                    />
                </div>
            </div>
        </div>
    );
}
