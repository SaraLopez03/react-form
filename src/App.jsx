import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from "./components/Card"
import './App.css'

function App() {
  const[userName, setUserName] = useState("");
  const[generMusic, setGenerMusic] = useState("");
  const[send, setSend] = useState(false);
  const[errorSelect, setErrorSelect] = useState("");

  const onChangeUserName = (event) => {
    setUserName(event.target.value)
  };

  const onChangeGenerMusic = (event) => {
    setGenerMusic(event.target.value)
  };

  const validUserName = (userName) => {
    
    if(userName.length >= 3 && userName[0] !== " " && generMusic.length >= 6){
      return true
    } else {
      setErrorSelect("Por favor chequea que la información sea correcta");
      return false;
    }
  }

  const handleSubmit = (event)  => {
    event.preventDefault();

    const isNameValid = validUserName(userName);

    if(isNameValid){
      setSend(true);
      setErrorSelect("");
    }
  }

  return (
    <div className="App">
      <h1 className='style-title'>Elige tu genero musica favorito</h1>
      <form className="style-form" onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingresa tu nombre' value={userName} onChange={onChangeUserName} />
        <input type="text" placeholder='Ingresa tu genero musica favorito' value={generMusic} onChange={onChangeGenerMusic} />
        <input className="submit-button" type="submit" value="enviar"/>
      </form>
      <div className='error'> {errorSelect}</div>
      {
        send ? <Card userName= {userName} generMusic= {generMusic} /> : ""
      }
    </div>
  )
}

export default App
