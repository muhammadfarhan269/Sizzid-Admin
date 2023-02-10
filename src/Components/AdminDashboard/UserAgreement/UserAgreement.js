import React, { useState } from 'react'
import './UserAgreement.css'

function UserAgreement() {

    const [editAgreement, setEditAgreement] = useState(false)

    return (
        <div className='row'>
            <div className='col-md-12 mt-4'>
                <h3 className='page_title float-start'>User agreement & Privacy Policy</h3> <img className='float-end mt-3 edit_user_agreement' src="/edit.svg" alt="" onClick={() => setEditAgreement(true)} />
            </div>
            <div className='col-md-12 mt-4'>
                <div className='user_agreement_card'>
                    {!editAgreement ?
                        <>
                            <h3 className='heading_one'>Is The Game Fair?</h3>
                            <p>We are a fair and impartial prediction and guessing platform. Our goal is to eliminate all unfair factors and make players feel comfortable and have fun.</p>
                            <p>We have generated a total of 10 million hashes (the generation chain is verifiable), and each hash corresponds to a curve crash multiplier.</p>
                            <p>We release these 10 million numbers in reverse order, each corresponding to one turn of the game (i.e. we have 10 million turns in total).</p>
                            <p>In other words, the crash number of each turn already exists and is not calculated after the game starts. Players can therefore place their bet without concern.</p>
                            <p>Will The Game Be Manipulated By The Platform?GitHub Verify</p>
                            <p>The integrity check value is key to verifying whether there is any official manipulation; The test algorithm is provided as follows.</p>
                            <p>Example: 6b5124897c3c48d0e46cc9249f08c7e560792459f1bad1171224643b5d2be231</p>
                            <ol>
                                <li>
                                    Take a random value in the 2^52 range, namely 16^13, i.e. a 13-bit hexadecimal number (because the hash value is hexadecimal, 2^52 === 16^13)6b5124897c3c4 (0x6b5124897c3c4 equals 1887939992208324 in the decimal system).
                                </li>
                                <li>
                                    Distribute the random value to 0~1, by dividing it by the maximum value of 13 fs, namely 0x6b5124897c3c4/0x10000000000000. Given the discrete random nature of the hash value, we then can think that any hash value can be transformed into a random number of 0~1, 1887939992208324/4503599627370496 = 0.419206889692064.
                                </li>
                                <li>
                                    Make the house edge 1%. Further to calculate 99/(1-X), where X is the random value calculated at Step 2. When X is 0, the result is 99; when X is 1, the result is positive infinite; when X is 0.01, the result is 100; when X is less than 0.01, the result is less than 100.
                                </li>
                                <li>
                                    Conclusion: The overall random number distribution is 99 to positive infinite; and when the random number distribution is 0~0.01, the result is less than 100.
                                </li>
                                <li>
                                    99/(1-0.419206889692064) = 170.45656748150867
                                </li>
                                <li>
                                    All values less than 100 will be set to 100. In other words, there is a probability of 1% that 100 will appear. Round off the number and divide it by 100 to get the final result.
                                </li>
                                <li>
                                    170/100 = 1.70
                                </li>
                            </ol>
                            <h4>
                                Simple calculation:
                            </h4>
                            <p>
                                When the 13-bit hash value is 8000000000000 = 1.98, 0xb000000000 = 3.168, 0xc000000000 = 3.96, that is, the first digit is greater than 8((16-8)/16≈0.5), the result is approximately 2x; when the first digit is greater than b((16-11)/16≈0.3), the result is approximately 3x; and when the first digit is greater than c((16-12)/16≈0.25), the result is approximately 4x, and the same rule applies to the rest.
                            </p>
                            <p>
                                When the 13-bit hash value is f000000000000 = 15.84, ff00000000000 = 253.44, fff000000
                            </p>
                        </>
                        :
                        <>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h3 className='edit_title'>EDIT</h3>
                                </div>
                                <div className='col-md-6'>
                                    <div className='float-end mt-2 edit_button'>
                                        <img src="/discard.svg" alt="" onClick={() => setEditAgreement(false)} />
                                        <img src="/save.svg" alt="" onClick={() => setEditAgreement(false)} />
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className="input-group">
                                        <textarea className="form-control vh-100 edit_textarea" placeholder='Type Here' aria-label="With textarea"></textarea>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserAgreement