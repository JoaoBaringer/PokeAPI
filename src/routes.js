import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './components/content';
import PokeScreen from './screens/pokescreens';

const Rout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Content />} />
                <Route exact path='/:id' element={<PokeScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rout;