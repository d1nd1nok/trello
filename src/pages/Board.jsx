import { useParams } from 'react-router-dom';

function Board() {
  const { id } = useParams();

  return (
        
    <div className="board-name">
         Доска ID: {id}
    </div>
    );
}

export default Board;