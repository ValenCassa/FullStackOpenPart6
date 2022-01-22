import React , { useEffect } from 'react'
import Anecdotes from './components/anecdotes'
import AddAnecdote from './components/newAnecdote'
import Notification from './components/Notification'
import Filter from './components/filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

// In order to learn older aproaches, I commented the hook API, so I can learn the connect method.


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <Notification />
      <Filter />
      <Anecdotes />
      <AddAnecdote />
    </div>
  )
}

export default App