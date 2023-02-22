import React from 'react'
import styles_dark from './EditProfileModal_Dark.module.css';
import styles_light from './EditProfileModal_Light.module.css';

function EditProfile({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    return (
        <div className={`modal fade ${style.edit_profile}`} id="editProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={`${style.modal_dialog} modal-dialog`}>
                <div className={`${style.modal_content} modal-content`}>
                    <div className={`${style.modal_header} modal-header`}>
                        <h5 className={`${style.modal_title} modal-title`} id="exampleModalLabel">Edit Profile</h5>
                    </div>
                    <div className={`${style.modal_body} modal-body`}>
                        <div className='row'>
                            <div className='col-md-12 text-center'>
                                {theme === 'dark' ? <img src="/empty-profile.svg" alt="" /> : <img src="/photo-light.svg" alt="" />}
                                
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>
                    </div>
                    <div className={`${style.modal_footer} modal-footer`}>
                        <button type="button" className="btn" data-bs-dismiss="modal"><img src="/discard.svg" alt="" /></button>
                        <button type="button" className="btn" data-bs-dismiss="modal"><img src="/save.svg" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile