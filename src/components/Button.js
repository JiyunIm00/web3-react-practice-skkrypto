export function ConnectButton() {
    return(
      <button style={{color:"white", background:"green"}}>Connect</button>
    )
  }
  
  export function PendingButton() {
    return(
      <button style={{color:"white", background:"pink"}}>Pending</button>
    )
  }
  
  export function ColoredButton(props) {
    return (
      <button style={{color:"white", background:props.backgroundcolor}}>Click</button>
    )
  }