import { useContext} from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatPage} from "./pages/ChatPage";
import { AppContext } from "./contexts/AppContext";


function App() {
  const context =useContext(AppContext);
  


  return (
    <div>
      {!context.isSignedIn &&<SignInPage/>}
      {context.isSignedIn &&<ChatPage/>}
    </div>
  );
}

export default App;
