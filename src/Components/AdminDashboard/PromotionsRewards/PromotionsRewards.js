import React from 'react'
import './PromotionsRewards.css'

function PromotionsRewards() {
  return (
    <div className='row'>
      <div className='col-md-4 mt-4'>
        <h3 className='page_title'>Promotions & Reward</h3>
      </div>
      <div className='col-md-8 mt-4'>
        <div className='promotions_rewards_nav_button'>
          <ul>
            <li className='active'>Promotions</li>
            <li>Lucky Spin</li>
            <li>Lottery</li>
            <li>Rewards</li>
            <li>Current Bets</li>
            <li>Affiliate</li>
          </ul>
        </div>
      </div>
      <div className='col-md-12 mt-4'>
        <div className='promotions_card'>
          <h1 className='title'>Promotions & Reward</h1>
          <h3 className='sub_title'>COMPAIN 1</h3>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card_one'>
                <p>RED BEAR <span>VS</span> GREEN BULL <br /> WAR IS ON</p>
                <div>
                  <img src="/arrow.png" alt="" />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card_two'>
                <p>RED BEAR <span>VS</span> GREEN BULL <br /> WAR IS ON</p>
                <div>
                  <img src="/arrow.png" alt="" />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card_three'>
                <p>RED BEAR <span>VS</span> GREEN BULL <br /> WAR IS ON</p>
                <div>
                  <img src="/arrow.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionsRewards