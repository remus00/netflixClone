import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

const Card = ({ imageUrl, size }) => {
    return (
        <div>
            <Image src={imageUrl} alt="Image" width="300" height="300" />
        </div>
    );
};

export default Card;
