import React, { useEffect, useState } from 'react'
import styles_dark from './PromotionsRewards_Dark.module.css';
import styles_light from './PromotionsRewards_Light.module.css';
import { deletePromotion, getPromotions, togglePromotion } from '../../../api';

function PromotionsRewards({ theme }) {

  const style = theme === 'dark' ? styles_dark : styles_light
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPromotions();
        setPromotions(res.data.data || []);
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const onToggle = async (id) => {
    try {
      await togglePromotion(id);
      setPromotions((prev) => prev.map((p) => (p.id === id ? { ...p, isActive: !p.isActive } : p)));
    } catch (err) {
      setError('Failed to update promotion');
    }
  };

  const onDelete = async (id) => {
    try {
      await deletePromotion(id);
      setPromotions((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError('Failed to delete promotion');
    }
  };

  return (
    <div className='row'>
      <div className='col-md-4 mt-4'>
        <h3 className={`${style.page_title}`}>Promotions & Reward</h3>
      </div>
      <div className='col-md-8 mt-4'>
        <div className={`${style.promotions_rewards_nav_button}`}>
          <ul>
            <li className={`${style.active}`}>Promotions</li>
            <li>Lucky Spin</li>
            <li>Lottery</li>
            <li>Rewards</li>
            <li>Current Bets</li>
            <li>Affiliate</li>
          </ul>
        </div>
      </div>
      <div className='col-md-12 mt-4'>
        <div className={`${style.promotions_card}`}>
          <h1 className={`${style.title}`}>Promotions & Reward</h1>
          <h3 className={`${style.sub_title}`}>Active Promotions</h3>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className='row'>
            {!loading && !error && promotions.map((promotion, idx) => (
              <div className='col-md-4' key={promotion.id}>
                <div className={idx % 3 === 0 ? `${style.card_one}` : idx % 3 === 1 ? `${style.card_two}` : `${style.card_three}`}>
                  <p>{promotion.title}<br />{promotion.description || promotion.type}</p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className='btn btn-sm btn-success' onClick={() => onToggle(promotion.id)}>
                      {promotion.isActive ? 'Disable' : 'Enable'}
                    </button>
                    <button className='btn btn-sm btn-danger' onClick={() => onDelete(promotion.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionsRewards