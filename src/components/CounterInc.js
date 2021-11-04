import {useWeb3React} from "@web3-react/core";
import {ethers} from "ethers";
import {COUNTER_ABI,COUNTER_ADDRESS} from "../constant";

function CounterInc(){
    const {library, account} = useWeb3React();

    const inc = () => {
        const signer = library?.getSigner(account).connectUnchecked();
        const counterContract = new ethers.Contract(
            COUNTER_ADDRESS,
            COUNTER_ABI,
            signer
        );
        counterContract.inc().then((result) => {
            console.log(result);
        });
    };
    return <button onClick={inc}>Inc</button>
}
export default CounterInc;