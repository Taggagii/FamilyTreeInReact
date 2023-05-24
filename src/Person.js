import React, { useState, useEffect } from "react";
import { Names } from "./Names.js";
import { PaddedBox, PaddedBorderBox } from "./Boxes.js";
import { PersonButton } from "./PersonButton.js";

function Person(props) {

  return (
    <PaddedBox value={props.information}>
      <Names
        names={props.information?.names}
        selectFunction={props.selectFunction}
        code={props.information.code}
      ></Names>
      <PaddedBorderBox value={props.information.sex}>Sex: {props.information.sex}</PaddedBorderBox>
      <PaddedBorderBox value={props.information.birthday}>Birthday: {props.information?.birthday?.date}</PaddedBorderBox>
      <PaddedBorderBox value={props.information.death}>Death: {props.information?.death?.date}</PaddedBorderBox>

      <PaddedBorderBox value={props.information.childToFamilyLink}>
        Family:
        <PaddedBox value={props.values[props.information.childToFamilyLink?.code]?.wife}>
          Mother: <Names
                    names={props.values[props.values[props.information.childToFamilyLink?.code]?.wife]?.names}
                    selectFunction={props.selectFunction}
                    code={props.values[props.information.childToFamilyLink?.code]?.wife}
                  ></Names>
        </PaddedBox>
        <PaddedBox value={props.values[props.information.childToFamilyLink?.code]?.husband}>
          Father: <Names
                    names={props.values[props.values[props.information.childToFamilyLink?.code]?.husband]?.names}
                    selectFunction={props.selectFunction}
                    code={props.values[props.information.childToFamilyLink?.code]?.husband}
                  ></Names>
        </PaddedBox>
        <PaddedBox value={props.information.childToFamilyLink?.code}>
          Siblings:
            <PaddedBorderBox value={props.values[props.information.childToFamilyLink?.code]?.children}>
              {
                props.values[props.information.childToFamilyLink?.code]?.children.map((child) => {
                  if (child === props.information.code) {
                    return;
                  }
                  return (<Names
                            names={props.values[child]?.names}
                            selectFunction={props.selectFunction}
                            code={child}
                          ></Names>)
                })
              }
            </PaddedBorderBox>
        </PaddedBox>
      </PaddedBorderBox>

      <PaddedBorderBox value={props.information.spouseToFamilyLink}>
        <PaddedBox value={props.values[props.information.spouseToFamilyLink]?.husband !== props.information.code && props.values[props.values[props.information.spouseToFamilyLink]?.husband]}>
          Husband:
          <Names
            names={props.values[props.values[props.information.spouseToFamilyLink]?.husband]?.names}
            selectFunction={props.selectFunction}
            code={props.values[props.information.spouseToFamilyLink]?.husband}
          ></Names>
        </PaddedBox>
        <PaddedBox value={props.values[props.information.spouseToFamilyLink]?.wife !== props.information.code && props.values[props.values[props.information.spouseToFamilyLink]?.wife]}>
          Wife:
          <Names
            names={props.values[props.values[props.information.spouseToFamilyLink]?.wife]?.names}
            selectFunction={props.selectFunction}
            code={props.values[props.information.spouseToFamilyLink]?.wife}
          ></Names>
        </PaddedBox>
        <PaddedBox value={props.values[props.information.spouseToFamilyLink]?.children}>
          Children:
          <PaddedBorderBox value={props.values[props.information.spouseToFamilyLink]?.children?.length}>
            {
              props.values[props.information.spouseToFamilyLink]?.children?.map((child) => {
                return (<Names
                  names={props.values[child]?.names}
                  selectFunction={props.selectFunction}
                  code={child}  
                ></Names>);
              })
            }
          </PaddedBorderBox>
        </PaddedBox>

      </PaddedBorderBox>
     </PaddedBox>
   );

      

      

      


}

export {Person};
