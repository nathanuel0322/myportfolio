import './App.css';
import AboutMeSkills from './components/aboutmeskills';
import ContactMe from './components/contactme';
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
    </div>
  );
}

export default App;