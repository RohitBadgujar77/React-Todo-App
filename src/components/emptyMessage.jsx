import "/src/App.css";
import { useContext } from "react";
import { ItemContext } from "../store/context";

const EmptyMessage = () => {
  const contextObj = useContext(ItemContext);
  const Items = contextObj.Items;

  {
    if (Items.length == 0) {
      return <div className="empty">Todo-List is empty</div>;
    }
  }
};

export default EmptyMessage;
