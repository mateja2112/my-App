import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitFormField";

export function ChatPage(){
    return(
        <div>
            Chat page
            <div className="message-list">
                <Message author="Mateja" text="Lorem ipsum"/>
                <Message author="Udenko" text="Dolor sit"/>
                         
            </div>
            <form>
                <InputFormField/>
                <SubmitFormField label="Send"/>
            </form>
       </div>
    );
};