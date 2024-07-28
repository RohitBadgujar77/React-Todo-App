import { useContext } from "react";
import { ItemContext } from "../store/context";
import { MdCancel } from "react-icons/md";
import "/src/App.css";

const WarnMsg = () => {
  let itemContext = useContext(ItemContext);
  const changeMsg = ()=> {
    itemContext.warnMsg.setWarnMsg(0);
  }
    return (itemContext.warnMsg.warnMsg ? <><div className={`warnMsg ${itemContext.warnMsg.warnMsg ? `moveDown` : `moveUp`}`}>
      Todo box cannot be empty
      <MdCancel className="cancelBtn" onClick={changeMsg}/>
      </div>
    </> : <></>);
};

export default WarnMsg;
//<MdCancel />

