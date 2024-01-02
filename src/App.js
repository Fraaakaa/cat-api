import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect (() =>{
    fetchData();
  }, []);

  async function fetchData(){
    const data = await fetch("https://api.thecatapi.com/v1/images/search");
    const json = await data.json();


    setImg(json[0].url);
    setLoading(false);
  }

  return <div className="App">
    {loading == true ? (
      <p>Cargando...</p>
    ) : (
      <img src={img} alt="gatito" /> 
    )}
    <button onClick={fetchData}>Cambiar</button>
    
  </div>;
}

export default App;
