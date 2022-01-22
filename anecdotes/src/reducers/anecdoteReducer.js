import anecdotesService from '../services/anecdotes'

export const voteAction = (anecdote) => {

  return async dispatch => {
    const updateAnectode = await anecdotesService.updateVotes(anecdote.id, anecdote)
    dispatch({
      type: 'VOTE',
      data: { updateAnectode }
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch({    
      type: 'NEW_ANECDOTE',
      data: { newAnecdote }
      }
    )
  }
}



export const notAction = (notification, timer) => {

  return async dispatch => {
    dispatch({
      type: 'NOTIFICATION',
      data: { notification }
    })
    setTimeout(() => {
      dispatch({
        type:'NOTIFICATION',
        data: { notification: '' }
      })
    }, timer)
  }
}





export const filterAction = (filter) => {
  return {
    type: 'SET_FILTER',
    filter: filter
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type:'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE': {
      const id = action.data.updateAnectode.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}

      return state.map(anec => anec.id !== id ? anec : changedAnecdote)
      
    }
    case 'NEW_ANECDOTE': 
      const anecdote = action.data.newAnecdote

      return state.concat(anecdote)

    case 'INIT_ANECDOTES':
      return action.data

    default:
      return state
  }
}

const notReducer = (state = 'Welcome', action) => {
  switch(action.type) {
    case 'NOTIFICATION':
      const notification = action.data.notification
      return notification

    
    default:
      return state
  }

}

const filterReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.filter

    default:
      return state
  }
}

export { anecdoteReducer, notReducer, filterReducer }
