import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies/currencies";

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

    return (
        <form className="form"
            onSubmit={onFormSubmit}
            onReset={onFormReset}
        >
            <label className="form__label">
                <p>Wybierz jaką walutę chciałbyś otrzymać:</p>
                <select className="form__field"
                    name="currencyConverted"
                    value={currency}
                    onChange={({ target}) => setCurrency(target.value)}
                >
                    {currencies.map(currency => (
                        <option 
                        key={currency.short}
                        value={currency.short}
                        >
                            {currency.name}
                        </option>
                    ))}
                </select>
            </label>
            <label className="form__field ">
                <p>Kwota do przeliczenia</p>
                <input
                    className="form__amount"
                    placeholder="Ile masz zł?"
                    type="number"
                    required min="0.01"
                    step="0.01"
                    value={amountExchange}
                    onChange={({ target }) => setamountExchange(target.value)}
                />
            </label>
            <div className="form__buttons">
                <button className="form__button">Przelicz</button>
                <button className="form__button" type="reset" >Resetuj</button>
            </div>
        </form>
    )

}
 
export default Form; 