import React from 'react';
import ReactDOM from 'react-dom';


const luckyNumber = () => Math.floor((Math.random()*1000)+1);

function greeting(person){
    return <div className="container">
        <h1>Hello World {person.name}</h1>
        <h2 className="text-muted">Your lucky number is: {person.luckyNumber}</h2>
    </div>
}

const user = {
    name: "Sangwoo",
    luckyNumber: luckyNumber()
};

ReactDOM.render(
    greeting(user) ,
    document.getElementById('root')
);

