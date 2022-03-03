import React from 'react'
import { useSelector } from 'react-redux'
import  DetailTable  from '../components/DetailTable'
import Container  from 'react-bootstrap/Container'

function TodoDetails(props) {
  const todos = useSelector(state => state.todos)
  const idToShow = props.match.params.id
  const todo = todos.find((todo)=> todo.id ===idToShow )

  return (
    <Container className='mt-5'>
      {
        todo
        ? (
          <DetailTable 
            todo={todo}
          />
        )
        : (
          <p>ToDo not found</p>
        )
      }
    </Container>
  )
}

export default TodoDetails