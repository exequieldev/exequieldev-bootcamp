//import logo from './logo.svg';
import './App.css';
import MensajeComponente from './mensaje.js'

function App() {

  const mensaje = 'Hola'
  const a = 2
  const b = 3
  const Description = () =>{
    return <p>Esta es la app del curso fullsatack bootcam</p>
  }

  return (
    <div className="App">

          <h1>Titulo de la App</h1>
          <strong>Estamos trabajando en ello</strong>

          <div>
            <p>El resultado es</p>
            {a+b}
          </div>
              
          <div>
              <MensajeComponente color='red'  message='Estamos trabajado'/>
              <MensajeComponente color='green'  message='En un curso'/>
              <MensajeComponente color='yellow' message='De React'/>
              <Description/>
          </div>

          <div>
            <br/>
            {mensaje + 'evalucion en JSX'}
            <br/>
            {+new Date()}
          </div>
     
      
    </div>
  );
}

export default App;
