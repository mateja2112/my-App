import { useReducer, useState } from "react";
import { SignInPage } from "./pages/SignInPage";
import {ChatPage} from "./pages/ChatPage";

function App() {
  const [username, setUsername] = useState('');

function handleSubmit(username){
  setUsername(username)
  }

  return (
    <div>
      {username===''&&<SignInPage onSubmit={handleSubmit}/>}
      {username !==''&&<ChatPage/>}
    </div>
  );
}

export default App;
