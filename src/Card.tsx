import { FC } from "react";
type Props = {
  priceByDay: number;
  color?: string;
};

const Card: FC<Props> = ({ priceByDay, color="goldenrod" }) => {
  return (
    <div
      style={{
        textAlign: "center",
        lineHeight: "50px",
        width: "50px",
        height: "50px",
        border: "1px solid gray",
        borderRadius: "5px",
        boxSizing: "border-box",
        background: color,
      }}
    >
      {priceByDay}
    </div>
  );
};

export default Card;
