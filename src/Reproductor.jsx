import { useAudio } from 'react-use';
import styles from './Reproductor.module.css';


const Reproductor = ({ source, name, album }) => {
	const [ audio, state, controls ] = useAudio({
		src: source,
		autoPlay: true
	});
    


	return (
		<div className={styles.reproductor}>
			{audio}
            <div>
			<h2>
				{name}
			</h2>
            <h3 className={styles.h3s}>
                {album}
            </h3>
            </div>
			<div>
			<button className={styles.boton}onClick={state.paused ? controls.play : controls.pause}>
					{state.paused ? '▶' : <i class="fas fa-pause"></i>}
					</button>
			</div>
			<div className={styles.slides}>
            <div>
                Time:
			<input
					type="range"
					value={state.time}
                    onChange={(e) => controls.seek(Number(e.target.value))}
                    min="0.0"
					max="30.0"
				/>
				<br/>
            </div>
			<div>
                Volume: 
				<input
					type="range"
					value={state.volume}
					onChange={(e) => controls.volume(Number(e.target.value))}
					min="0.0"
					max="1.0"
					step="0.05"
				/>

				
			</div>
			</div>

		</div>
	);
};

export default Reproductor;