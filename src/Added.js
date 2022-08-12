import React, { useContext } from "react";
import { Context } from "./Context";

export default function Added(props) {
  let context = useContext(Context);
  return (
    <div className="card">
      <img style={{ width: "100%", height: "100%" }} src={props.link}></img>
      <h1 style={{ fontSize: "25px", color: "pink", padding: "5%" }}>
        {props.name}
      </h1>
      <button
        onClick={() => {
          context.delete(props.name);props.setY(props.y+1)
        }}
        className="add"
        style={{ position: "absolute" }}
      >
        Remove
      </button>
      <div
        style={{
          display: "flex",
          marginTop: "45px",
          justifyContent: "space-evenly",
          width: "100%",
          padding: "20px",
        }}
      >
        <p style={{ fontSize: "35px", color: "aqua" }}>
          Price : {props.price}₾
        </p>
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "yellow",
            border: "none",
            borderRadius: "10%",
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
}
