import React, { useState, useEffect } from "react";

function PaddedBorderBox(props) {
  return (<>
    {
        props.value && (
            <div Style="border: 1px solid black; padding: 10px;">{props.children}</div>
        )
    }
  </>)
}

function PaddedBox(props) {
  return (<>
    {
        props.value && (
            <div Style="padding: 10px;">{props.children}</div>
        )
    }
  </>)
}

export {PaddedBox, PaddedBorderBox};
