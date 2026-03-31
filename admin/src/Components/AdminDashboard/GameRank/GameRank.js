import React from 'react'
import styles_dark from './GameRank_Dark.module.css';
import styles_light from './GameRank_Light.module.css';

function GameRank({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    return (
        <div className='row'>
            <div className='col-md-12'>
                <h3 className={`${style.page_title}`}>Game Rank</h3>
            </div>
            <div className='col-md-12'>
                <table class={`table ${style.earn_history_table} mt-4`}>
                    <thead>
                        <tr>
                            <th >Seriel No</th>
                            <th >Name</th>
                            <th >Publisher</th>
                            <th >Active User</th>
                            <th >Total Bets</th>
                            <th >Total Spent</th>
                            <th >Total Earn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.date_of_bet}`}>Henry</td>
                            <td className={`${style.date_of_bet}`}>Courtney</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.date_of_bet}`}>Henry</td>
                            <td className={`${style.date_of_bet}`}>Courtney</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.date_of_bet}`}>Henry</td>
                            <td className={`${style.date_of_bet}`}>Courtney</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.date_of_bet}`}>Henry</td>
                            <td className={`${style.date_of_bet}`}>Courtney</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.date_of_bet}`}>Henry</td>
                            <td className={`${style.date_of_bet}`}>Courtney</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.date_of_bet}`}>Henry</td>
                            <td className={`${style.date_of_bet}`}>Courtney</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.date_of_bet}`}>Henry</td>
                            <td className={`${style.date_of_bet}`}>Courtney</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.date_of_bet}`}>Henry</td>
                            <td className={`${style.date_of_bet}`}>Courtney</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.date_of_bet}`}>Henry</td>
                            <td className={`${style.date_of_bet}`}>Courtney</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.date_of_bet}`}>Henry</td>
                            <td className={`${style.date_of_bet}`}>Courtney</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.date_of_bet}`}>Henry</td>
                            <td className={`${style.date_of_bet}`}>Courtney</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <hr />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GameRank