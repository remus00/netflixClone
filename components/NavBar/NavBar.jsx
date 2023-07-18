import Link from "next/link";
import styles from "./NavBar.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

const NavBar = ({ username }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();

    const handleOnClickHome = (e) => {
        e.preventDefault();
        router.push("/");
    };

    const handleOnClickMyList = (e) => {
        e.preventDefault();
        router.push("/browse/my-list");
    };

    const handleShowDropdown = (e) => {
        e.preventDefault();
        setShowDropdown(!showDropdown);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link href="/" className={styles.logoLink}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src={"/static/netflix.svg"}
                            alt="Netflix Logo"
                            width="128"
                            height="34"
                        />
                    </div>
                </Link>
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleOnClickHome}>
                        Home
                    </li>
                    <li
                        className={styles.navItem2}
                        onClick={handleOnClickMyList}
                    >
                        My List
                    </li>
                </ul>

                <nav className={styles.navContainer}>
                    <div>
                        <button
                            className={styles.usernameBtn}
                            onClick={handleShowDropdown}
                        >
                            <p className={styles.username}>{username}</p>
                            <Image
                                src={"/static/expand_more.svg"}
                                alt="Expand More Icon"
                                width="24"
                                height="24"
                            />
                        </button>
                    </div>

                    {showDropdown && (
                        <div className={styles.navDropdown}>
                            <div>
                                <Link href="/login" className={styles.linkName}>
                                    Sign Out
                                </Link>
                                <div className={styles.lineWrapper}></div>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
