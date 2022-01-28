import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  createTheme
} from '@material-ui/core/styles';

function Entries(props) {
  const [hovered, setHover] = useState(false);
  // console.log(hovered);
  return (
    <div className="entries-list" onClick={() => setHover(!hovered)}>
      <div className="info">
        <p> {props.entry}</p>
      </div>
      <div className="info">
        <p style={{ color: props.amount < 0 ? "#fc6d81" : "#BBD196" }}>
          {props.amount < 0 && "-"} ${Math.abs(props.amount).toLocaleString()}
        </p>
      </div>
      {hovered && (
          <CancelIcon
            className="delete-btn"
            className="delete-btn"
            onClick={() => {
              props.onDelete(props.index);
            }}
          />
      )}
    </div>
  );
}

export default Entries;
// className={props.amount < 0 ? "expense-box" : "income-box"}
