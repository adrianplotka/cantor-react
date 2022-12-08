import Result from './Result';
import Footer from './Footer';
import Header from './Header';
import Form from './Form';
import Information from './Information';
import { useState } from "react";
import { StyledContainer } from "./StyledContainer";
import { useCurrencies } from "./useCurrencies";

function App() {
  const [result, setResult] = useState({});
  const ratesData = useCurrencies();

  const calculateResult = (amountExchange, currency) => {
    const rateExchange = ratesData.rates[currency];

    setResult({
      resultFinal: (+amountExchange * rateExchange).toFixed(2),
      currency,
    });
  };

  return (
    <StyledContainer>
      <Header title="Lista zadań" />
      <Form
        calculateResult={calculateResult}
        ratesData={ratesData}
        setResult={setResult}
      />
      <Result
        title="Otrzymasz:"
        result={result}
        ratesData={ratesData}
      />
      <Information />
      <Footer />
    </StyledContainer>
  );
};

export default App;
