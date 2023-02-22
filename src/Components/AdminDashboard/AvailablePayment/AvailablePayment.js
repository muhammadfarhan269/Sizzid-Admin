import React from 'react'
import { Line } from 'react-chartjs-2';
import faker from 'faker'
import styles_dark from './AvailablePayment_Dark.module.css';
import styles_light from './AvailablePayment_Light.module.css';

const labels = ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan'];

export const cardOneoptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            enabled: false
        }
    },
    scales: {
        x: {
            display: false
        },
        y: {
            display: false
        }
    },
};

export const cardTwooptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            enabled: false
        }
    },
    scales: {
        x: {
            display: false
        },
        y: {
            display: false
        }
    },
};

export const cardThreeoptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            enabled: false
        }
    },
    scales: {
        x: {
            display: false
        },
        y: {
            display: false
        }
    },
};

export const CardOneChart = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgba(247, 147, 26, 1)',
            backgroundColor: 'rgba(247, 147, 26, 1)',
        },
    ],
};

export const CardTwoChart = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgba(98, 126, 234, 1)',
            backgroundColor: 'rgba(98, 126, 234, 1)',
        },
    ],
};

export const CardThreeChart = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgba(29, 224, 180, 1)',
            backgroundColor: 'rgba(29, 224, 180, 1)',
        },
    ],
};

function AvailablePayment({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    return (
        <div className='row'>
            <div className='col-md-12'>
                <h3 className={`${style.page_title}`}>Available Payment</h3>
            </div>
            <div className="col-12 col-sm-6 col-xl-4 grid-margin">
                <div className={`card ${style.upper_cards} ${style.avaiable_payment_upper_cards}`}>
                    <div className="card-body">
                        <div className='row mx-1'>
                            <div className='col-md-2'>
                                <img src="/binance.svg" alt="" />
                            </div>
                            <div className='col-md-10'>
                                <div className={`${style.upper_card_title} pt-2`}>
                                    <p className={`${style.title}`}>BINANCE</p>
                                    <p className={`${style.sub_title}`}>BTC <span>0x68B3928850C7896E11935CF97...</span></p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className={`${style.card_lower_section} mt-2`}>
                                    <h3 className={`${style.amount}`}>$52,291</h3>
                                    <p className={`${style.change_in_flow_red}`}>+0.25%</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <Line options={cardOneoptions} data={CardOneChart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-4 grid-margin">
                <div className={`card ${style.upper_cards} ${style.avaiable_payment_upper_cards}`}>
                    <div className="card-body">
                        <div className='row mx-1'>
                            <div className='col-md-2'>
                                <img src="/ethereum.svg" alt="" />
                            </div>
                            <div className='col-md-10'>
                                <div className={`${style.upper_card_title} pt-2`}>
                                    <p className={`${style.title}`}>ETHEREUM</p>
                                    <p className={`${style.sub_title}`}>BTC <span>0x68B3928850C7896E11935CF97...</span></p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className={`${style.card_lower_section} mt-2`}>
                                    <h3 className={`${style.amount}`}>$52,291</h3>
                                    <p className={`${style.change_in_flow_neon}`}>+0.25%</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <Line options={cardTwooptions} data={CardTwoChart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-4 grid-margin">
                <div className={`card ${style.upper_cards} ${style.avaiable_payment_upper_cards}`}>
                    <div className="card-body">
                        <div className='row mx-1'>
                            <div className='col-md-2'>
                                <img src="/solana.svg" alt="" />
                            </div>
                            <div className='col-md-10'>
                                <div className={`${style.upper_card_title} pt-2`}>
                                    <p className={`${style.title}`}>SOLANA</p>
                                    <p className={`${style.sub_title}`}>BTC <span>0x68B3928850C7896E11935CF97...</span></p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className={`${style.card_lower_section} mt-2`}>
                                    <h3 className={`${style.amount}`}>$52,291</h3>
                                    <p className={`${style.change_in_flow_green}`}>+0.25%</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <Line options={cardThreeoptions} data={CardThreeChart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-12'>
                <table class={`table ${style.pending_approval_table} mt-4`}>
                    <thead>
                        <tr>
                            <th >Txn Hash</th>
                            <th >Method <img src="/caret-down.svg" alt="" /></th>
                            <th >Block <img src="/caret-down.svg" alt="" /></th>
                            <th >Age</th>
                            <th >From <img src="/caret-down.svg" alt="" /></th>
                            <th >To <img src="/caret-down.svg" alt="" /></th>
                            <th >Value</th>
                            <th >[Txn Fee]</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={`${style.game_name}`}><img src="/eye.svg" alt="" /> 0x8a184ec8412f5..</td>
                            <td className={`${style.approval_type}`}><div className={`${style.payment}`}>Payment</div></td>
                            <td className={`${style.game_name}`}>24343332</td>
                            <td className={`${style.game_name}`}>10 hrs 39 mins ago..</td>
                            <td className={`${style.game_name}`}>0x8a184ec8412f5..</td>
                            <td className={`${style.game_name}`}><img src="/in.svg" alt="" /> Cub Finance: CUB Token</td>
                            <td className={`${style.game_name}`}>0 BNB</td>
                            <td className={`${style.game_name}`}>0.000222515</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}><img src="/eye.svg" alt="" /> 0x8a184ec8412f5..</td>
                            <td className={`${style.approval_type}`}><div className={`${style.document}`}>Document</div></td>
                            <td className={`${style.game_name}`}>24343332</td>
                            <td className={`${style.game_name}`}>10 hrs 39 mins ago..</td>
                            <td className={`${style.game_name}`}>0x8a184ec8412f5..</td>
                            <td className={`${style.game_name}`}><img src="/in.svg" alt="" /> Cub Finance: CUB Token</td>
                            <td className={`${style.game_name}`}>0 BNB</td>
                            <td className={`${style.game_name}`}>0.000222515</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}><img src="/eye.svg" alt="" /> 0x8a184ec8412f5..</td>
                            <td className={`${style.approval_type}`}><div className={`${style.payment}`}>Payment</div></td>
                            <td className={`${style.game_name}`}>24343332</td>
                            <td className={`${style.game_name}`}>10 hrs 39 mins ago..</td>
                            <td className={`${style.game_name}`}>0x8a184ec8412f5..</td>
                            <td className={`${style.game_name}`}><img src="/in.svg" alt="" /> Cub Finance: CUB Token</td>
                            <td className={`${style.game_name}`}>0 BNB</td>
                            <td className={`${style.game_name}`}>0.000222515</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}><img src="/eye.svg" alt="" /> 0x8a184ec8412f5..</td>
                            <td className={`${style.approval_type}`}><div className={`${style.document}`}>Document</div></td>
                            <td className={`${style.game_name}`}>24343332</td>
                            <td className={`${style.game_name}`}>10 hrs 39 mins ago..</td>
                            <td className={`${style.game_name}`}>0x8a184ec8412f5..</td>
                            <td className={`${style.game_name}`}><img src="/in.svg" alt="" /> Cub Finance: CUB Token</td>
                            <td className={`${style.game_name}`}>0 BNB</td>
                            <td className={`${style.game_name}`}>0.000222515</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}><img src="/eye.svg" alt="" /> 0x8a184ec8412f5..</td>
                            <td className={`${style.approval_type}`}><div className={`${style.payment}`}>Payment</div></td>
                            <td className={`${style.game_name}`}>24343332</td>
                            <td className={`${style.game_name}`}>10 hrs 39 mins ago..</td>
                            <td className={`${style.game_name}`}>0x8a184ec8412f5..</td>
                            <td className={`${style.game_name}`}><img src="/in.svg" alt="" /> Cub Finance: CUB Token</td>
                            <td className={`${style.game_name}`}>0 BNB</td>
                            <td className={`${style.game_name}`}>0.000222515</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}><img src="/eye.svg" alt="" /> 0x8a184ec8412f5..</td>
                            <td className={`${style.approval_type}`}><div className={`${style.document}`}>Document</div></td>
                            <td className={`${style.game_name}`}>24343332</td>
                            <td className={`${style.game_name}`}>10 hrs 39 mins ago..</td>
                            <td className={`${style.game_name}`}>0x8a184ec8412f5..</td>
                            <td className={`${style.game_name}`}><img src="/in.svg" alt="" /> Cub Finance: CUB Token</td>
                            <td className={`${style.game_name}`}>0 BNB</td>
                            <td className={`${style.game_name}`}>0.000222515</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}><img src="/eye.svg" alt="" /> 0x8a184ec8412f5..</td>
                            <td className={`${style.approval_type}`}><div className={`${style.payment}`}>Payment</div></td>
                            <td className={`${style.game_name}`}>24343332</td>
                            <td className={`${style.game_name}`}>10 hrs 39 mins ago..</td>
                            <td className={`${style.game_name}`}>0x8a184ec8412f5..</td>
                            <td className={`${style.game_name}`}><img src="/in.svg" alt="" /> Cub Finance: CUB Token</td>
                            <td className={`${style.game_name}`}>0 BNB</td>
                            <td className={`${style.game_name}`}>0.000222515</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.game_name}`}><img src="/eye.svg" alt="" /> 0x8a184ec8412f5..</td>
                            <td className={`${style.approval_type}`}><div className={`${style.document}`}>Document</div></td>
                            <td className={`${style.game_name}`}>24343332</td>
                            <td className={`${style.game_name}`}>10 hrs 39 mins ago..</td>
                            <td className={`${style.game_name}`}>0x8a184ec8412f5..</td>
                            <td className={`${style.game_name}`}><img src="/in.svg" alt="" /> Cub Finance: CUB Token</td>
                            <td className={`${style.game_name}`}>0 BNB</td>
                            <td className={`${style.game_name}`}>0.000222515</td>
                            <hr />
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AvailablePayment