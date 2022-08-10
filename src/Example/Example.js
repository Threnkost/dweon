import React, {Component, useState, useEffect} from 'react';

import {MainContext} from '../Context/AccountContext.js';


function HookExample(props) {
    const [fruit, setFruit] = useState('Orange');
    const [count, setCount] = useState(0);

    useEffect(() => {
        const btn = document.querySelector(".random-btn");

        document.title = `Clicked ${count} times`;
        
        if (count >= 5) {
            btn.style.backgroundColor = "red";
        }
    });

    return (
        <div>
            <p>Değer : {fruit}</p>
            <p>Değer : {count}</p>

            <button className="random-btn" onClick={() => setCount(count +1)}>
                Tıkla!
            </button>
        </div>
    );
}


class ExampleComponent extends Component {

    render() {
        return (
            <MainContext.Consumer>
                {
                    value => {
                        console.log(value);
                        return (
                            <div style={{marginLeft: 200}}>
                                <HookExample />
                            </div>
                        );
                    }
                }
            </MainContext.Consumer>
        );
    }
}

export default ExampleComponent;