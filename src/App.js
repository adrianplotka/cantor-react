import './App.css';
import Result from './Result';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Form from './Form';
import Information from './Information';

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Form/>
      <Result/>
      <Information/>
      <Footer/>
    </Container>
  );
}

export default App;
