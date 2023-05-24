import React, { useState, useEffect } from "react";
import { PersonSelector } from "./PersonSelector.js";
import { Person } from "./Person.js";
import { PersonButton } from "./PersonButton.js";

function App() {
  const [values, setValues] = useState({});
  const [selected, setSelected] = useState("");
  const getData = () => {
    fetch("parsedOutput.json", {
      headers: {                                                               
        "Content-Type": "applicaton/json",
        "Accept": "application/json",
      }
    }).then((response) => {
      return response.json()
    }).then((myJson) => {
      setValues(myJson);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <PersonButton code={""} selectFunction={setSelected}>Home</PersonButton>
      {
      selected.length === 0 ?
      (<PersonSelector values={values} selectFunction={setSelected}></PersonSelector>)
      :
      (<Person information={{...values[selected], "code": selected}} values={values} selectFunction={setSelected}></Person>)
      }
    </div>
  )
}

export default App;
