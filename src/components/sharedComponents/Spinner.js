import { useState } from "react";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";


// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
display: block;
margin: 0 auto;
border-color: blue;
size: 60px;
`;

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("");

  return (
    <div className="sweet-loading">
      
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <BounceLoader color={"#36D7B7"} loading={loading} css={override} size={150} />
    </div>
  );
}

export default Spinner;