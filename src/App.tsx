import './App.css';
import QRCode from './components/QRCode';
import { ThemeProvider } from "@material-tailwind/react";


function App() {
  return (    
    <ThemeProvider>    
        <div className='relative h-[100vh] flex flex-col justify-center mx-auto'>
            <QRCode />
                <div className='py-10 absolute bottom-0 bg-[#262626] w-full text-white text-center'>
                    Challenge by{" "}
                    <a href="https://www.frontendmentor.io?ref=challenge" 
                    target="_blank" 
                    rel="noreferrer" 
                    className='underline underline-offset-4'>
                        Frontend Mentor
                    </a>. 
                    Coded with enthusiasm by {""}<a href="#" className='underline underline-offset-4'>Jere Sulovuo (MrJay)</a>.
            </div>
        </div>
    </ThemeProvider>

  );
}

export default App;
