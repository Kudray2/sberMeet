import { FC } from "react";
import Card from "./Card";
import { Data } from "./data";

type Props = {
  data: Data;
};

const Random: FC<Props> = ({ data }) => {
  const vals = Object.values( data )
  const makeRandomValIndex = Math.floor( Math.random()* vals.length )
  const randomPricesByDays = vals[ makeRandomValIndex ]

  return (
    <>
      <h2 style={{ textAlign: "center" }}> Task #1&2: Random</h2>
      <main
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "40px",
        }}
      >
        {randomPricesByDays.map((priceByDay, index) => (
          <Card priceByDay={priceByDay} key={`${index}-crd`} />
        ))}
      </main>
    </>
  );
};

export default Random;
