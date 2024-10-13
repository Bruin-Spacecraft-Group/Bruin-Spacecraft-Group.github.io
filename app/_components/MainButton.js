import React from "react";

export default function MainButton(props) {
  return (
    <button className="rounded-lg border-2 border-highlight hover:bg-highlight py-1.5 px-5 font-semibold text-sm" >{props.btn_txt}</button>
  )
}