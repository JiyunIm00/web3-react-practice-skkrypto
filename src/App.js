import {ColoredButton, ConnectButton} from "./components/Button.js";
import {useWeb3React} from "@web3-react/core";
import { injectedConnector } from "./connector/index.js";
import CountGet from "./components/CounterGet.js";
import CounterInc from "./components/CounterInc.js";
import CounterDec from "./components/CounterDec.js";

function App() {
  const {chainId, account, activate, active} = useWeb3React();  //like useState, get info from metamask user
  const onClick = () => {
    activate(injectedConnector);
  };

  return (
    <div>
      <div>Chain Id: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <div style={{color: "green"}}>Connected!</div>
      ) : (
        <button onClick={onClick}>connect</button>
      )}
      <CountGet />
      <CounterInc />
      <CounterDec />
    </div>
    
  );
}

export default App;