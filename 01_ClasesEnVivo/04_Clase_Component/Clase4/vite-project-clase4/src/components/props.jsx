export const ChildComponent = (props) => { // COMPONENTE HIJO - Recibe la informacion mediante el objeto 'props'
    return(
        <div className="child">
            <h3>Total: {props.salario}</h3> {/*recibe el salario y lo multiplica por 6*/}
        </div>
    )
};


export const ParentComponet = () => { // COMPONENTE PADRE
    const presupuesto = 200000; // declaro la variable y la inicializo
    return(
        <div className="parent">
            <h1>Argentina</h1>
            {/* <ChildComponent salario={100000}/> paso la informacion directamente en la propiedad */}
            <ChildComponent salario={presupuesto}/> {/*Le paso la variable como propiedad */}
            <ChildComponent salario={presupuesto}/> {/*Le paso la variable como propiedad */}
            
        </div>
    )
};
export default ParentComponet;
