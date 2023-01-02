import { useState } from "react";
import Container from "../../ui/commons/Container";
import ErrorMessage from "../../ui/inputs/Error";
import Label from "../../ui/inputs/Label";
import TextInput from "../../ui/inputs/TextInput";

const InputGroup = ({ 
    label, 
    name, 
    placeholder, 
    onFocus, 
    onBlur, 
    error 
}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <Container>
            <Label>{label}</Label>
            <TextInput 
                name={name}
                id={name}
                placeholder={placeholder ?? ''}
                value={value}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}

export default InputGroup;