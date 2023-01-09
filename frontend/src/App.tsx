import {Header} from './components/Header';
import {Orders} from './components/Orders';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <Header/>
      <Orders />
      <ToastContainer position='bottom-center' />
    </>
  );
}

export default App;
