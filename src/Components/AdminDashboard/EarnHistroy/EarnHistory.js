import React from 'react'
// import './EarnHistory.css'
import styles_dark from './EarnHistory_Dark.module.css';
import styles_light from './EarnHistory_Light.module.css';

function EarnHistory({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    return (
        <div className='row'>
            <div className='col-md-4 mt-4'>
                <h3 className={`${style.page_title}`}>Earn History</h3>
            </div>
            <div className='col-md-8 mt-4'>
                <div className={`${style.earn_history_nav_button}`}>
                    <ul>
                        <li className={`${style.active}`}>Classic Dice</li>
                        <li>Mines</li>
                        <li>Ultimate Dice</li>
                        <li>Beauties</li>
                        <li>Plinko</li>
                        <li>Cave</li>
                    </ul>
                </div>
            </div>
            <div className='col-md-12'>
                <table class={`table ${style.earn_history_table} mt-4`}>
                    <thead>
                        <tr>
                            <th >Date of Bet</th>
                            <th >Bet Amount</th>
                            <th >Wining Amount</th>
                            <th >Lose Amount</th>
                            <th >Total Bets</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>0.26598855623</td>
                            <td className={`${style.wining_amount}`}><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EarnHistory