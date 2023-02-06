import React from 'react'

function Card ({ img, name, type }) {
    return (
        <div className="cardAnimal">
            <div>
                <img 
                src={`./src/imgs/galeria-${img}.jpg`} 
                />
            </div>
            <p>{name}</p>
            <p>{type}</p>
        </div>
    )
}

export default Card