import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <div className="text-footer">
            <hr className="line-footer" /> 
            <p>Todos los derechos reservados</p>
            <Button variant="secondary" href="https://undostresmusica.tumblr.com/" target="_blank">Para más información y registros visita nuesta página web</Button>
        </div>
    )
}

export default Footer