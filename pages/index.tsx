import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Box from "../components/Box";
import Plan from "../components/Plan";
import Detail from "../components/Detail";
import Logo from "../svg/logo.svg";
import Passion from "../svg/illustration-passions.svg";
import Freedom from "../svg/illustration-financial-freedom.svg";
import Lifestyle from "../svg/illustration-lifestyle.svg";
import Anywhere from "../svg/illustration-work-anywhere.svg";
import Free from "../svg/icon-free.svg";
import Paid from "../svg/icon-paid.svg";
import { useRef, useState } from "react";

export default function Home() {
    const email = useRef<HTMLInputElement>();
    const [message, setMessage] = useState<string>();
    return (
        <div className={styles.main_wrap}>
            <Head>
                <title>Frontend Mentor | Maker pre-launch landing page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header_wrap}>
                <Logo className={styles.logo} />
                <div className={styles.header_illustration}>
                    <div className={styles.illustration_mobile}>
                        <img
                            src="/images/illustration-hero-mobile.png"
                            alt="illustration_mobile"
                        />
                    </div>

                    <div className={styles.image_left}>
                        <img
                            src="/images/illustration-hero-left.svg"
                            alt="image"
                        />
                    </div>

                    <div className={styles.header_info}>
                        <h1>
                            Get paid for the work you <span>love</span> to do.
                        </h1>

                        <Paragraph
                            paragraph=" The 9-5 grind is so last century. We believe in living life on your 
                                               own terms. Whether you’re looking to escape the rat race or set up 
                                               a side hustle, we’ve got you covered."
                            type="primary"
                        />

                        <img src="/images/icon-scroll.svg" alt="icon_scroll" />
                    </div>
                    <div className={styles.image_right}>
                        <img
                            src="/images/illustration-hero-right.svg"
                            alt="image"
                        />
                    </div>
                </div>
            </header>

            <section className={styles.activities_wrap}>
                <div className={styles.activities_container}>
                    <Box
                        margin="left"
                        icon={<Passion />}
                        header={
                            <Header
                                header="Indulge your passions"
                                type="third"
                            />
                        }
                        paragraph={
                            <Paragraph
                                paragraph="Your passions shouldn't be just for the weekend. Earn a living doing what you love."
                                type="primary"
                            />
                        }
                    />

                    <Box
                        margin="top"
                        icon={<Freedom />}
                        header={
                            <Header
                                header="Gain financial freedom"
                                type="third"
                            />
                        }
                        paragraph={
                            <Paragraph
                                paragraph="Start making money work for you. There’s nothing quite like earning while you sleep. "
                                type="primary"
                            />
                        }
                    />

                    <Box
                        margin="left"
                        icon={<Lifestyle />}
                        header={
                            <Header
                                header="  Choose your lifestyle"
                                type="third"
                            />
                        }
                        paragraph={
                            <Paragraph
                                paragraph="Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week."
                                type="primary"
                            />
                        }
                    />

                    <Box
                        margin="top"
                        icon={<Anywhere />}
                        header={
                            <Header header="Work from anywhere" type="third" />
                        }
                        paragraph={
                            <Paragraph
                                paragraph="Selling online means not being pinned down. Want to work AND travel? Go for it! "
                                type="primary"
                            />
                        }
                    />
                </div>
            </section>
            <section className={styles.plans}>
                <div className={styles.plans_info}>
                    <Header header="Our pricing plans" type="secondary" />

                    <Paragraph
                        paragraph=" We only make money when our creators make money. Our plans are always affordable, and 
                                it’s completely free to get started. "
                        type="primary"
                    />
                </div>
                <div className={styles.plans_container}>
                    <Plan
                        colour="dark"
                        icon={<Free />}
                        header={<Header header="Dip your toe" type="third" />}
                        paragraph={
                            <Paragraph
                                paragraph=" Just getting started? No problem at all! Our free plan will take you a long way. "
                                type="primary"
                            />
                        }
                        price="Free"
                    >
                        <Detail detail="Unlimited products" />
                        <Detail detail="  Basic analytics" />
                        <Detail detail="Limited marketplace exposure" />
                        <Detail detail="10% fee per transaction" />
                    </Plan>

                    <Plan
                        dark
                        colour="light"
                        icon={<Paid />}
                        header={
                            <Header
                                dark
                                header="
                                Dive right in"
                                type="third"
                            />
                        }
                        paragraph={
                            <Paragraph
                                dark
                                paragraph="  Ready for the big time? Our paid plan will help you take your business to the next level."
                                type="primary"
                            />
                        }
                        price="$ 25.00"
                        period="/month"
                    >
                        <Detail dark detail=" Custom domain" />
                        <Detail
                            dark
                            detail="    Advanced analytics and reports"
                        />
                        <Detail dark detail="High marketplace visibility" />
                        <Detail dark detail=" 5% fee per transaction" />
                    </Plan>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.footer_container}>
                    <Header
                        header="
                                Get notified when we launch"
                        type="secondary"
                    />
                    <div className={styles.form_wrap}>
                        <form
                            className={styles.form}
                            noValidate
                            onSubmit={e => {
                                const value = email.current?.value;
                                const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
                                e.preventDefault();
                                if (
                                    value === " " ||
                                    typeof value === "undefined"
                                ) {
                                    return setMessage(
                                        "Oops! That doesn't look like an email address"
                                    );
                                }

                                if (!value.match(re)) {
                                    return setMessage(
                                        "Oops! That doesn't look like an email address"
                                    );
                                }
                                setMessage(undefined);
                            }}
                        >
                            <input
                                type="email"
                                name="email"
                                className={`${styles.input} ${
                                    message ? styles.alert : null
                                }`}
                                placeholder="Email addrees"
                                ref={email}
                            />

                            <button
                                type="submit"
                                className={styles.button}
                                name="submit"
                                title="submit"
                            >
                                Get notified
                            </button>
                        </form>
                        {typeof message !== "undefined" ? (
                            <p className={styles.error_message}>{message}</p>
                        ) : null}
                    </div>
                </div>
            </footer>
        </div>
    );
}
