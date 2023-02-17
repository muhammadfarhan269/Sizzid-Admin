import React, { useState } from 'react'

function HotGamesList() {

    const [hot, setHot] = useState(false)

    return (
        <div className='row'>
            <div className='col-md-12'>
                <h3 className='page_title'>Games Hot List</h3>
            </div>
            <div className='col-md-12'>
                <table class="table earn_history_table mt-4">
                    <thead>
                        <tr>
                            <th >Game Name</th>
                            <th >Number of Users</th>
                            <th >Total Bets</th>
                            <th >Hot</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><span onClick={() =>setHot(hot => !hot)}>{hot ? <img src="/hot-fire.png" alt="" /> : <img src="/fire.png" alt="" />}</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><img src="/fire.png" alt="" /></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><img src="/hot-fire.png" alt="" /></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><img src="/fire.png" alt="" /></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><img src="/hot-fire.png" alt="" /></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><img src="/fire.png" alt="" /></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><img src="/hot-fire.png" alt="" /></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><img src="/fire.png" alt="" /></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><img src="/hot-fire.png" alt="" /></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><img src="/fire.png" alt="" /></td>
                            <hr />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HotGamesList