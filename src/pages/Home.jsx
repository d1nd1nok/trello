import { useState, useEffect } from 'react';
import axios from 'axios';
import BoardCard from '../components/BoardCard';

function Home() {
  const [boards, setBoards] = useState([]);
  const [newBoardName, setNewBoardName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/boards')
      .then(response => setBoards(response.data))
      .catch(error => console.error("Error fetching boards:", error));
  }, []);

  const addBoard = () => {
    if (newBoardName.trim()) {
      const newBoard = { name: newBoardName };

      axios.post('http://localhost:5000/boards', newBoard)
        .then(response => {
          setBoards([...boards, response.data]);
          setNewBoardName('');
        })
        .catch(error => console.error("Error adding board:", error));
    }
  };

  const deleteBoard = (id) => {
    axios.delete(`http://localhost:5000/boards/${id}`)
      .then(() => setBoards(boards.filter(board => board.id !== id)))
      .catch(error => console.error("Error deleting board:", error));
  };

  return (
    <div className="Home-main">
      <h1>My boards</h1>
      <div className="board-add-container">
        <input
          type="text"
          className="input"
          placeholder="Board name"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
        />
        <button className="btn" onClick={addBoard}>
          Add
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
