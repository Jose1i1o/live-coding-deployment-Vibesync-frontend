import './Home.css'
import settings from '../../assets/icons/settings-icon.svg'
import CategoryBtn from '../../styledComponents/categoryBtn'
import Carrousel from '../../components/carrousel/Carrousel'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAlbums, getPlaylists, getTracks } from '../../services/dataService'
import { type User, type Album, type Playlist, type Track } from '../../types/data'
import { Link } from 'react-router-dom'

export const Home = ({ user }: { user: User }) => {
  const [isActive, setIsActive] = useState(true)

  const queryTracks = useQuery({
    queryKey: ['tracks'],
    queryFn: async () => await getTracks()
  })
  const trackArray: Track[] = queryTracks.data

  const queryPlaylist = useQuery({
    queryKey: ['playlist'],
    queryFn: async () => await getPlaylists()
  })
  const playlistArray: Playlist[] = queryPlaylist.data

  const queryAlbum = useQuery({
    queryKey: ['album'],
    queryFn: async () => await getAlbums()
  })
  const albumArray: Album[] = queryAlbum.data

  return (
    <>
    <main className="home-main-container">
      <section className="home-welcome-section">
        <h3>
          Good afternoon,
          <span className="home-username"> {user.first_name} {user.last_name}</span>
        </h3>
        <button className="home-settings-btn">
          <Link to="/config"><img src={settings} /></Link>
        </button>
      </section>
      <section>
        <CategoryBtn>Music</CategoryBtn>
        <CategoryBtn>Podcasts</CategoryBtn>
        <CategoryBtn>AudioBooks</CategoryBtn>
      </section>
      <section className="home-miniplaylist-display">
        {/* <PlaylistMiniCard/>
        <PlaylistMiniCard/>
        <PlaylistMiniCard/>
        <PlaylistMiniCard/>
        <PlaylistMiniCard/> */}
      </section>
      <section className="home-fav-songs">
        <h2>Your favorite songs</h2>
        <Carrousel
        dataTrack={trackArray}
        isActive={isActive}
        />
      </section>
      <section className="home-recently-played">
        <h2>Recently played</h2>
        <Carrousel dataPlaylist={playlistArray} />
      </section>
      <section className="home-jump-back-in">
        <h2>Jump back in</h2>
        <Carrousel dataAlbum={albumArray} />
      </section>
    </main>
    </>
  )
}
