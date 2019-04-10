import { combineReducers } from 'redux'

function topus(state = {animaBio: false}, action) {
    switch(action.type) {
        case 'bio':
            return {animaBio: action.valor}
    }
}

export default topus