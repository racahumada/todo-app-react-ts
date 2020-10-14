import React, { useContext } from 'react';
import { Todo } from './models/Todo';
import { TodoContextType } from '../contexts/TodoContextType';
import { TodoContext } from '../contexts/TodoContext';

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = (props: TodoListItemProps) => {
  const { title, done } = props.todo;
  const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);
  const onRemove = (todo: Todo) => {
    removeTodo(todo);
  };

  const handleInputChange = () => {
    toggle(props.todo);
  };

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input
            className="uk-checkbox"
            type="checkbox"
            checked={done}
            onChange={handleInputChange}
          />
        </label>
      </td>
      <td className="uk-width-expand">{title}</td>
      <td className="uk-width-auto">
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => onRemove(props.todo)}
        ></button>
      </td>
    </tr>
  );
};

export default TodoListItem;
