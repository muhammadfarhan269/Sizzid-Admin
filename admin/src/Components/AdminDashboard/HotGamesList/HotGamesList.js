import React, { useEffect, useState } from 'react'
import styles_dark from './HotGamesList_Dark.module.css';
import styles_light from './HotGamesList_Light.module.css';
import { getGames, toggleHotGame } from '../../../api';

function HotGamesList({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getGames({ isHot: true });
                const all = res.data.data || [];
                setGames(all.filter((g) => g.isHot));
            } catch (err) {
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const onToggle = async (id) => {
        try {
            await toggleHotGame(id);
            setGames((prev) => prev.map((g) => (g.id === id ? { ...g, isHot: !g.isHot } : g)));
        } catch (err) {
            setError('Failed to update hot toggle');
        }
    };

    return (
        <div className='row'>
            <div className='col-md-12'>
                <h3 className={`${style.page_title}`}>Games Hot List</h3>
            </div>
            <div className='col-md-12'>
                <table class={`table ${style.earn_history_table} mt-4`}>
                    <thead>
                        <tr>
                            <th >Game Name</th>
                            <th >Number of Users</th>
                            <th >Total Bets</th>
                            <th >Hot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && <tr><td colSpan={4}>Loading...</td></tr>}
                        {error && <tr><td colSpan={4} style={{ color: 'red' }}>{error}</td></tr>}
                        {!loading && !error && games.map((game) => (
                            <tr key={game.id}>
                                <td className={`${style.date_of_bet}`}>{game.title}</td>
                                <td className={`${style.bet_amount}`}>{game.activePlayers || 0}</td>
                                <td className={`${style.total_bets}`}><div>{game.category}</div></td>
                                <td>
                                    <span onClick={() => onToggle(game.id)} style={{ cursor: 'pointer' }}>
                                        {game.isHot ? <img src="/hot-fire.png" alt="" /> : <img src="/fire.png" alt="" />}
                                    </span>
                                </td>
                                <hr />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HotGamesList