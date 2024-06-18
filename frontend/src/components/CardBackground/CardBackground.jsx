import React from "react";
import { useNavigate } from "react-router-dom";

const CardBackground = ({ title, description, background, backgroundColor, navigateTo }) => {
    const navigate = useNavigate();

    const cardStyle = {
        position: 'relative', // Agregar posición relativa para que los pseudo-elementos se posicionen correctamente
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
    };

    const overlayStyle = {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Color oscuro con opacidad
        borderRadius: 'inherit', // Heredar el redondeo de la tarjeta
    };

    const contentStyle = {
        position: 'relative', // Agregar posición relativa para que los elementos secundarios se posicionen correctamente
        zIndex: 1, // Asegurarse de que el contenido esté por encima del overlay oscuro
    };

    return (
        <div 
            style={cardStyle} 
            className="shrink-0 flex flex-col justify-between rounded-lg shadow max-w-sm cursor-pointer p-4 h-[400px] w-[250px] transform transition-transform duration-300 hover:scale-105"
            onClick={() => {console.log(navigateTo); navigate(navigateTo)}}
        >
            <div className="flex flex-wrap items-center" style={contentStyle}>
                <p className="font-bold ml-2 text-xl text-neutral-50 drop-shadow-md">{title}</p>
            </div>
            <div style={overlayStyle}></div> {/* Pseudo-elemento para el overlay oscuro */}
            <div className={`${backgroundColor} rounded-lg p-4 relative z-10`} style={contentStyle}>
                <p className="text-sm text-neutral-50">{description}</p>
            </div>
        </div>
    );
}

export default CardBackground;
