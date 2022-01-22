import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { createAnecdote } from "../reducers/anecdoteReducer"
import anecdoteService from '../services/anecdotes'
import { connect } from "react-redux"


const AddAnecdote = ( props ) => {
    /* const dispatch = useDispatch()
    const store = useSelector(state => state.anecdotes)

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))

    }

    */
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)

    }
    

    return (
        <div>
            <h2>create new</h2>
                <form onSubmit={addAnecdote}>
                    <input name="anecdote"/>
                    <button type="submit">create</button>
                </form>
        </div>
    )
}

export default connect(
    null,
    { createAnecdote }
)(AddAnecdote)
