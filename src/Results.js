import React from "react";

export default function Results(props){
  console.log(props.results);
  if (props.results) {
return (
<h1> {props.results.word}</h1>
);
}
else {
  return null;
}
}
//14:59 in lesson 6 video