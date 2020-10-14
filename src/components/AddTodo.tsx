import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';

const schema = yup.object().shape({
  title: yup.string().required('Tarefa inválida'),
});

interface AddTodoForm {
  title: string;
}

const AddTodo = () => {
  //Buscando função addTodo no context
  const { addTodo } = useContext<TodoContextType>(TodoContext);
  const { register, handleSubmit, errors } = useForm({
    //dentro do resolver esta sendo usado yup para fazer a validação
    //com base no schema criado
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: AddTodoForm, e: any) => {
    addTodo(data.title); //pega o titulo
    e.target.reset(); //função reset faz resetar campo
    window.location.href = '/'; //retona a página inicial
  };
  return (
    //onSubmit vai chamar o metodo handle do useForm com tipo AddTodoForm
    //E chamar o onSubmit se estiver tudo ok
    <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
      <h1>Novo todo</h1>
      <div className="uk-margin uk-width-1-1">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Digite a tarefa..."
          className="uk-input"
          ref={register}
        />
        <span>
          <small>
            <strong className="uk-text-danger">{errors.title?.message}</strong>
          </small>
        </span>
      </div>
      <div className="uk-width-1-1">
        <button type="submit" className="uk-button uk-button-primary">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
