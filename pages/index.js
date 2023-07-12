import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "@/components/Banner/Banner";

export default function Home() {
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

            <h1>Netflix</h1>

            <Banner
                title="Clifford the red dog"
                subtitle="He's a very cute dog"
                imgURL="/static/clifford.webp"
            />

            {/* <NavBar />
            <Card /> */}
        </>
    );
}
