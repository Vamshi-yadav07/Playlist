import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const TrackList = ({tracks, onDelete}) => (
  <ul className="track-list">
    {tracks.map(track => (
      <li key={track.id} className="track-item">
        <div className="track-info">
          <img src={track.imageUrl} alt="track" className="track-image" />
          <div className="track-details">
            <p className="track-name">{track.name}</p>
            <p className="track-genre">{track.genre}</p>
          </div>
        </div>
        <div className="track-action">
          <p className="track-duration">{track.duration}</p>
          <button
            data-testid="delete"
            className="delete-button"
            type="button"
            onClick={() => onDelete(track.id)}
          >
            <AiOutlineDelete className="delete-icon" />
          </button>
        </div>
      </li>
    ))}
  </ul>
)

export default TrackList
