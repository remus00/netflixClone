import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useState } from "react";

const Login = () => {
    const [userMsg, setUserMsg] = useState("");
    const [email, setEmail] = useState("");

    const handleOnChangeEmail = (e) => {
        setUserMsg("");
        console.log(e.target.value);
        const email = e.target.value;
        setEmail(email);
    };

    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        console.log("Button Pressed");
        if (email) {
            // route to dashboard
        } else {
            // Show user msg
            setUserMsg("Enter a valid email address");
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Netflix SignIn</title>
            </Head>

            <header className={styles.header}>
                <div className={styles.headerWrapper}>
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
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.mainWrapper}>
                    <h1 className={styles.signinHeader}>Sing In</h1>
                    <input
                        type="text"
                        placeholder="Email Address"
                        className={styles.emailInput}
                        onChange={handleOnChangeEmail}
                    />
                    <p className={styles.userMsg}>{userMsg}</p>
                    <button
                        onClick={handleLoginWithEmail}
                        className={styles.loginBtn}
                    >
                        Sing In
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;

/*  className={styles.} */
