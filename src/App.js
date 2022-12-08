import './App.css';
import AboutMeSkills from './components/aboutmeskills';
import ContactMe from './components/contactme';
import Footer from './components/footer';
import MyWork from './components/mywork';
import Specialized from './components/specialized';
import TopBlock from './components/topblock';

function App() {
  return (
    <div className="App">
      <TopBlock />
      <Specialized />
      <MyWork />
      <AboutMeSkills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;