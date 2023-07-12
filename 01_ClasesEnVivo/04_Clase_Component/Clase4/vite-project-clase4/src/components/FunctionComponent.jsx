const ExportDefaultFunc = ({info, amount}) => { // Por convencion usamos props pero puede ir cualquier parametro
    return(
        <>
            <h2>Beca {info}: $ {amount*2}</h2>
        </>
    )
}
export default ExportDefaultFunc
