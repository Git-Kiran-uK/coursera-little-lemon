import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Logo from './assets/Logo.svg';

function App() {
  return (
    <>
      <Header>
        <Logo/>
        <Nav/>
      </Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
