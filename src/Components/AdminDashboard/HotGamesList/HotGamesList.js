import React, { useState } from 'react'

function HotGamesList() {

    const [hot, setHot] = useState(false)
    const [hotOne, setHotOne] = useState(false)
    const [hotTwo, setHotTwo] = useState(false)
    const [hotThree, setHotThree] = useState(false)
    const [hotFour, setHotFour] = useState(false)
    const [hotFive, setHotFive] = useState(false)
    const [hotSix, setHotSix] = useState(false)
    const [hotSeven, setHotSeven] = useState(false)
    const [hotEight, setHotEight] = useState(false)
    const [hotNine, setHotNine] = useState(false)

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
                            <td><span onClick={() =>setHotOne(hotOne => !hotOne)}>{hotOne ? <img src="/hot-fire.png" alt="" /> : <img src="/fire.png" alt="" />}</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><span onClick={() =>setHotTwo(hotTwo => !hotTwo)}>{hotTwo ? <img src="/hot-fire.png" alt="" /> : <img src="/fire.png" alt="" />}</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><span onClick={() =>setHotThree(hotThree => !hotThree)}>{hotThree ? <img src="/hot-fire.png" alt="" /> : <img src="/fire.png" alt="" />}</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><span onClick={() =>setHotFour(hotFour => !hotFour)}>{hotFour ? <img src="/hot-fire.png" alt="" /> : <img src="/fire.png" alt="" />}</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><span onClick={() =>setHotFive(hotFive => !hotFive)}>{hotFive ? <img src="/hot-fire.png" alt="" /> : <img src="/fire.png" alt="" />}</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><span onClick={() =>setHotSix(hotSix => !hotSix)}>{hotSix ? <img src="/hot-fire.png" alt="" /> : <img src="/fire.png" alt="" />}</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><span onClick={() =>setHotSeven(hotSeven => !hotSeven)}>{hotSeven ? <img src="/hot-fire.png" alt="" /> : <img src="/fire.png" alt="" />}</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><span onClick={() =>setHotEight(hotEight => !hotEight)}>{hotEight ? <img src="/hot-fire.png" alt="" /> : <img src="/fire.png" alt="" />}</span></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className='date_of_bet'>Hash Dice</td>
                            <td className='bet_amount'>50000</td>
                            <td className='total_bets'><div>786</div></td>
                            <td><span onClick={() =>setHotNine(hotNine => !hotNine)}>{hotNine ? <img src="/hot-fire.png" alt="" /> : <img src="/fire.png" alt="" />}</span></td>
                            <hr />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HotGamesList