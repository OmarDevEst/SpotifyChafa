import Song from './Song';

const Home = ({ favoriteSongs ,setFavoriteSongs,setCurrentSong}) => {
	return (
		<main>
			<h1>Favorite Songs</h1>
			<section
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(1, 1fr)',
					gap: '1rem'
				}}
			>
				{favoriteSongs.length > 0 ? (
					favoriteSongs.map((song) => <Song song={song}  setCurrentSong={setCurrentSong} favoriteSongs={favoriteSongs} setFavoriteSongs={setFavoriteSongs}  />)
				) : (
					<h4>Empty favorite song list</h4>
				)}

			</section>
		</main>
	);
};

export default Home;