import Card from "./Card";
import styles from "./SectionCards.module.css";

const SectionCards = ({ title, videos = [], size }) => {
    console.log(videos);
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, idx) => {
                    return (
                        <Card id={idx} imageUrl={video.imgURL} size={size} />
                    );
                })}
            </div>
        </section>
    );
};

export default SectionCards;
