import {useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import TrackList from '../PlayList'
import './index.css'

const Player = ({initialTracksList}) => {
  const [tracks, setTracks] = useState(initialTracksList)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredTracks, setFilteredTracks] = useState(initialTracksList)

  const handleSearch = event => {
    setSearchQuery(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    // Filter the tracks when the search icon is clicked
    const searchResult = tracks.filter(track =>
      track.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredTracks(searchResult)
  }

  const handleDelete = id => {
    const updatedTracks = filteredTracks.filter(track => track.id !== id)
    setFilteredTracks(updatedTracks)
    setTracks(tracks.filter(track => track.id !== id)) // Remove from original list as well
  }

  return (
    <div className="app-container">
      <div className="header">
        <div className="singer-info">
          <h1>Ed Sheeran</h1>
          <p>Singer</p>
        </div>
      </div>

      <div className="playlist-section">
        <h2>Songs Playlist</h2>
        <form className="search-bar" onSubmit={handleSubmit}>
          <div className="search-bar-card">
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button type="submit">
              <BsSearch className="search-icon" />
            </button>
          </div>
        </form>
      </div>

      {filteredTracks.length > 0 ? (
        <TrackList tracks={filteredTracks} onDelete={handleDelete} />
      ) : (
        <div className="no-songs-found">
          <p>No Songs Found</p>
        </div>
      )}
    </div>
  )
}

export default Player
