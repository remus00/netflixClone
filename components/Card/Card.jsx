import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

const Card = ({ imageUrl, size }) => {
    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    };

    return (
        <div className={styles.container}>
            CARD
            <div className={classMap[size]}>
                <Image
                    src={imageUrl}
                    alt="Image"
                    layout="fill"
                    className={styles.cardImg}
                />
            </div>
        </div>
    );
};

export default Card;
