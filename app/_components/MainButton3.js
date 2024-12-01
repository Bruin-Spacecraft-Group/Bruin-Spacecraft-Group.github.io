import React from "react";

export default function MainButton3(props) {
  return (
    <button className="rounded-lg border-2 border-bg bg-bg text-bg2 hover:bg-bg2 hover:text-bg py-1.5 px-5 font-semibold text-sm">
      {props.btn_txt}
    </button>
  );
}
