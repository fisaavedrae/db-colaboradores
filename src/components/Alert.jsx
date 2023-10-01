// recibe los hijos y el color para mensaje
const Alert = ({ color, mensaje }) => {
    console.log("Valores de los children recibidos: ", mensaje)
    return (
        <>
            <div className={`alert alert-${color} my-2`}>{mensaje}</div>
        </>
    );
};

export default Alert