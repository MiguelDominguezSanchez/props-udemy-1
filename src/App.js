import React from 'react';
import Comentario from './components/Comentario';
import Saludo from './components/Saludo';

function App() {
	return (
		<div className="container mt-5">
			<h1>Proyecto desde cero</h1>
			<Saludo persona="Ignacio" edad={30} />
			<Saludo persona="Juanito" edad={25} />
			<Saludo persona="Pedrito" edad={35} />
			<hr/>
			<h3>Cajita de comentarios</h3>
			<Comentario
				urlImagen="https://i.picsum.photos/id/28/200/200.jpg?hmac=eT-kjSvX_wh2uU3SYgAuRWjzo4ndNGimCCiNEaWlnOg"
				persona="Ignacio"
				texto='fffffff'
			/>
			<Comentario
				urlImagen="https://i.picsum.photos/id/28/200/200.jpg?hmac=eT-kjSvX_wh2uU3SYgAuRWjzo4ndNGimCCiNEaWlnOg"
				persona="Juanito"
				texto='ddddddd'
			/>
			<Comentario
				urlImagen="https://i.picsum.photos/id/28/200/200.jpg?hmac=eT-kjSvX_wh2uU3SYgAuRWjzo4ndNGimCCiNEaWlnOg"
				persona="Pedrito"
				texto='wwwwwww'
			/>
		</div>
	);
}

export default App;
