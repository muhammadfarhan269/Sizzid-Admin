import React, { useEffect, useState } from 'react'
import style_dark from './UserDetailPopup_Dark.module.css'
import style_light from './UserDetailPopup_Light.module.css'
import { getUserDetail } from '../../../../api';

function UserDetailPopup({ theme }) {

    const style = theme === 'dark' ? style_dark : style_light
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetail = async (id) => {
            if (!id) return;
            setLoading(true);
            setError(null);
            try {
                const res = await getUserDetail(id);
                setDetail(res.data.data);
            } catch (err) {
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        const onSelect = (event) => fetchDetail(event.detail);
        window.addEventListener('sizzld:user-selected', onSelect);
        const existingId = localStorage.getItem('sizzld_selected_user_id');
        if (existingId) fetchDetail(existingId);
        return () => window.removeEventListener('sizzld:user-selected', onSelect);
    }, []);

    return (
        <div className={`${style.user_detail} modal fade`} id="userDetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={`${style.modal_dialog} modal-dialog`}>
                <div className="modal-content">
                    <div className={`${style.modal_header} modal-header`}>
                        <h5 className="modal-title" id="exampleModalLabel">{detail?.username || 'User Detail'}</h5>
                        <button type="button" className='btn' data-bs-dismiss="modal" aria-label="Close"><img src="/close-modal.svg" alt="" /></button>
                    </div>
                    <div className={`${style.modal_body} modal-body`}>
                        <ul className={`${style.user_detail_nav} nav nav-tabs`} id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link active`} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Profile</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Sessions</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Transactions</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="withdraw-tab" data-bs-toggle="tab" data-bs-target="#withdraw" type="button" role="tab" aria-controls="withdraw" aria-selected="false">Meta</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className={`${style.activities_table} table-responsive`}>
                                    <table className="table">
                                        <thead><tr><th>Field</th><th>Value</th><th>Status</th></tr></thead>
                                        <tbody>
                                            {loading && <tr><td colSpan={3}>Loading...</td></tr>}
                                            {error && <tr><td colSpan={3} style={{ color: 'red' }}>{error}</td></tr>}
                                            {!loading && !error && <>
                                                <tr><td>Email</td><td>{detail?.email}</td><td>{detail?.isBanned ? 'BANNED' : 'ACTIVE'}</td><hr /></tr>
                                                <tr><td>Role</td><td>{detail?.role}</td><td>{detail?.vipTier}</td><hr /></tr>
                                                <tr><td>Points</td><td>{detail?.totalPoints}</td><td>Lifetime {detail?.lifetimePoints}</td><hr /></tr>
                                                <tr><td>Referrals</td><td>{detail?.referralCount}</td><td>Code {detail?.referralCode}</td><hr /></tr>
                                            </>}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className={`${style.earnings_table} table-responsive`}>
                                    <table className="table">
                                        <thead><tr><th>Game</th><th>Score</th><th>Played At</th></tr></thead>
                                        <tbody>
                                            {(detail?.recentSessions || []).map((s) => (
                                                <tr key={s.id}>
                                                    <td>{s.game?.title || '-'}</td>
                                                    <td className={`${style.bet_amount}`}>{s.score}</td>
                                                    <td className={`${style.earning}`}>{new Date(s.playedAt).toLocaleString()}</td>
                                                    <hr />
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className={`${style.earnings_table} table-responsive`}>
                                    <table className="table">
                                        <thead><tr><th>Type</th><th>Amount</th><th>When</th></tr></thead>
                                        <tbody>
                                            {(detail?.recentTransactions || []).map((t) => (
                                                <tr key={t.id}>
                                                    <td>{t.type}</td>
                                                    <td className={`${style.bet_amount}`}>{t.amount}</td>
                                                    <td className={`${style.earning}`}>{new Date(t.createdAt).toLocaleString()}</td>
                                                    <hr />
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="withdraw" role="tabpanel" aria-labelledby="withdraw-tab">
                                <div className={`${style.earnings_table} table-responsive`}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Open Tickets</th>
                                                <th>Total Redemptions</th>
                                                <th>Last Login</th>
                                                <th>Login Streak</th>
                                                <th>Created</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{detail?.openSupportTicketsCount ?? 0}</td>
                                                <td className={`${style.bet_amount}`}>{detail?.totalRedemptionsCount ?? 0}</td>
                                                <td>{detail?.lastLoginAt ? new Date(detail.lastLoginAt).toLocaleString() : '-'}</td>
                                                <td>{detail?.loginStreak ?? 0}</td>
                                                <td className={`${style.earning}`}>{detail?.createdAt ? new Date(detail.createdAt).toLocaleDateString() : '-'}</td>
                                                <hr />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailPopup