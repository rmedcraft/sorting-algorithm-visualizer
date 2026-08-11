import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import About from './pages/About.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>

        {/* https://reactrouter.com/start/declarative/routing */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
