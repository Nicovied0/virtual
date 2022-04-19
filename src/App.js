import './components/styles/App.css';
import Inicio from './components/Inicio';
import Nav_bar from './components/Nav_bar';
import Productos from './components/Productos';
import Info from './components/Info';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App_index">
      <Nav_bar />
      <Inicio />
      <div className='container'>
        <Productos
          nombre='Moto E7i Power'
          imagen='moto'
          detalles='Lector de Huella digital'
        />
        <Productos
          nombre='Joystick Inalámbrico'
          imagen='control'
          detalles='Con sensor de movimiento'
        />
        <Productos
          nombre='Auriculares Gamer Xtrike'
          imagen='Xtrike'
          detalles='Incluye luz led'
        />
        <Productos
          nombre='Lenovo Headset Gamer'
          imagen='lenovo'
          detalles='Vibración asincrónica'
        />
        <Productos
          nombre='IPhone 12 Mini'
          imagen='iphone'
          detalles='Garantia Oficial'
        />
        
        <Productos
          nombre='Apple IPod Touch'
          imagen='ipod'
          detalles='Garantia Oficial'
        />
      </div>
      <div className='container_form'>
      <Info
          titulo='ELEGÍ COMO PAGAR!'
          imagen='pago'
          info='Tarjetas, Efectivo o PayPal'
        />
        <Info
          titulo='ENVÍOS A TODO EL PAÍS'
          imagen='camion'
          info='¡Rápido, sin vueltas!'
        />
        <Info
        titulo='COMPRA 100% SEGURA'
        imagen='seguro'
        info='Garantías Oficiales'
      />
      </div>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
