import Card from "./Card";
import styles from "./SectionCards.module.css";

const SectionCards = ({ title }) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                <Card imageUrl="/static/clifford.webp" size="large" />
            </div>
        </section>
    );
};

export default SectionCards;
