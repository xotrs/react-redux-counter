import * as types from './ActionTypes';

export const create = (color) => ({
    type: types.CREATE,
    color
})

export const remove = () => ({
    type: types.REMOVE
})

export const increment = () => ({
    type: types.INCREMENT,
    index
})

export const decrement = () => ({
    type: types.DECREMENT,
    index
})

export const setColor = (color) => ({
    type: types.SET_COLOR,
    index,
    color
})