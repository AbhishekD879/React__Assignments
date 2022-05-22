
import './App.css';
import Contact from './components/ContactMe/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import MySkills from './components/MY Skills/MySkills';
import AboutMe from './components/Section-AboutMe/AboutMe';
import Info from './components/Section-info/Info';
function App() {
  return (
    <div className="App">
      
     <Header />
     <AboutMe />
     <Info />
     <MySkills />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
