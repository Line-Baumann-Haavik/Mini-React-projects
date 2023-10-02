import styles from "./Card.module.css";


export default function Card(props){
    return(
        <div className={styles["kort"]}>
            {props.children}
        </div>
    )
}