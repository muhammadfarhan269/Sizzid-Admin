import React from 'react'
import styles_dark from './LanguageModal_Dark.module.css';
import styles_light from './LanguageModal_Light.module.css';

function LanguageModal({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    return (
        <div className={`modal fade ${style.language_modal}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={`modal-dialog ${style.modal_dialog}`}>
                <div className={`modal-content ${style.modal_content}`}>
                    <div className={`modal-header ${style.modal_header}`}>
                        <h5 className={`modal-title ${style.modal_title}`} id="exampleModalLabel">SELECT LANGUAGE</h5>
                        <p>SELECTED LANUAGE: <span>SPANISH</span></p>
                    </div>
                    <div className={`modal-body ${style.modal_body}`}>
                        <div className={`${style.flag_container}`}>
                            <div>
                                <img src="/czech-republic.svg" alt="" />
                            </div>
                            <div>
                                <img src="/spain.svg" alt="" />
                            </div>
                            <div>
                                <img src="/morocco.svg" alt="" />
                            </div>
                            <div>
                                <img src="/mexico.svg" alt="" />
                            </div>
                            <div>
                                <img src="/south-africa.svg" alt="" />
                            </div>
                            <div>
                                <img src="/denmark.svg" alt="" />
                            </div>
                            <div>
                                <img src="/turkey.svg" alt="" />
                            </div>
                            <div>
                                <img src="/saudi-arabia.svg" alt="" />
                            </div>
                            <div>
                                <img src="/germany.svg" alt="" />
                            </div>
                            <div>
                                <img src="/vietnam.svg" alt="" />
                            </div>
                            <div>
                                <img src="/sweden.svg" alt="" />
                            </div>
                            <div>
                                <img src="/united-kingdom.svg" alt="" />
                            </div>
                            <div>
                                <img src="/united-kingdom.svg" alt="" />
                            </div>
                            <div>
                                <img src="/united-states.svg" alt="" />
                            </div>
                            <div>
                                <img src="/german.svg" alt="" />
                            </div>
                            <div>
                                <img src="/china.svg" alt="" />
                            </div>
                            <div>
                                <img src="/canada.svg" alt="" />
                            </div>
                            <div>
                                <img src="/australia.svg" alt="" />
                            </div>
                            <div>
                                <img src="/france.svg" alt="" />
                            </div>
                            <div>
                                <img src="/pakistan.svg" alt="" />
                            </div>
                            <div>
                                <img src="/hong-kong.svg" alt="" />
                            </div>
                            <div>
                                <img src="/serbia.svg" alt="" />
                            </div>
                            <div>
                                <img src="/brazil-flag.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`modal-footer ${style.modal_footer}`}>
                        <button type="button" className="btn" data-bs-dismiss="modal"><img src="/discard.svg" alt="" /></button>
                        <button type="button" className="btn" data-bs-dismiss="modal"><img src="/save.svg" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageModal