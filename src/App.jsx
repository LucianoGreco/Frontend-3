import { useState } from "react";
import Card from "./Card";
import Form from "./Form";


function App() {

  // ESTADOS
  const [user, setUser] = useState({
    nombre: '',
    color: ''
  })
  const [show, setShow] = useState(false) // false: No renderiza Card
  const [error, setError] = useState(false) // false: No renderiza el error







  const handleSubmit = (e) => {
    e.preventDefault();

// # QUITAR LOS ESPACIOS
// a. ------- usuario.name.trim().length
// b. ------- usuario.name[0] != ''
// c. ------- !(usuario.name.startsWith(' '))
// d. ------- usuario.name.charAt(0) != ''
// e. ------- !(/^\s/.test(usuario.nombre)) 

    // # VALIDACIONES
    if(user.nombre.trim().length > 2 && user.color.length > 3){
      setShow(true)
      setError(false)
    }
    else{
      setError(true)
      alert('❌ERROR ❗')
    }
  }

// 55:12
  
  return (
    <div  className="App">
      <h1>Elige un color</h1>

      <Form usuario={user} setUsuario={setUser} handleSubmit={handleSubmit}/>
      { error && 'Por favor chequa que la informacion sea correcta'}
      { show && <Card usuario={user} /> } 
    </div>
  );
}

export default App;

/* PROBLEMA CON GIT CLONE
error: remote origin already exists.

1. git remote -v
. repositorioClonado(fetch) Ya existe un repositorio
. repositorioClonado(push)

2. git remote remove orgini
2. git remote add origin https://git...
3. gir push origin (main/master)
*/