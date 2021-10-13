import React from "react";
import { useState } from "react";
import { DropdownMultiple, Dropdown } from "reactjs-dropdown-component";

function Index() {
  const [searchInput, setSearchInput] = useState(" ");
  const locations = [
    {
      label: "New York",
      value: "new York",
    },
    {
      label: "Oslo",
      value: "oslo",
    },
    {
      label: "Istanbul",
      value: "istanbul",
    },
  ];

  function onChange(item, name) {
    // setSearchInput({searchInput: e.target.value})
    // setSearchInput(e.target.value)
    console.log(item);
  }
  return (
    <div>
      <div>
        <Dropdown
          name="location"
          select={{ value: "new York" }}
          title="Select location"
          searchable={["Search location", "No matching location"]}
          list={locations}
          onChange={onChange}
          // updateInput = {updateInput}
          styles={{
            headerTitle: { color: "red" },
            listItem: { color: "black" },
          }}
        />
        {/* <input onChange={onChange} ></input> */}
      </div>
    </div>
  );
}

export default Index;

// export default function index() {

//   //   updateInput(event){
//   //     this.setState({username : event.target.value})
//   //     }

//   return (

//   );
// }
