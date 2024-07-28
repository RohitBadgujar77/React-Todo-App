import React from "react";
import "/src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./todoItems.module.css";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { ItemContext } from "../store/context";
const Todoitem = ()=> {
  const contextObj = useContext(ItemContext);
  const changeCount = (items)=> {
    let i = 1;
    items.map((item)=> {
      item.count = i;
      i++;
    })
    return items;
  }  
  const items = changeCount(contextObj.Items);
  const deleteItem = contextObj.deleteItem;
  return (
    <>
      {items.map((item) => {
        return (
        <div className={`${styles.todoBox}`} key={item.count}>
          <div className={`${styles.todoNum}`}>{item.count}</div>
          <div className={`${styles.todoData}`}>{item.name}</div>
          <div className={`${styles.todoDate}`}>{item.date}</div>
          <button
            type="button"
            className={`btn btn-danger ${styles.delBtn}`}
            onClick={() => deleteItem(item.count)}
          >
            <MdDelete className={`${styles.delLogo}`} />
          </button>
        </div>)
      })}
    </>
  );
};

export default Todoitem;
