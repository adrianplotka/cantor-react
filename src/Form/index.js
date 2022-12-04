import { useRef, useState } from "react";
import { currencies } from "../currencies/currencies";
import { StyledForm, StyledButton } from "./styled";

const Form = ({ calculateResult, setResult }) => {
    const [amountExchange, setamountExchange] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amountExchange, currency);
    };

    const onFormReset = () => {
        setamountExchange("");
        setCurrency("EUR");
        setResult("");
    };

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
            onReset={onFormReset}
        >
            <label>
                <p>Wybierz jaką walutę chciałbyś otrzymać:</p>
                <select
                    name="currencyConverted"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    {currencies.map(currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    ))};
                </select>
            </label>
            <label>
                <p>Kwota do przeliczenia</p>
                <input
                    ref={inputRef}
                    placeholder="Ile masz zł?"
                    type="number"
                    required min="0.01"
                    step="0.01"
                    value={amountExchange}
                    onChange={({ target }) => setamountExchange(target.value)}
                />
            </label>
            <div>
                <StyledButton onClick={focusInput}>
                    Przelicz
                    </StyledButton>
                <StyledButton 
                type="reset" 
                onClick={focusInput}
                >
                Resetuj
                </StyledButton>
            </div>
        </StyledForm>
    );
};

export default Form; 