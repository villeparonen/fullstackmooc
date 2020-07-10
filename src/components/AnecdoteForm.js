import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.newa.value
        event.target.newa.value = ""
        dispatch(add(content))
    }


    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="newa" />
                    <button type="submit">create</button></div><br />
            </form>
        </div>
    )
}

export default AnecdoteForm