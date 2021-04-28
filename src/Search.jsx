import {  useRef, useState } from 'react';
import styles from './Search.module.css';
import Song from './Song';


const Search = ({ favoriteSongs, setFavoriteSongs ,setCurrentSong,songs2,setSongs2}) => {
	const queryRef = useRef(null);
	const [ songs, setSongs ] = useState([]);

	const search = async () => {
		setSongs([]);
		const queryString = queryRef.current.value;
		let baseURL = 'https://api.napster.com';
		let key = 'apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm';
		let query = `query=${queryString}`;
		let url = baseURL + `/v2.2/search/verbose?${key}&${query}`;

		let response = await fetch(url);
		let json = await response.json();
		setSongs(json.search.data.tracks);
		setSongs2(json.search.data.tracks);	
	};


	return (
		<div className="App">
			<input className={styles.brows} ref={queryRef} />
			<button  className={styles.boton1} onClick={search}><i class="fas fa-search"></i></button>
			 <section className={styles.songsContainer}>
			 { !songs.length > 0 && 
					 songs2.map((song, index) => (
						<Song
							key={index}
							favoriteSongs={favoriteSongs}
							setFavoriteSongs={setFavoriteSongs}
							song={song}
							setCurrentSong={setCurrentSong}
						/>
					))}
			
			</section>

			<section className={styles.songsContainer}>
				{songs.map((song, index) => (
					<Song
						key={index}
						favoriteSongs={favoriteSongs}
						setFavoriteSongs={setFavoriteSongs}
						song={song}
						setCurrentSong={setCurrentSong}
					/>
				))}
			</section>
		</div>
	);
};

export default Search;