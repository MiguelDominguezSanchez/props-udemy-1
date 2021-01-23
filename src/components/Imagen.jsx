import React from 'react';

const Imagen = (props) => {
	return (
		<img src={props.urlImagen} className="mr-3" width="64" height="64" alt="" />
	);
};

export default Imagen;
