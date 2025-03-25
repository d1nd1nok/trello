import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BoardCard from '../components/BoardCard';

function Home() {
  const [boards, setBoards] = useState([]);
  const [newBoardName, setNewBoardName] = useState('');
  const location = useLocation(); 

  useEffect(() => {
    const storedBoards = JSON.parse(localStorage.getItem('boards')) || [];
    setBoards(storedBoards);
  }, [location]); 

  const addBoard = () => {
    if (newBoardName.trim()) {
      const newBoards = [...boards, { id: Date.now(), name: newBoardName }];
      setBoards(newBoards);
      localStorage.setItem('boards', JSON.stringify(newBoards));
      setNewBoardName('');
    }
  };

  const deleteBoard = (id) => {
    const updatedBoards = boards.filter((board) => board.id !== id);
    setBoards(updatedBoards);
    localStorage.setItem('boards', JSON.stringify(updatedBoards));
  };

  return (
    <div className="Home-main">
      <h1 >Мои доски</h1>
      <div className="board-add-container">
        <input
          type="text"
          className="input"
          placeholder="Название доски"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
        />
        <button className="btn" onClick={addBoard}>
          Добавить
        </button>
      </div>
      <div className="board-grid">
        {boards.map((board) => (
          <BoardCard key={board.id} board={board} onDelete={deleteBoard} />
        ))}
      </div>
    </div>
  );
}

export default Home;
