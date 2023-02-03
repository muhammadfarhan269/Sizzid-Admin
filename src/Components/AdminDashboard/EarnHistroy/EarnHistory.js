import React from 'react'
import './EarnHistory.css'

function EarnHistory() {
    return (
        <div className='row'>
            <div className='col-md-4 mt-4'>
                <h3 className='page_title'>Earn History</h3>
            </div>
            <div className='col-md-8 mt-4'>
                <div className='earn_history_nav_button'>
                    <ul>
                        <li className='active'>Classic Dice</li>
                        <li>Mines</li>
                        <li>Ultimate Dice</li>
                        <li>Beauties</li>
                        <li>Plinko</li>
                        <li>Cave</li>
                    </ul>
                </div>
            </div>
            <div className='col-md-12'>
                <table class="table earn_history_table mt-4">
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
                            <td className='date_of_bet'>65549538423</td>
                            <td className='bet_amount'>0.26598855623</td>
                            <td className='wining_amount'><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className='lose_amount'>0.26598855623 -</td>
                            <td className='total_bets'><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>65549538423</td>
                            <td className='bet_amount'>0.26598855623</td>
                            <td className='wining_amount'><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className='lose_amount'>0.26598855623 -</td>
                            <td className='total_bets'><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>65549538423</td>
                            <td className='bet_amount'>0.26598855623</td>
                            <td className='wining_amount'><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className='lose_amount'>0.26598855623 -</td>
                            <td className='total_bets'><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>65549538423</td>
                            <td className='bet_amount'>0.26598855623</td>
                            <td className='wining_amount'><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className='lose_amount'>0.26598855623 -</td>
                            <td className='total_bets'><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>65549538423</td>
                            <td className='bet_amount'>0.26598855623</td>
                            <td className='wining_amount'><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className='lose_amount'>0.26598855623 -</td>
                            <td className='total_bets'><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>65549538423</td>
                            <td className='bet_amount'>0.26598855623</td>
                            <td className='wining_amount'><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className='lose_amount'>0.26598855623 -</td>
                            <td className='total_bets'><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>65549538423</td>
                            <td className='bet_amount'>0.26598855623</td>
                            <td className='wining_amount'><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className='lose_amount'>0.26598855623 -</td>
                            <td className='total_bets'><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>65549538423</td>
                            <td className='bet_amount'>0.26598855623</td>
                            <td className='wining_amount'><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className='lose_amount'>0.26598855623 -</td>
                            <td className='total_bets'><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>65549538423</td>
                            <td className='bet_amount'>0.26598855623</td>
                            <td className='wining_amount'><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className='lose_amount'>0.26598855623 -</td>
                            <td className='total_bets'><div>786</div></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>65549538423</td>
                            <td className='bet_amount'>0.26598855623</td>
                            <td className='wining_amount'><img src="/bitcoin.png" alt="" /> 0.66667598645 +</td>
                            <td className='lose_amount'>0.26598855623 -</td>
                            <td className='total_bets'><div>786</div></td>
                            <hr />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EarnHistory