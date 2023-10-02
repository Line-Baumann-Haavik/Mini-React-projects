import styles from "./Modal.module.css";
import {Fragment} from "react";
import  ReactDOM  from "react-dom";

function Backdrop(props){
    return(<div className={styles.backdrop} onClick={props.onClose} />)
}

function ModalOverlay(props){
    return(<div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>)
}

const modalElement = document.getElementById("overlays");

export default function Modal(props){
    return(<Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalElement)}
        {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>, modalElement)}
    </Fragment>)
}