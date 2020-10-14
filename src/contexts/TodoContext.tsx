import React, { createContext, useState, useEffect } from 'react';
import { TodoContextType } from './TodoContextType';
import { Todo } from '../components/models/Todo';
import { get, save } from '../services/TodoService';

//Context são as variaveis e funções que podemos
//ter na nossa aplicação como um todo
export const TodoContext = createContext<TodoContextType>({
  //Inicializando o contexto
  //Inicializando as variaveis e funções
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggle: () => {},
});

const TodoProvider = (props: any) => {
  const [todos, setTodos] = useState<Todo[]>(get);

  //reagindo a alguma alteração do estado
  useEffect(() => {
    save(todos);
  }, [todos]);

  const addTodo = (title: string) => {
    const todo: Todo = { id: todos.length + 1, title: title, done: false };
    setTodos([...todos, todo]);
  };

  const removeTodo = (todo: Todo) => {
    //retorna a index do item solicitado
    const index = todos.indexOf(todo);
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggle = (todo: Todo) => {
    const index = todos.indexOf(todo);
    //done recebe o booleano inverso ao atual
    todos[index].done = !todo.done;
    setTodos([...todos]);
  };

  return (
    //No "value" são passadas as variaveis e atributos que seão visiveis globalmente
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
