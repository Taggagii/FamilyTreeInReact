import React, { useState, useEffect } from "react";

function PersonButton(props) {
  return (
    <button onClick={() => props.selectFunction(props.code)}>
        {props.children}
    </button>
  );
}

export {PersonButton};
