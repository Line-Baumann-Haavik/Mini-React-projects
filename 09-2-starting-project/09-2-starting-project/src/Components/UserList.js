import Card from "./Card";
import styles from "./UserList.module.css";

export default function UserList(props) {
  return props.data.map((element) => {
    return (
      <Card>
            <div className={styles["inner-wrapper"]}>
                {element.name} {element.age}
            </div>
      </Card>
    );
  });
}
