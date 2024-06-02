import './App.css';
import ImageSlider from './Components/ImageSlider';
import mousse from "./Components/assets/mousse.jpg";
import chocoCake from "./Components/assets/chocolate-cake.jpg";
import cake from "./Components/assets/cake.jpg";

function App() {
  return (
    <div className="App">
        <ImageSlider height={500} width={760} images={[mousse, chocoCake, cake]} text={["Mousse", "Chococake"]} fontSize={30} textColor="#ffffff" wantAnimation={true} arrowSize={40} />
    </div>
  );
}

export default App;
