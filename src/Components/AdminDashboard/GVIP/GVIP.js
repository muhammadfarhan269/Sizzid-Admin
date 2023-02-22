import React from 'react'
import styles_dark from './GVIP_Dark.module.css';
import styles_light from './GVIP_Light.module.css';

function GVIP({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    return (
        <div className='row'>
            <div className='col-md-12'>
                <h3 className={`${style.page_title}`}>VIP/SVIP/EVIP</h3>
            </div>
            <div className='col-md-12'>
                <table class={`table ${style.gvip_table} mt-4`}>
                    <thead>
                        <tr>
                            <th >User Name</th>
                            <th >Number of Bets</th>
                            <th >Total Bets</th>
                            <th >Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={`${style.user_name}`}>John</td>
                            <td className={`${style.bet_amount}`}>50000</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td><img src="/diamond.png" alt="" /></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_name}`}>John</td>
                            <td className={`${style.bet_amount}`}>50000</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td><img src="/sliver.png" alt="" /></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_name}`}>John</td>
                            <td className={`${style.bet_amount}`}>50000</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td><img src="/gold.png" alt="" /></td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_name}`}>John</td>
                            <td className={`${style.bet_amount}`}>50000</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td>
                                {theme === 'dark' ? <img src="/vip.png" alt="" /> : <img src="/vip-gray.svg" alt="" />}
                            </td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_name}`}>John</td>
                            <td className={`${style.bet_amount}`}>50000</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td>
                                {theme === 'dark' ? <img src="/vip.png" alt="" /> : <img src="/vip-gray.svg" alt="" />}
                            </td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_name}`}>John</td>
                            <td className={`${style.bet_amount}`}>50000</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td>
                                {theme === 'dark' ? <img src="/vip.png" alt="" /> : <img src="/vip-gray.svg" alt="" />}
                            </td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_name}`}>John</td>
                            <td className={`${style.bet_amount}`}>50000</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td>
                                {theme === 'dark' ? <img src="/vip.png" alt="" /> : <img src="/vip-gray.svg" alt="" />}
                            </td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_name}`}>John</td>
                            <td className={`${style.bet_amount}`}>50000</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td>
                                {theme === 'dark' ? <img src="/vip.png" alt="" /> : <img src="/vip-gray.svg" alt="" />}
                            </td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_name}`}>John</td>
                            <td className={`${style.bet_amount}`}>50000</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td>
                                {theme === 'dark' ? <img src="/vip.png" alt="" /> : <img src="/vip-gray.svg" alt="" />}
                            </td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_name}`}>John</td>
                            <td className={`${style.bet_amount}`}>50000</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td>
                                {theme === 'dark' ? <img src="/vip.png" alt="" /> : <img src="/vip-gray.svg" alt="" />}
                            </td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_name}`}>John</td>
                            <td className={`${style.bet_amount}`}>50000</td>
                            <td className={`${style.total_bets}`}><div>786</div></td>
                            <td>
                                {theme === 'dark' ? <img src="/vip.png" alt="" /> : <img src="/vip-gray.svg" alt="" />}
                            </td>
                            <hr />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GVIP