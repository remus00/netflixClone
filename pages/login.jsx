import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Login.module.css";

const Login = () => {
    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        console.log("Button Pressed");
    };

    return (
        <div>
            <Head>
                <title>Netflix SignIn</title>
            </Head>

            <header>
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

                <main className={styles.main}>
                    <div className={styles.mainWrapper}>
                        <h1 className={styles.signinHeader}>Sing In</h1>
                        <input
                            type="text"
                            placeholder="Email Address"
                            className={styles.emailInput}
                        />
                        <p className={styles.userMsg}></p>
                        <button
                            onClick={handleLoginWithEmail}
                            className={styles.loginBtn}
                        >
                            Sing In
                        </button>
                    </div>
                </main>
            </header>
        </div>
    );
};

export default Login;

/*  className={styles.} */
