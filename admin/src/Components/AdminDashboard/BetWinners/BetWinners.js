import React from 'react'
import styles_dark from './BetWinners_Dark.module.css';
import styles_light from './BetWinners_Light.module.css';

function BetWinners({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    return (
        <div className='row'>
            <div className='col-md-12'>
                <h3 className={`${style.page_title}`}>Bets winners</h3>
            </div>
            <div className='col-md-12'>
                <table class={`table ${style.earn_history_table} mt-4`}>
                    <thead>
                        <tr>
                            <th >User ID</th>
                            <th >User Name</th>
                            <th >Wining Amount</th>
                            <th >Lose Amount</th>
                            <th >Total Bets</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.wining_amount}`}>0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.wining_amount}`}>0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.wining_amount}`}>0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.wining_amount}`}>0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.wining_amount}`}>0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.wining_amount}`}>0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.wining_amount}`}>0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.wining_amount}`}>0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.wining_amount}`}>0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.wining_amount}`}>0.66667598645 +</td>
                            <td className={`${style.lose_amount}`}>0.26598855623 -</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.date_of_bet}`}>65549538423</td>
                            <td className={`${style.bet_amount}`}>John S.</td>
                            <td className={`${style.wining_amount}`}>0.66667598645 +</td>
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

export default BetWinners