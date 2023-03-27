import { useEffect, useState } from "react";
import { FormField } from "./FormField";
import { avatarImages } from "../library/avatar";


export function AvatarFormField (props) {
    const[index, setIndex] = useState(0);

    useEffect(()=>{
        props.onChange(index);
    },[index, props]);

    function handlePreviousClick(){
        if (index <= 1) {
            setIndex(avatarImages.length-1);
        } else {
            setIndex(index-1)
        }
    }

        function handlekNextClick(){
        if (index >= avatarImages.length-1 ){
            setIndex(0);
        } else {
            setIndex (index +1);
        }
    }

    


    return (
        <FormField>
            <button type="button" onClick={handlePreviousClick}>Previous</button>
            <img src={avatarImages[index]} alt={index} width="100" height="100" />
            <button type="button" onClick={handlekNextClick}>Next</button>
        </FormField>
    )
}