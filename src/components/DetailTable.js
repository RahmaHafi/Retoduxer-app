import React from 'react';
import Table from 'react-bootstrap/Table';

function DetailTable({todo}) {
  return (
  
      <Table bordered hover>

        <tbody>
          <tr>
            <td>Title</td>
            <td>{todo.title}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{todo.description}</td>
          </tr>
        </tbody>
      </Table>
    
  )
}

export default DetailTable