import { useParams } from 'react-router-dom';

function Board() {
  const { id } = useParams();

  return (
        
    <div className="board-name">
         Board id: {id}
    </div>
    );
}

export default Board;