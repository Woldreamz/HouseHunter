
export default function Input(props) {
    return(
        <input style={{marginTop: "8px", marginBottom: "8px"}} type={props.type} id={props.id} 
         className={props.className} name={props.name} placeholder={props.placeholder}/>
    );
}