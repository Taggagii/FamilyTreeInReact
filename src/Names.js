import React, { useState, useEffect } from "react";
import { PaddedBox, PaddedBorderBox } from "./Boxes.js";
import { PersonButton } from "./PersonButton.js";

function Names(props) {
  return (
    <PaddedBorderBox value={props.names}>
        {
            props.names.map((name) => {
                return (
                    <PaddedBox value={name}>
                        <PersonButton code={props.code} selectFunction={props.selectFunction}>{name.fullName && (<p>Full name: {name.fullName}</p>)}</PersonButton>
                        {name.nickname && (<p>Nickname: {name.nickname}</p>)}
                        {name.type && (<p>Type: {name.type}</p>)}
                    </PaddedBox>
                );
            })
        }
    </PaddedBorderBox>
  );
}

export {Names};
