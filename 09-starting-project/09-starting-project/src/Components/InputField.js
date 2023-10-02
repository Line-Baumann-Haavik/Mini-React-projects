

export default function InputField(props){
    
    function endringHandle(event){
        if(event.target.value.trim().length > 0){
            props.changes(props.id, event.target.value);            
        }else{
            props.changes(0, 0);
        }
    }

    return(
        <p>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="number" id={props.id} onChange={endringHandle}/>
          </p>
    )
}