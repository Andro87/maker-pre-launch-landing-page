import { ReactNode } from "react";
import styles from "./Box.module.scss";

interface Props {
    readonly margin?: string;
    readonly icon: ReactNode;
    readonly header: ReactNode;
    readonly paragraph: ReactNode;
}

const Box: React.FunctionComponent<Props> = props => {
    const { margin, icon, header, paragraph } = props;
    return (
        <div className={`${styles.box_wrap} ${styles[margin]}`}>
            <div className={styles.icon_wrap}>{icon}</div>
            <div className={styles.details_wrap}>
                {header}
                {paragraph}
            </div>
        </div>
    );
};

export default Box;
