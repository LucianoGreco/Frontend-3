//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({usuario}) {
  return (
    <div>
      <h2>Hola {usuario.nombre}</h2>
      <h4>Tu color favorito es: {usuario.color}</h4>
    </div>
  );
}

export default Card;
