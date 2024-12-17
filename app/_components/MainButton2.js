import React from "react";

export default function MainButton2(props) {
  return (
    <button className="rounded-lg border-2 border-highlight2 bg-highlight2 hover:bg-highlight hover:border-highlight py-1.5 px-5 font-semibold text-sm">
      {props.btn_txt}
    </button>
  );
}
