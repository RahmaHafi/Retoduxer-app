import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import NavbarTodo from "./components/NavbarTodo";
import Todos from './pages/Todos';
import Todo from './pages/Todo';
import TodoDetails from './pages/TodoDetails';
import Collaborators from './pages/Collaborators';
import NewCollaborator from './pages/NewCollaborator';
import UpdateTodo from './pages/UpdateTodo';
import GlobalLoadingOverlay from './components/GlobalLoadingOverlay';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos } from './redux/actions/todosActionCreator';
import { fetchCollaborators } from './redux/actions/collaboratorsActionCreator';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
    dispatch(fetchCollaborators())
  }, [])


  return (
    <>
      <GlobalLoadingOverlay />
      <Router>
        <NavbarTodo />
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route path="/colloaborators" component={Collaborators} />
          <Route path="/new-collaborator" component={NewCollaborator} />
          <Route path="/new-todo" component={Todo} />
          <Route path="/todos/:id" component={TodoDetails} />
          <Route path="/update-todo/:id" component={UpdateTodo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
