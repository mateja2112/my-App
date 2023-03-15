import { useContext } from "react";
import { SignInForm } from "../components/SignInForm";
import { AppContext } from "../contexts/AppContext";

export function SignInPage() {
    const context = useContext(AppContext);


    function handleSubmit(formData){
        context.setUsername(formData.username);
        context.setAvatarIndex(formData.avatarIndex);
    }
 
        return (
        <div className="sign-in-page">
            <div className="card">
               <SignInForm onSubmit={handleSubmit}/>
            </div>
        </div>
    );
}