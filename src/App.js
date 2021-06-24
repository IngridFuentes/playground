import './App.css';
import ImageSlider from './components/ImageSlider';
import {Data} from './components/Data';
import AnotherData from './components/AnotherData'

function App() {
  return (
    <div className="App">
      <ImageSlider slides={Data} className="image"/>
      <AnotherData />
    </div>
  );
}

export default App;
