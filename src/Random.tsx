import { FC } from "react"
import { Data } from "./data"

type Props = { 
  data: Data
}

const Random:FC<Props> = ({data}) => { 
  const dataIndexes = Object.keys(data);
  const randomIndex: number = Math.floor(Math.random() * dataIndexes.length);
  const randomPricesByDays = data[+dataIndexes[randomIndex]];
  return (
    <>
    <h2 style={{ textAlign:'center'}}> Task #1&2:  Random</h2>
    <main style={{ display:"flex", justifyContent:'space-between', margin:'40px'}}>
    { randomPricesByDays.map( (priceByDay, index) => 
     <div 
     key={`${priceByDay}-${index}-ps`}
     style={{
      textAlign:'center',
      lineHeight: '50px',
      width:'50px', 
      height: "50px", 
      border: "1px solid gray", 
      boxSizing:'border-box', 
      background: "goldenrod"}} 
   >
     {priceByDay}
   </div>
    
    )}
      </main>
    </>
  )}


export default Random
