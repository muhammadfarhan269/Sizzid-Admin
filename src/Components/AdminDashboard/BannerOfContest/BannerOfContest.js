import React from 'react'
import './BannerOfContest.css'

function BannerOfContest() {
    return (
        <div className='row'>
            <div className='col-md-4 mt-4 d-flex justify-content-between'>
                <h3 className='page_title'>Banner of contest</h3>
                <button className='btn btn_add_banner'>Add Banner <img src="/plus.png" alt="" /></button>
            </div>
            <div className='col-md-12'>
                <div className='banner_of_contest_card'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='inner_card'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <img src="/card-onee.svg" className='w-100' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='inner_card'>
                                <img src="/card-twoo.svg" className='w-100' alt="" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='inner_card'>
                                <img src="/card-threeee.svg" style={{width: '104%'}} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerOfContest