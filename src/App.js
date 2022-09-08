import MiApi from "./components/MiApi";
import Nav from "./components/Nav";
import Head from "./components/Head";
import './bootstrap.min.css';


const App = () => {
  
  return (
    <div className="app" >      
      <Nav />
      <Head src ='https://www.freetogame.com/g/521/thumbnail.jpg'/>      
      <MiApi />
    </div>
  )

}

export default App;
