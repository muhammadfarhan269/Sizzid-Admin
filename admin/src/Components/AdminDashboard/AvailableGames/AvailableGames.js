import React from 'react'
import styles_dark from './AvailableGames_Dark.module.css';
import styles_light from './AvailableGames_Light.module.css';

function AvailableGames({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light

    return (
        <div className='row'>
            <div className='col-md-12 mt-4'>
                <h3 className={`${style.page_title}`}>Available Games</h3>
            </div>
            <div className='col-md-12 mt-4'>
                <div className={`${style.games_card}`}>
                    <div className='row'>
                        <div className='col-md-3 mt-3'>
                            <div className={`card ${style.individual_game_card}`}>
                                <img src="/game-one.png" class="card-img-top w-100" alt="..." />
                                <div className={`card-body p-2 ${style.card_body}`}>
                                    <p className={`card-text position-relative ${style.card_text}`}>35,000 Player <br /> Playing Now
                                        <div className={`${style.redirect}`}>
                                            <a href="#"><img src="/arrow.png" alt="" /></a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className={`card ${style.individual_game_card}`}>
                                <img src="/game-two.png" class="card-img-top w-100" alt="..." />
                                <div className={`card-body p-2 ${style.card_body}`}>
                                    <p className={`card-text position-relative ${style.card_text}`}>35,000 Player <br /> Playing Now
                                        <div className={`${style.redirect}`}>
                                            <a href="#"><img src="/arrow.png" alt="" /></a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className={`card ${style.individual_game_card}`}>
                                <img src="/game-three.png" class="card-img-top w-100" alt="..." />
                                <div className={`card-body p-2 ${style.card_body}`}>
                                    <p className={`card-text position-relative ${style.card_text}`}>35,000 Player <br /> Playing Now
                                        <div className={`${style.redirect}`}>
                                            <a href="#"><img src="/arrow.png" alt="" /></a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className={`card ${style.individual_game_card}`}>
                                <img src="/game-four.png" class="card-img-top w-100" alt="..." />
                                <div className={`card-body p-2 ${style.card_body}`}>
                                    <p className={`card-text position-relative ${style.card_text}`}>35,000 Player <br /> Playing Now
                                        <div className={`${style.redirect}`}>
                                            <a href="#"><img src="/arrow.png" alt="" /></a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className={`card ${style.individual_game_card}`}>
                                <img src="/game-five.png" class="card-img-top w-100" alt="..." />
                                <div className={`card-body p-2 ${style.card_body}`}>
                                    <p className={`card-text position-relative ${style.card_text}`}>35,000 Player <br /> Playing Now
                                        <div className={`${style.redirect}`}>
                                            <a href="#"><img src="/arrow.png" alt="" /></a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className={`card ${style.individual_game_card}`}>
                                <img src="/game-six.png" class="card-img-top w-100" alt="..." />
                                <div className={`card-body p-2 ${style.card_body}`}>
                                    <p className={`card-text position-relative ${style.card_text}`}>35,000 Player <br /> Playing Now
                                        <div className={`${style.redirect}`}>
                                            <a href="#"><img src="/arrow.png" alt="" /></a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className={`card ${style.individual_game_card}`}>
                                <img src="/game-seven.png" class="card-img-top w-100" alt="..." />
                                <div className={`card-body p-2 ${style.card_body}`}>
                                    <p className={`card-text position-relative ${style.card_text}`}>35,000 Player <br /> Playing Now
                                        <div className={`${style.redirect}`}>
                                            <a href="#"><img src="/arrow.png" alt="" /></a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className={`card ${style.individual_game_card}`}>
                                <img src="/game-eight.png" class="card-img-top w-100" alt="..." />
                                <div className={`card-body p-2 ${style.card_body}`}>
                                    <p className={`card-text position-relative ${style.card_text}`}>35,000 Player <br /> Playing Now
                                        <div className={`${style.redirect}`}>
                                            <a href="#"><img src="/arrow.png" alt="" /></a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className={`card ${style.individual_game_card}`}>
                                <img src="/game-one.png" class="card-img-top w-100" alt="..." />
                                <div className={`card-body p-2 ${style.card_body}`}>
                                    <p className={`card-text position-relative ${style.card_text}`}>35,000 Player <br /> Playing Now
                                        <div className={`${style.redirect}`}>
                                            <a href="#"><img src="/arrow.png" alt="" /></a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className={`card ${style.individual_game_card}`}>
                                <img src="/game-two.png" class="card-img-top w-100" alt="..." />
                                <div className={`card-body p-2 ${style.card_body}`}>
                                    <p className={`card-text position-relative ${style.card_text}`}>35,000 Player <br /> Playing Now
                                        <div className={`${style.redirect}`}>
                                            <a href="#"><img src="/arrow.png" alt="" /></a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className={`card ${style.individual_game_card}`}>
                                <img src="/game-three.png" class="card-img-top w-100" alt="..." />
                                <div className={`card-body p-2 ${style.card_body}`}>
                                    <p className={`card-text position-relative ${style.card_text}`}>35,000 Player <br /> Playing Now
                                        <div className={`${style.redirect}`}>
                                            <a href="#"><img src="/arrow.png" alt="" /></a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mt-3'>
                            <div className={`card ${style.individual_game_card}`}>
                                <img src="/game-four.png" class="card-img-top w-100" alt="..." />
                                <div className={`card-body p-2 ${style.card_body}`}>
                                    <p className={`card-text position-relative ${style.card_text}`}>35,000 Player <br /> Playing Now
                                        <div className={`${style.redirect}`}>
                                            <a href="#"><img src="/arrow.png" alt="" /></a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvailableGames