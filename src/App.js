import './App.css';
import AboutMeSkills from './components/aboutmeskills';
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
    </div>
  );
}

export default App;