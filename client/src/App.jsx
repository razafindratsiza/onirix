import React from "react";
import Landing from "./Components/Landing"
import Chat from "./Components/Chat";
function App() {
  const [show, setShow] = React.useState('landing')
 const handleChange = (value) => {
    setShow(value)
  }
  return (
    <div>
      {show == 'landing' ?
        <Landing onClick={handleChange} />
        :
        <Chat onClick={handleChange}/>
      }
    </div>
  );
}
export default App