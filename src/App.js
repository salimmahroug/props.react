
import './App.css';
import Playerlist from './Playerlist';
//modifier la couleur de l element h1 en utilisant style en ligne
const backgroundColor={backgroundColor:"blue"}
const styleObject={color:"red",border:"solid 3px yellow",borderRadius:"100px"}
const styles={display:"flex",}
function App() {
  return (
    <div style={backgroundColor} className="App" >
      <div>
        <h1 style={styleObject}>cards players</h1>
      </div> 
      <div style={styles}>
        <Playerlist/>
      </div>
     
    </div>
  );
}

export default App;
