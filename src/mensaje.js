const MensajeComponente = (props) =>{
    console.log(props)
    
    return <h1 style={{color: props.color }} >{props.message}</h1>
  }

export default MensajeComponente