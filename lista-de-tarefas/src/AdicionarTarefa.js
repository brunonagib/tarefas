import React, { useState } from 'react';

function AdicionarTarefa({ adicionarTarefa }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [prioridade, setPrioridade] = useState('low');

  const handleSubmit = (event) => {
    event.preventDefault();

    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
      dataVencimento,
      prioridade,
    };

    adicionarTarefa(novaTarefa);

    setTitulo('');
    setDescricao('');
    setDataVencimento('');
    setPrioridade('low');
  };

  return (
    <div>
      <h1>Página de Adicionar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </label>
        <br />
        <label>
          Descrição:
          <textarea
            name="description"
            rows="4"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
          />
        </label>
        <br />
        <label>
          Data de Vencimento:
          <input
            type="date"
            name="dueDate"
            value={dataVencimento}
            onChange={(event) => setDataVencimento(event.target.value)}
          />
        </label>
        <br />
        <label>
          Prioridade:
          <select
            name="priority"
            value={prioridade}
            onChange={(event) => setPrioridade(event.target.value)}
          >
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </select>
        </label>
        <br />
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  );
}

function ListaTarefas({ tarefas, excluirTarefa }) {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <h3>{tarefa.titulo}</h3>
            <p>{tarefa.descricao}</p>
            <p>Data de Vencimento: {tarefa.dataVencimento}</p>
            <p>Prioridade: {tarefa.prioridade}</p>
            <button onClick={() => excluirTarefa(tarefa.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  const excluirTarefa = (id) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  const containerStyle = {
    backgroundColor: '#8B0000',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="container" style={containerStyle}>
      <AdicionarTarefa adicionarTarefa={adicionarTarefa} />
      <ListaTarefas tarefas={tarefas} excluirTarefa={excluirTarefa} />
    </div>
  );
}

export default App;
