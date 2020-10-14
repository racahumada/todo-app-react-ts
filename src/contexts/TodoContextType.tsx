import { Todo } from '../components/models/Todo';

//"Contrato" para a definição do contexto

export interface TodoContextType {
  todos: Todo[];
  addTodo(title: string): void;
  removeTodo(todo: Todo): void;
  toggle(todo: Todo): void;
}
