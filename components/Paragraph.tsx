import styles from "./Paragraph.module.scss";

interface Props {
    readonly paragraph: string;
    readonly type: string;
    readonly dark?: boolean;
}

const Paragraph: React.FunctionComponent<Props> = props => {
    const { paragraph, type, dark } = props;
    return (
        <p
            className={`${styles.paragraph} ${styles[type]}  ${
                dark ? styles.dark : null
            }`}
        >
            {paragraph}
        </p>
    );
};

export default Paragraph;
