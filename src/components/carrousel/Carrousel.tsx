import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { getTracks } from '../../services/dataService';
import { Album, Artist, Playlist, Track } from '../../types/data';
import SongCard from '../songCard';
import './Carrousel.css'
import { ArtistCard } from '../artistCard';
import { AlbumCard } from '../albumCard';
import { PlaylistCard } from '../playlistCard/PlaylistCard';
import { Link } from 'react-router-dom';

type Props = {
    dataTrack?: Track[],
    dataArtist?: Artist[],
    dataAlbum?: Album[],
    isActive?: boolean,
    dataPlaylist?: Playlist[]
}

const Carrousel = ({dataTrack, dataArtist, dataAlbum, isActive, dataPlaylist}: Props) => {


  return (
    <>
      {dataTrack && (
        <div className="products_scroll">
          {dataTrack.map(track => (
              <SongCard key={track.id} track={track} isActive={isActive} />
          ))}
        </div>
      )}
      {dataArtist && (
        <div className="products_scroll">
          {dataArtist.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      )}
      {dataAlbum && (
        <div className="products_scroll">
          {dataAlbum.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
      {dataPlaylist && (
        <div className="products_scroll">
          {dataPlaylist.map(playlist => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      )}
    </>)
    }

export default Carrousel