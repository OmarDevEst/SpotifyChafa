import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Search';
import Home from './Home';
import { useEffect, useState } from 'react';
import Reproductor from './Reproductor';
import styles from './App.css';

const initialState = JSON.parse(localStorage.getItem('favoritos') || '[]');

const App = () => {
	const [ favoriteSongs, setFavoriteSongs ] = useState(initialState);
	const [ currentSong, setCurrentSong ] = useState(null);
	const [ songs2, setSongs2 ] = useState([]);

	useEffect(
		() => {
			localStorage.setItem('favoritos', JSON.stringify(favoriteSongs));
		},
		[ favoriteSongs ]
	);

	
	return (
		
		<Router >
			<div className ={styles.main}>
				<div className={styles.emoticons}>
					<Link className={styles.semoticons} to="/"><i class="fas fa-heart"></i></Link>
					- <Link className={styles.semoticons} to="/search"><i class="fas fa-search"></i></Link>

				</div>
				<div>
				<Switch>
					<Route exact path="/">
						<Home favoriteSongs={favoriteSongs} setFavoriteSongs={setFavoriteSongs} setCurrentSong={setCurrentSong} />
					</Route>
					<Route path="/search">
						<Search favoriteSongs={favoriteSongs} setFavoriteSongs={setFavoriteSongs} setCurrentSong={setCurrentSong} songs2={songs2} setSongs2={setSongs2}  />
					</Route>
				</Switch>
				</div>
			</div>
			{currentSong && (
				<Reproductor source={currentSong.previewURL} name={currentSong.name} album={currentSong.albumName} />
			)}			
		</Router>
	);
};

export default App;