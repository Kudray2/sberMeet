import { FC } from "react"
import { BestDeal, Data } from "./data"

type Props = { 
  data: Data
  dealCloser: (arg0: number[]) => BestDeal 
}

const BuySell:FC<Props> = ({data, dealCloser}) => {
const deals = Object.values(data)

return( 
  <>
  <h2 style={{textAlign:'center'}}> Task#3&4: Best price  </h2>
 
  {
    deals.map(dealDetails => {
      const {summ, buy, sell} = dealCloser(dealDetails)
     
     return(
      <>
     <div
      key={`${buy}-dt`}
      style={{ 
        display: "flex", 
        justifyContent:'space-between', 
        margin:'40px'
        }} >
      {dealDetails.map( (detail, index) => {
        let bckgColor = ''
        index === buy 
        ? bckgColor = 'green'
        : index === sell
        ? bckgColor = 'red'
        : bckgColor = 'goldenrod' 

        return (
          <div 
          key={`-${index}-dd`}
          style={{
           textAlign:'center',
           lineHeight: '50px',
           width:'50px', 
           height: "50px", 
           border: "1px solid gray", 
           boxSizing:'border-box', 
           background: bckgColor
          }}>
          {detail}
          </div>
        )})}
      </div>
      <h4 key={`${summ}-h4`} style={{textAlign:'center'}} > Deal income: {summ}</h4>
      </>
    )})}
</>
)}

export default BuySell
