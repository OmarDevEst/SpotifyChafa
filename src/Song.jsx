import styles from './Search.module.css';
import styles1 from './Reproductor.module.css';

const Song = ({ song, setCurrentSong = () => {}, favoriteSongs, setFavoriteSongs }) => {
	const addToFavoriteSongs = () => {
		console.log(song.id);
		const exist = favoriteSongs.includes(song);

		if (!exist) {
			setFavoriteSongs([ ...favoriteSongs, song ]);
		}
	};

	const addToUNFavoriteSongs = (id) =>{
		const refreshco = favoriteSongs.filter(songid => songid.id !== id)
		console.log(refreshco);
		setFavoriteSongs(refreshco);
	}



	return (
		<div
			className={styles.song}
			style={{
				backgroundColor: '#77acf1',
				color:'#dddddd',
			}}
		>
			<h2>
				{song.name} 
			</h2>
			<h3 className={styles1.h3s}>
				{song.albumName}
			</h3>
			<button onClick={() => setCurrentSong(song)}>▶</button>
			<button onClick={addToFavoriteSongs}><i class="fas fa-heart"></i></button>
			<button onClick={() => addToUNFavoriteSongs(song.id)}><i class="fas fa-heart-broken"></i></button>
		</div>
	);
};

export default Song;