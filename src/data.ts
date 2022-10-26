const stocks1: number[] = [2, 3, 5, 2, 4];
const stocks2: number[] = [10, 9, 2, 6, 8];
const stocks5: number[] = [6, 2, 4, 10, 4];
const stocks4: number[] = [6, 5, 4, 3, 2];

export type Data = {
  [key: number]: number[];
};
export type BestDeal = { 
  summ: number
  buy: number
  sell: number
}

export const data: Data = {
  1: stocks1,
  2: stocks2,
  5: stocks5,
  4: stocks4
};


export const dealCloserIndex = (pricesByDays: number[]): BestDeal => {
  const result = { 
    summ : 0,
     buy: 0,
     sell: 0, 
  }
// pricesByDays.forEach( (buy, buyIndex) => {
//   pricesByDays.forEach((sell, sellIndex = buyIndex) => { 
//     let thisSum = sell - buy
//     if ( thisSum > result.summ) { 
//       result.summ = thisSum
//       result.buy = buyIndex
//       result.sell = sellIndex 
//     }
//   })
// } )

pricesByDays.forEach( (buy, buyIndex) => {
  for( let  i=buyIndex + 1; i <pricesByDays.length; i++){
    let thisSum = pricesByDays[i] - pricesByDays[buyIndex]
      if ( thisSum > result.summ) { 
        result.summ = thisSum
        result.buy = buyIndex
        result.sell = i
      }
  }
})
return result
}

export default data;
