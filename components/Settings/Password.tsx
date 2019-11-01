import React, {useState} from "react";

const Password = () => {
    const [currentPasswordValue, setCurrentPasswordValue] = useState('')
    const [newPasswordValue, setNewPasswordValue] = useState('')

    const handleCurrentPasswordChange = (e) => {
        setCurrentPasswordValue(e.target.value);
    }

    const handleNewPasswordChange = (e) => {
        setNewPasswordValue(e.target.value);
    }

    return (
        <>
            <div className="form-group pt-3">
                <label htmlFor="bio">Input Your Current Password</label>
                <input
                    className="w-75 form-control"
                    id="password"
                    type="password"
                    placeholder="Account Password"
                    onChange={e => handleCurrentPasswordChange(e)}
                    value={currentPasswordValue}
                 />
            </div>
            <div className="form-group pt-3">
                <label htmlFor="bio">Input Your New Password</label>
                <input
                    className="w-75 form-control"
                    id="password"
                    type="password"
                    placeholder="Account Password"
                    onChange={e => handleNewPasswordChange(e)}
                    value={newPasswordValue}
                 />
            </div>

            <style jsx>{`
                #password {
                    border: 1px solid rgba(0, 0, 0, 0.5) !important;
                    border-radius: 5px;
                }
                
                .form-group label {
                    font-family: "Segoe UI";
                    color: #383838;
                    font-size: 0.9rem;
                }

                .form-control {
                    padding: 0.5rem 1rem !important;
                }

                .form-control::-webkit-input-placeholder {
                    font-size: 0.8rem!important;
                }
                .form-control::-moz-placeholder {
                    font-size: 0.8rem!important;                    
                }
                .form-control:-ms-input-placeholder {
                    font-size: 0.8rem!important;
                }
            `}</style>
        </>
    );
};

export default Password;
