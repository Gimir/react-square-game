import React from 'react';

export const getDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes();
    today = mm + '/' + dd + '/' + yyyy;

    return `${today} ${time}`;
}

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const createGameTable = (amount, ColComp, RowComp) => {
    const rows =[];
    const cols = [];
    for (let i = 0; i < amount; i++) {
        cols.push(<ColComp width={100/amount} key={i}></ColComp>)
    };
    for (let i = 0; i < amount; i++) {
        let row = <RowComp height={100/amount} key={i}>
            {cols}
        </RowComp>;
        rows.push(row);
    };
    return rows;
};