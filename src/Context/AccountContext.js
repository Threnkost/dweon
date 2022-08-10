import { render } from '@testing-library/react';
import React, {Component, createContext} from 'react';

const MainContext = createContext();

export class AccountProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profile: {
                username: 'User10',
                email: 'user10@gmail.com',
                profilePicture: 'null',
                registerDate: ''
            },
            bits: 2500,
        };
    }

    render() {
        return (
            <MainContext.Provider value={this.state}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}

export {MainContext};