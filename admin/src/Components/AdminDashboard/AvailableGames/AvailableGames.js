import React, { useEffect, useState } from 'react'
import styles_dark from './AvailableGames_Dark.module.css';
import styles_light from './AvailableGames_Light.module.css';
import { getGames } from '../../../api';

function AvailableGames({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getGames();
                setGames(res.data.data || []);
            } catch (err) {
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='row'>
            <div className='col-md-12 mt-4'>
                <h3 className={`${style.page_title}`}>Available Games</h3>
            </div>
            <div className='col-md-12 mt-4'>
                <div className={`${style.games_card}`}>
                    {loading && <p>Loading...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='row'>
                        {!loading && !error && games.map((game) => (
                            <div className='col-md-3 mt-3' key={game.id}>
                                <div className={`card ${style.individual_game_card}`}>
                                    <img src={game.thumbnailUrl || "/game-one.png"} className="card-img-top w-100" alt={game.title} />
                                    <div className={`card-body p-2 ${style.card_body}`}>
                                        <p className={`card-text position-relative ${style.card_text}`}>
                                            {game.title}<br />
                                            {game.category} | {game.activePlayers || 0} Playing Now
                                            <div className={`${style.redirect}`}>
                                                <a href={game.gameUrl || "#"} target="_blank" rel="noreferrer"><img src="/arrow.png" alt="" /></a>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvailableGames