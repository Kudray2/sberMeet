import {dealCloserIndex} from "./data"
import data from './data'
import Random from "./Random";
import BuySell from "./BuySell";

function App() {
return (
  <main
  style={{
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-between",
    margin: "20vw",
  }}
>

<Random data={data} />
<BuySell data={data} dealCloser={dealCloserIndex}/>

</main>
)
}

export default App
