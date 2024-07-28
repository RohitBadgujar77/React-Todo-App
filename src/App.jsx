import "./App.css";
import InputBox from "./components/InputBox";
import Todoitem from "./components/todoItems";
import EmptyMessage from "./components/emptyMessage";
import ItemsContextProvider from "./store/context";
import Heading from "./components/heading";
import WarnMsg from "./components/warnMsg";
function App() {
  return (
    <>
      <ItemsContextProvider>
        <Heading></Heading>
        <WarnMsg></WarnMsg>
        <div className="container">
          <InputBox></InputBox>
          <div className="todoCont">
            <EmptyMessage></EmptyMessage>
            <Todoitem></Todoitem>
          </div>
        </div>
      </ItemsContextProvider>
    </>
  );
}

export default App;
