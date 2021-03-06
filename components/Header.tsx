import styles from "./Header.module.scss";

interface Props {
    readonly header: string;
    readonly type: string;
    readonly dark?: boolean;
}

const Header: React.FunctionComponent<Props> = props => {
    const { header, type, dark } = props;
    return (
        <h6
            className={`${styles.header} ${styles[type]} ${
                dark ? styles.dark : null
            } `}
        >
            {header}
        </h6>
    );
};

export default Header;
