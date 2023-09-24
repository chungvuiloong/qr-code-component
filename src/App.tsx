import './App.css';
import QRCode from './components/QRCode';
import { ThemeProvider } from "@material-tailwind/react";


function App() {
  return (    
    <ThemeProvider>    
        <div className='h-[100vh] flex flex-col justify-center mx-auto'>
            <QRCode />
            <div className='flex- flex-end'>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                Coded by <a href="#">Your Name Here</a>.
            </div>
        </div>
    </ThemeProvider>

  );
}

export default App;
