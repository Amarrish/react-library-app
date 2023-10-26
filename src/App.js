import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landingpage from './Pages/Landingpage';
import Homepage from './Pages/Homepage';
import Addbook from './Pages/Addbook';
import Editpage from './Pages/Editpage';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/Home' element={<Homepage/>}/>
      <Route path='/Addbook' element={<Addbook/>}/>
      <Route path='/Editpage/:id' element={<Editpage/>}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
