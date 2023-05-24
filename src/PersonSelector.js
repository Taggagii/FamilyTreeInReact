import React, { useState, useEffect } from "react";



function PersonSelector(props) {
  const [values, setValues] = useState({});
  const [filteredValues, setFilteredValues] = useState({});

  useEffect(() => {
    setValues(props.values);
    setFilteredValues(props.values);
  }, [props]);

  const handleChange = (event) => {
    const filteredKeys = Object.keys(values).filter((key) => {
      if (key.match(/@I.*/)) {
        return values[key].names.some((el) => el.fullName.toLowerCase().includes(event.target.value.toLowerCase()));
      } else {
        return false;
      }
    });
    if (filteredKeys.length == 0) {
      setFilteredValues({});
    } else {
      const newData = {};
      filteredKeys.forEach((key) => {
        newData[key] = values[key];
      })

      setFilteredValues(newData);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        id="search"
        name="search"
        onChange={handleChange}
      ></input>
      {
        (
        <div>
          {
            Object.keys(filteredValues).map((value) => {
              if (value.match(/@I.*/)) {
                return (
                  <button
                    onClick={() => props.selectFunction(value)}
                  >{filteredValues[value].names[0].fullName}</button>
                );
              }
            })
          }
          
        </div>
        )
        
      }
    </div>
  )
}

export {PersonSelector};
