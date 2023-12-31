import React, { useState } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import cls from "classnames";

const Card = ({
    imageUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80",
    size = "medium",
    id,
}) => {
    const [imgSrc, setImgSrc] = useState(imageUrl);
    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    };

    const handleOnError = () => {
        console.log("Error CARD");
        setImgSrc(
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80",
        );
    };

    const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

    return (
        <div className={styles.container}>
            <motion.div
                className={cls(styles.imgMotionWrapper, classMap[size])}
                whileHover={{ ...scale }}
            >
                <Image
                    src={imgSrc}
                    alt="Image"
                    layout="fill"
                    onError={handleOnError}
                    className={styles.cardImg}
                />
            </motion.div>
        </div>
    );
};

export default Card;
