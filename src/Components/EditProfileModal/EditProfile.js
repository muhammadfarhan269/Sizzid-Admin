import React from 'react'
import "./EditProfile.css"

function EditProfile() {
    return (
        <div className="modal fade edit_profile" id="editProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
                    </div>
                    <div className="modal-body">
                        <div className='row'>
                            <div className='col-md-12 text-center'>
                                <img src="/empty-profile.svg" alt="" />
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className='col-md-6'>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" data-bs-dismiss="modal"><img src="/discard.svg" alt="" /></button>
                        <button type="button" className="btn" data-bs-dismiss="modal"><img src="/save.svg" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile