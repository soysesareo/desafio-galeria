import { useState } from 'preact/hooks'
import './app.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

export function App() {
  /* const [count, setCount] = useState(0)
 */
  return (
    <>
      <div className='container'>
        <Header title="Galería de Imágenes con React" />
        <Card
          img="martin"
          name="Martín Pescador"
          type="Pájaro"
        />
        <Card
          img='tigre'
          name='Tigre'
          type='Carnivoro'
        />
        <Card
          img='carpintero'
          name='Pájaro Carpintero'
          type='Ave'
        />
      <Footer /> 
      </div>

    </>
  )
}
