import './App.css';
import Footer from './components/Footer';
import HelpCustomerService from './components/HelpCustomerService';
import Navbar from './components/Navbar';
import NavbarMini from './components/NavbarMini';

function App() {
  return (
    <div>
      <Navbar/>
      <NavbarMini/>
      <HelpCustomerService/>
      <Footer/>
    </div>
  );
}

export default App;
