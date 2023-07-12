import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = ({ title, subtitle, imgURL }) => {
    const handleOnPlay = () => {
        console.log("Handle on play");
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <div className={styles.left}>
                    <div className={styles.nseriesWrapper}>
                        <p className={styles.firstLetter}>N</p>
                        <p className={styles.series}>S E R I E S</p>
                    </div>
                    <h3 className={styles.title}>{title}</h3>
                    <h3 className={styles.subTitle}>{subtitle}</h3>
                    <div className={styles.playBtnWrapper}>
                        <button
                            className={styles.btnWithIcon}
                            onClick={handleOnPlay}
                        >
                            <Image
                                src="/static/play_arrow.svg"
                                alt="Play Icon"
                                width="32"
                                height="32"
                            />
                            <span className={styles.playText}> Play</span>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={styles.bannerImg}
                style={{
                    backgroundImage: `url(${imgURL})`,
                }}
            ></div>
        </div>
    );
};

export default Banner;

// className={styles.}
