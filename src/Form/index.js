import { useRef, useState } from "react";
import { StyledForm, StyledButton } from "./styled";

const Form = ({ calculateResult, ratesData }) => {
    const [amountExchange, setamountExchange] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amountExchange, currency);
        setamountExchange("");
        inputRef.current.focus();
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            {ratesData.status === "loading" ? (
                <label>
                    Trwa ładowanie danych... Prosimy o chwileczkę cierpliwości
                </label>
            ) : ratesData.status === "error" ? (
                <label error>
                    Przepraszamy coś poszło nie tak. Sprawdź czy masz połącznie z
                    internetem. Jeśli tak to widocznie nasz błąd. Spróbuj później.
                </label>
            ) : (
                <>

                    <label>
                        <p>Wybierz jaką walutę chciałbyś otrzymać:</p>
                        <select
                            name="currencyConverted"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {Object.keys(ratesData.rates).map((rates) => (
                                <option key={rates} value={rates}>
                                    {rates}
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
                        <StyledButton>
                            Przelicz
                        </StyledButton>
                        <StyledButton
                            type="reset"
                        >
                            Resetuj
                        </StyledButton>
                    </div>
                </>
            )}
        </StyledForm>
    );
};

export default Form; 