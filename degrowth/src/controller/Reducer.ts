
import Action from './Actions';
import State from './State';

import update from 'immutability-helper'

export default function reducer(state:State, action:Action):State {
    const [name, payload] = action
    switch(name) {
        case 'GoToPage':
            return update(state, {
                $set: {
                    page: payload.page
                }
            }) 
        case 'GoHome':
            return update(state, {
                $set: {
                    page: "Landing"
                }
            })
    }
}