
const initialState = ""

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW':
            const newState1 = action.data
            return newState1
        case 'HIDE':
            const newState2 = ""
            return newState2
        default:
            return state
    }
}


export const showMessage = (content, time) => {
    return async dispatch => {
        const anecs = await setTimeout(function () { dispatch(hideMessage()) }, time * 1000)
        dispatch({
            type: 'SHOW',
            data: content
        })
    }
}

export const hideMessage = () => {
    return {
        type: "HIDE"
    }
}


export default notificationReducer