import { Routes, Route } from 'react-router-dom';
import Contacto from '../pages/Contacto';
import PersonaContainer from '../pages/PersonajeContainer'
import UsersCardContainer from '../widgets/UsersCardContainer'
import Carrito from '../pages/Carrito'

function Main() {
  return( 
  <main className='container p-4 mx-auto'>
    <Routes>
<Route path='/' element= {<UsersCardContainer />} />
<Route path='/category/:category' element= {<UsersCardContainer />} />
<Route path='/characters/:id' element= {<PersonaContainer />} />
<Route path='/cart' element= {<Carrito />} />
<Route path='/contact' element= {<Contacto />} />
    </Routes>
  </main>
  )
};

export default Main;
