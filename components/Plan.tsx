import { ReactNode } from "react";
import styles from "./Plan.module.scss";

interface Props {
    readonly colour: string;
    readonly icon: ReactNode;
    readonly header: ReactNode;
    readonly paragraph: ReactNode;
    readonly price: string;
    readonly period?: string;
    readonly dark?: boolean;
}

const Plan: React.FunctionComponent<Props> = props => {
    const {
        colour,
        icon,
        header,
        paragraph,
        price,
        period,
        children,
        dark
    } = props;
    return (
        <div className={`${styles.plan_wrap} ${styles[colour]}`}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.info_wrap}>
                {header}
                {paragraph}
            </div>

            <div className={`${styles.price}   ${dark ? styles.darker : null}`}>
                <p>
                    {price}
                    <span>{period}</span>
                </p>
            </div>

            <div className={styles.info_details}>{children}</div>
        </div>
    );
};

export default Plan;
