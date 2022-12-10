import { useRef, useState } from "react";
import { StyledForm, StyledButton, StyledResult } from "./styled";

const Form = ({ calculateResult, ratesData, result }) => {
   const [amountExchange, setamountExchange] = useState("");
   const [currency, setCurrency] = useState("EUR");
   const inputRef = useRef(null);

   const onFormSubmit = (event) => {
      event.preventDefault();
      calculateResult(amountExchange, currency);
      setamountExchange("");
      inputRef.current.focus();
   };

   const { status, date, rates } = ratesData;

   return (
      <StyledForm
         onSubmit={onFormSubmit}
      >
         {status === "loading" ? (
            <label>
               Trwa ładowanie danych... Prosimy o chwileczkę cierpliwości
            </label>
         ) : status === "error" ? (
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
                     {Object.keys(rates).map((rates) => (
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
               </div>
               <StyledResult>
                  Za kwotę <strong>{result.amountExchange} PLN</strong> otrzymasz
                  <strong> {result.resultFinal}&nbsp;{result.currency} </strong>
               </StyledResult>
               Kursy walut pobierane są z Europejskiego Centralnego Banku
               <br /> na dzień <strong>{date}</strong>
            </>
         )}
      </StyledForm>
   );
};

export default Form; 