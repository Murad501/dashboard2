import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router';

function App() {
  return (
    <div className="className='max-w-screen-2xl mx-auto font-sans'">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
