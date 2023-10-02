import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModule.module.css";

export default function ErrorModule(props){
        function removeHandler(){
            props.remove();
        }
    
        return(
            <Card className={styles["backdrop"]}>
                <div className={styles["modal"]}>
                    <h2 className={styles["header"]}>ERROR!</h2>
                    <p className={styles["content"]}>{props.value} is not allowed!</p>
                    <Button remove={removeHandler} />
                </div>
                
            </Card>
        )
}