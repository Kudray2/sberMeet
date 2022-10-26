import {dealCloserIndex} from "./data"
import data from './data'
import Random from "./Random";
import BuySell from "./BuySell";

function App() {
return (
<div style={{ margin: "20vw"}}> 
<Random data={data} />
<BuySell data={data} dealCloser={dealCloserIndex}/>
</div>
)
}

export default App
