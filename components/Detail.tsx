import styles from "./Detail.module.scss";

interface Props {
    readonly detail: string;
    readonly dark?: boolean;
}

const Detail: React.FunctionComponent<Props> = props => {
    const { detail, dark } = props;

    return (
        <p className={`${styles.detail} ${dark ? styles.dark : null}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path
                    fill="#093F68"
                    d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
                />
            </svg>
            {detail}
        </p>
    );
};

export default Detail;
