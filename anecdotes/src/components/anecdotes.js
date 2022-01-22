import React from "react"
// import { useDispatch, useSelector } from 'react-redux'
import { voteAction, notAction } from "../reducers/anecdoteReducer"
import { connect } from "react-redux"

const Anecdote = ({ anecdote, handleClick }) => {
    return (
    <div>
        <div>
        {anecdote.content}
        </div>
        <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
        </div>
    </div>
    )


}

const Anecdotes = ({ anecdotes, voteAction, notAction }) => {

/*    const anecdotes = useSelector(state => {
        if (state.filter === '') {
            return state.anecdotes
        } else {
            return state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
        }
    })


    const dispatch = useDispatch()

    const handleButton = (anecdote) => {
        dispatch(voteAction(anecdote))
        dispatch(notAction(`You voted for: ${anecdote.content}`, 2000))
    }
*/

    const handleButton = (anecdote) => {
        voteAction(anecdote)
        notAction(`You voted for: ${anecdote.content}`, 5000)
    }

    return (
        <div>
            {anecdotes.sort((a , b) => b.votes - a.votes).map(anecdote =>
                <Anecdote 
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => handleButton(anecdote)}
                    />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    if (state.filter === '') {
        return {
            anecdotes: state.anecdotes
        }
    } else {
        return {
            anecdotes: state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
        }
    }
}

const mapDispatchProps = {
    voteAction,
    notAction
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchProps)(Anecdotes)

export default ConnectedAnecdotes