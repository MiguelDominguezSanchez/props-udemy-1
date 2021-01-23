import React from 'react';
import Saludo from './components/Saludo';

function App() {
	return (
		<div className="container mt-5">
			<h1>Proyecto desde cero</h1>
			<Saludo persona="Ignacio" edad={30} />
			<Saludo persona="Juanito" edad={25} />
			<Saludo persona="Pedrito" edad={35} />
		</div>
	);
}

export default App;
