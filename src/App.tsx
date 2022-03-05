import React, {useState} from 'react';
import './App.css';
import {NewComponent} from './NewComponent';

export type MoneyType = {
    banknotes: string
    value: number
    number: string
}
export type FilterType = "ALL" | "RUBLES" | "DOLLARS"

function App() {

    const [money, setMoney] = useState<Array<MoneyType>>([
        { banknotes: 'Dollars', value: 100, number: ' a1234567890' },
        { banknotes: 'DOLLARS', value: 50, number: ' z1234567890' },
        { banknotes: 'RUBLES', value: 100, number: ' w1234567890' },
        { banknotes: 'DOLLARS', value: 100, number: ' e1234567890' },
        { banknotes: 'DOLLARS', value: 50, number: ' c1234567890' },
        { banknotes: 'RUBLES', value: 100, number: ' r1234567890' },
        { banknotes: 'DOLLARS', value: 50, number: ' x1234567890' },
        { banknotes: 'RUBLES', value: 50, number: ' v1234567890' },
    ])
    const [filter, setFilter] = useState<FilterType>("ALL")

    const filterMoney = (banknoteNane: FilterType) => {
        setFilter(banknoteNane)
    }

    let currentMoney = money
    if (filter === "RUBLES") {
        currentMoney = money.filter(objMoney => objMoney.banknotes === "RUBLES")
    } else if (filter === "DOLLARS") {
        currentMoney = money.filter(objMoney => objMoney.banknotes === "DOLLARS")
    }

    return (
        <div className="App">
            <NewComponent
                currentMoney={currentMoney}
                filterMoney={filterMoney}
            />
        </div>
    );
}

export default App;
