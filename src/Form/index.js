import "./style.css";

const Form = () => (
    <form className="form">
                <label className="form__label">
                    <p>Wybierz walutę</p>
                    <select className="form__field">currency
                        <option value="EUR">Euro (EUR)</option>
                        <option value="USD">Dolar Amerykański (USD)</option>
                        <option value="CHF">Frank Szwajcarski (CHF)</option>
                        <option value="GBP">Funkt Szterling (GBP)</option>
                    </select>
                </label>
                <label className="form__field ">
                    <p>Kwota do przeliczenia</p>
                    <input 
                    className="form__amount"  
                    placeholder="Kwota" 
                    />
                </label>
                <div className="form__buttons">
                    <button className="form__button" type="submit">Przelicz</button>
                    <button className="form__button" type="reset">Resetuj</button>
                </div>
            </form>
)

export default Form; 