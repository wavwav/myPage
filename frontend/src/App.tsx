import React from 'react';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Contact from './pages/Contact';
import Link from './pages/Link';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="biography" element={<Biography />} />
                <Route path="contact" element={<Contact />} />
                <Route path="link" element={<Link />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
