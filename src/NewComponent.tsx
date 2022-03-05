import React from "react";
import {TopCarsType} from "./App";

type PropsType = {
    topCars: Array<TopCarsType>
}

export const NewComponent = (props: PropsType) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Manufacture</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((car, index) => {
                return <tr key={index}>
                    <td>{car.manufacturer}</td>
                    <td>{car.model}</td>
                </tr>
            })}
            </tbody>
        </table>
    )
}