import './App.css';
import Result from './Result';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Form from './Form';
import Information from './Information';
import { useState } from "react";
import { currencies } from "./currencies/currencies";

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (amountExchange, currency) => {
    const rateExchange = currencies.find(({ short }) => short === currency).rate;
    const currencyFinal = currencies.find(({ short }) => short === currency).short;

    setResult((+amountExchange / rateExchange).toFixed(2) + currencyFinal)
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Form
        calculateResult={calculateResult}
        setResult={setResult}
      />
      <Result
        result={result}
      />
      <Information />
      <Footer />
    </Container>
  );
}

export default App;
