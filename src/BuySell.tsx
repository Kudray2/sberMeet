import { FC } from "react";
import Card from "./Card";
import { BestDeal, Data } from "./data";

type Props = {
  data: Data;
  dealCloser: (arg0: number[]) => BestDeal;
};

const BuySell: FC<Props> = ({ data, dealCloser }) => {
  const deals = Object.values(data);

  return (
    <>
      <h2 style={{ textAlign: "center" }}> Task#3&4: Best price </h2>

      {deals.map((dealDetails, index) => {
        const { summ, buy, sell } = dealCloser(dealDetails);

        return (
          <>
            <div
              key={`${index}-dt`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "40px",
              }}
            >
              {dealDetails.map((detail, index) => {
                let bckgColor = "";
                index === buy
                  ? (bckgColor = "green")
                  : index === sell
                  ? (bckgColor = "red")
                  : (bckgColor = "goldenrod");

                return (
                  <Card
                    priceByDay={detail}
                    color={bckgColor}
                    key={`${index}-bdcrd`}
                  />
                );
              })}
            </div>
            {summ ? (
              <h4 key={`${index}-h4`} style={{ textAlign: "center" }}>
                {" "}
                Deal income: {summ}
              </h4>
            ) : (
              <h4
                key={`${index}-h42`}
                style={{ textAlign: "center", color: "red" }}
              >
                No deal
              </h4>
            )}
          </>
        );
      })}
    </>
  );
};

export default BuySell;
