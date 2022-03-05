import React from 'react';
import './App.css';
import {NewComponent} from './NewComponent';

export type TopCarsType = {
    manufacturer: string,
    model: string
}

function App() {

    const topCars: Array<TopCarsType> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div className="App">
            <NewComponent topCars={topCars}/>
        </div>
    );
}

export default App;
