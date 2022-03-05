import React from "react";
import {FilterType, MoneyType} from "./App";

type PropsType = {
    currentMoney: Array<MoneyType>
    filterMoney: (banknoteNane: FilterType) => void
}

export const NewComponent = (props: PropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objMoney, index) => <li key={index}>
                    <span>{objMoney.banknotes}</span>
                    <span>{objMoney.value}</span>
                    <span>{objMoney.number}</span>
                </li>)}
            </ul>

            <div>
                <button onClick={() => props.filterMoney("ALL")}>ALL</button>
                <button onClick={() => props.filterMoney("RUBLES")}>RUBLES</button>
                <button onClick={() => props.filterMoney("DOLLARS")}>DOLLARS</button>
            </div>
        </>
    )
}