import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdicionarTarefa from './AdicionarTarefa';

function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>Bem vindo,aqui você pode adicionar e excluir suas tarefas,definir suas prioridas e vencimentos quando desejar.
      {/* Conteúdo da página inicial */}
    </div>
  );
}

function Tarefas() {
  return (
    <div>
      <h1>Página de Tarefas</h1> 
      {/* Conteúdo da página de tarefas */}
    </div>
  );
}

function Contato() {
  return (
    <div>
      <h1>Página de Contato</h1> Email:brunomello010@gmail.com
      {/* Conteúdo da página de contato */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/adicionar-tarefa">Adicionar Tarefa</Link>
            </li>
            <li>
              <Link to="/tarefas">Tarefas</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adicionar-tarefa" element={<AdicionarTarefa />} />
          <Route path="/tarefas" element={<Tarefas />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
