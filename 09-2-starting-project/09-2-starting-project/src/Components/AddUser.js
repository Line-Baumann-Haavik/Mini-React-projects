import styles from "./AddUser.module.css";


export default function AddUser(props){

    function textHandler(event){
        if(/\d/.test(event.target.value) ) {
            props.onError("text", event.target.value);
        }else{
            props.change("text",event.target.value);
        }
        
    }
    function ageHandler(event){
        if(event.target.value > 0){
            props.change("number",event.target.value);
        }else{
            props.onError("number", event.target.value);
        }
        
    }

    return(
        <div className={styles["wrapper"]}>
            <div className={styles["inner-wrapper"]}>
                <label className={styles["text"]}>User Name</label>
                <input className={styles["input"]} type="text" onChange={textHandler} />
            </div>
            <div className={styles["inner-wrapper"]}>
                <label className={styles["text"]}>Age</label>
                <input className={styles["input"]}  type="number" onChange={ageHandler} />
            </div> 
        </div>
    );
}