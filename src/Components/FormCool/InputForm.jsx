import React from "react";
import { Label, Input, DivIcon } from "./FormActStyled";

const InputForm = ({ name, placeholder, type, state, changeState, regularExpresion }) => {

    const handleChange = (e) => {
        changeState({
            ...state,
            field: e.target.value,
        });
    };


    const validate = () => {
        if (regularExpresion) {
            if (regularExpresion.test(state.field)) {
                changeState({ ...state, validate: "true" });
            } else {
                changeState({ ...state, validate: "false" });
            }
        }
    };

    return (
        <div>
            <Label htmlFor={name} valid={state.validate}></Label>
            <Input
                placeholder={placeholder}
                type={type}
                id={name}
                value={state.field}
                onChange={handleChange}
                onKeyUp={validate}
                onBlur={validate}
                valid={state.validate}
            />
            <DivIcon valid={state.validate}>
                <ion-icon
                    name={
                        state.validate === "true"
                            ? "checkmark-circle-outline"
                            : "close-circle-outline"
                    }
                ></ion-icon>
            </DivIcon>
        </div>
    );
};

export default InputForm;
