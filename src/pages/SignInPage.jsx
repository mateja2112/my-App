import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { SubmitFormField } from "../components/SubmitFormField";

export function SignInPage(props) {
    const [formState, setFormState] =useState(''); 
    

    function handleSubmit(event){
        event.preventDefault();
        props.onSubmit(formState);
    }

    function handleUsernameChange(value){
        setFormState(value);
    }

    console.log(formState);

        return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField label="Username" 
                                    type="text"
                                    onChange={handleUsernameChange}
                                    value={formState}/>  
                    <RandomNameButton onRandomName={handleUsernameChange}/>                
                    <SubmitFormField label="Sign in" />                  
                </form>          
            </div>
        </div>
    );
};