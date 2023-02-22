import React from 'react'
import styles_dark from './Affiliate_Dark.module.css';
import styles_light from './Affiliate_Light.module.css';

function Affiliate({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    return (
        <div className='row'>
            <div className='col-md-12'>
                <h3 className={`${style.page_title}`}>AFFILIATE</h3>
            </div>
            <div className='col-md-12'>
                <table class={`table ${style.affiliate_table} mt-4`}>
                    <thead>
                        <tr>
                            <th >User ID</th>
                            <th >Referral Code</th>
                            <th >Invite</th>
                            <th >Reward</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>65549538423</td>
                            <td className={`${style.referral_code}`}>ABL121331</td>
                            <td className={`${style.invite}`}>0.66667598645</td>
                            <td className={`${style.reward}`}><img src="/bitcoin.png" alt="" /> 0.26598855623 -</td>
                            <hr />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Affiliate