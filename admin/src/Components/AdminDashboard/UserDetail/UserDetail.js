import React from 'react'
import styles_dark from './UserDetail_Dark.module.css'
import styles_light from './UserDetail_Light.module.css'

function UserDetail({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

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
                            <th >IP Address</th>
                            <th >Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={`${style.user_id}`}>Name 1</td>
                            <td className={`${style.name}`}>User name</td>
                            <td className={`${style.ip_address}`}>548430256972</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#userDetail">View all</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>Name 1</td>
                            <td className={`${style.name}`}>User name</td>
                            <td className={`${style.ip_address}`}>548430256972</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#userDetail">View all</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>Name 1</td>
                            <td className={`${style.name}`}>User name</td>
                            <td className={`${style.ip_address}`}>548430256972</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#userDetail">View all</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>Name 1</td>
                            <td className={`${style.name}`}>User name</td>
                            <td className={`${style.ip_address}`}>548430256972</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#userDetail">View all</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>Name 1</td>
                            <td className={`${style.name}`}>User name</td>
                            <td className={`${style.ip_address}`}>548430256972</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#userDetail">View all</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>Name 1</td>
                            <td className={`${style.name}`}>User name</td>
                            <td className={`${style.ip_address}`}>548430256972</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#userDetail">View all</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>Name 1</td>
                            <td className={`${style.name}`}>User name</td>
                            <td className={`${style.ip_address}`}>548430256972</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#userDetail">View all</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>Name 1</td>
                            <td className={`${style.name}`}>User name</td>
                            <td className={`${style.ip_address}`}>548430256972</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#userDetail">View all</td>
                            <hr />
                        </tr>
                        <tr>
                            <td className={`${style.user_id}`}>Name 1</td>
                            <td className={`${style.name}`}>User name</td>
                            <td className={`${style.ip_address}`}>548430256972</td>
                            <td className={`${style.view_all}`} data-bs-toggle="modal" data-bs-target="#userDetail">View all</td>
                            <hr />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserDetail