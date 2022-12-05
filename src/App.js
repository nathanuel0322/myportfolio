import './App.css';
import MyWork from './components/mywork';
import Specialized from './components/specialized';
import TopBlock from './components/topblock';

function App() {
  return (
    <div className="App">
      <TopBlock />
      <Specialized />
      <MyWork />
    </div>
  );
}

export default App;