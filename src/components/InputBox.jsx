import React, { useRef } from "react";
import "/src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdLibraryAdd } from "react-icons/md";
import { useContext } from "react";
import { ItemContext } from "../store/context";

const InputBox = () => {
  let newData = useRef();
  let newDate = useRef();
  const contextObj  = useContext(ItemContext);
  const addItem = contextObj.addItem;
  const clearInput = ()=> {
    let tempNewData = newData.current.value;
    let tempNewDate = newDate.current.value;
    addItem(tempNewData, tempNewDate);
    if(tempNewData != "" && tempNewDate != "") {
      newData.current.value = "";
      newDate.current.value = "";  
    }
  }
  return (
    <>
    <div className="inputCont">
    <input
        type="text"
        placeholder="Enter To-do Item"
        className="inputItem"
        ref={newData}
      ></input>
      <input
        type="date"
        placeholder="Enter date"
        className="inputDate"
        ref={newDate}
      ></input>
      <button
        type="button"
        className="btn btn-primary addBtn"
        onClick={()=> clearInput()}
      >
        <MdLibraryAdd className="addLogo" />
      </button>
    </div>
    </>
  );
};

export default InputBox;
