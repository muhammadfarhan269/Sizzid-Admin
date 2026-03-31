import React, { useEffect, useState } from 'react'
import styles_dark from './UserDetail_Dark.module.css'
import styles_light from './UserDetail_Light.module.css'
import { getUsers } from '../../../api';

function UserDetail({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getUsers();
                setUsers(res.data.data || []);
            } catch (err) {
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const onView = (user) => {
        localStorage.setItem('sizzld_selected_user_id', user.id);
        window.dispatchEvent(new CustomEvent('sizzld:user-selected', { detail: user.id }));
    };

    return (
        <div className='row'>
            <div className='col-md-12'>
                <h3 className={`${style.page_title}`}>User Detail</h3>
            </div>
            <div className='col-md-12'>
                <table class={`table ${style.user_detail_table} mt-4`}>
                    <thead>
                        <tr>
                            <th >User ID</th>
                            <th >Name</th>
                            <th >Email / VIP / Points</th>
                            <th >Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && <tr><td colSpan={4}>Loading...</td></tr>}
                        {error && <tr><td colSpan={4} style={{ color: 'red' }}>{error}</td></tr>}
                        {!loading && !error && users.map((user) => (
                            <tr key={user.id}>
                                <td className={`${style.user_id}`}>{user.id.slice(0, 8)}</td>
                                <td className={`${style.name}`}>{user.username}</td>
                                <td className={`${style.ip_address}`}>{user.email} | {user.vipTier} | {user.totalPoints} pts {user.isBanned ? '| BANNED' : ''}</td>
                                <td
                                    className={`${style.view_all}`}
                                    data-bs-toggle="modal"
                                    data-bs-target="#userDetail"
                                    onClick={() => onView(user)}
                                >
                                    View all
                                </td>
                                <hr />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserDetail