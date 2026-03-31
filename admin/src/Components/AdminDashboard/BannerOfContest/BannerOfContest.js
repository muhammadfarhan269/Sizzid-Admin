import React from 'react'
import styles_dark from './BannerOfContest_Dark.module.css';
import styles_light from './BannerOfContest_Light.module.css';

function BannerOfContest({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    return (
        <div className='row'>
            <div className='col-md-5 mt-4 d-flex justify-content-between'>
                <h3 className={`${style.page_title}`}>Banner of contest</h3>
                <button className={`btn ${style.btn_add_banner}`}>Add Banner <img src="/plus.png" alt="" /></button>
            </div>
            <div className='col-md-12'>
                <div className={`${style.banner_of_contest_card}`}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className={`${style.inner_card}`}>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <img src="/card-onee.svg" className='w-100' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className={`${style.inner_card}`}>
                                <img src="/card-twoo.svg" className='w-100' alt="" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className={`${style.inner_card}`}>
                                <img src="/card-threeee.svg" style={{ width: '104%' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerOfContest