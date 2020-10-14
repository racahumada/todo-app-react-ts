import { Todo } from '../components/models/Todo';

const TODO_STORE = 'todos';

export const get = (): Todo[] => {
  //Vai buscar no localstorage um item chamado 'todos'
  const data = localStorage.getItem(TODO_STORE) || '';
  try {
    //Vai converter em objeto para a lista de todos
    const result = JSON.parse(data) as Todo[];
    return result;
  } catch {
    //Se houver alguma coisa errada retorna vazia
    return [];
  }
};

export const save = (data: Todo[]) => {
  if (data?.length >= 1) {
    localStorage.setItem(TODO_STORE, JSON.stringify(data));
  }
};
