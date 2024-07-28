import { createContext, useReducer, useState } from "react";
export const ItemContext = createContext({
  Items: [],
  addItem: () => {},
  deleteItem: () => {},
  warnMsg: 0,
});
let count = 0;
const updateTodoItem = (currTodoItem, action) => {
  let newTodoItem = currTodoItem;
  if (action.type == "ADD_ITEM") {
    newTodoItem = [
      ...currTodoItem,
      {
        name: action.payload.curData,
        date: action.payload.curDate,
        count: action.payload.count,
      },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newTodoItem = currTodoItem.filter(
      (item) => item.count != action.payload.countVal
    );
  }
  count = newTodoItem.length;
  return newTodoItem;
};
const ItemsContextProvider = ({ children }) => {
  let [Items, dispatchTodoItems] = useReducer(updateTodoItem, []);
  let [warnMsg, setWarnMsg] = useState(0);
  const addItem = (curData, curDate) => {
    if(curData == "" || curDate == "") {
      setWarnMsg(1);
    }else {
      count++;
      const newTodoItem = {
        type: "ADD_ITEM",
        payload: {
          curData,
          curDate,
          count,
        },
      };
      setWarnMsg(0);
      dispatchTodoItems(newTodoItem);  
    }
  };
  const deleteItem = (countVal) => {
    setWarnMsg(0);
    const newTodoItem = {
      type: "DELETE_ITEM",
      payload: {
        countVal,
      },
    };
    dispatchTodoItems(newTodoItem);
  };

  return (
    <ItemContext.Provider
      value={{
        Items: Items,
        addItem: addItem,
        deleteItem: deleteItem,
        warnMsg: {warnMsg, setWarnMsg}
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemsContextProvider;
