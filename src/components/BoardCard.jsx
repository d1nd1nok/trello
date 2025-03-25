import { Link } from 'react-router-dom';
import {style} from '../modules/board.module.css'

function BoardCard({ board, onDelete }) {
    
  return (
    <div className='board'>
      <Link to={`/board/${board.id}`} className='board_title'>{board.name}</Link>
      <button className="btn" onClick={() => onDelete(board.id)}>✕</button>
    </div>
  );
}

export default BoardCard;