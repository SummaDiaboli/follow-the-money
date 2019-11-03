import React, { useState, useEffect, useLayoutEffect } from "react";

interface Params {
    parentCallback: Function;
}

const Password: React.FC<Params> = ({ parentCallback }) => {
    const [currentPasswordValue, setCurrentPasswordValue] = useState("");
    const [initialLoad, setInitialLoad] = useState(true)
    const [newPasswordValue, setNewPasswordValue] = useState("");
    const [newPasswordConfirmValue, setNewPasswordConfirmValue] = useState("")

    const [currentPasswordEmpty, setCurrentPasswordEmpty] = useState(false);
    const [newPasswordEmpty, setNewPasswordEmpty] = useState(false);
    const [newPasswordConfirmEmpty, setNewPasswordConfirmEmpty] = useState(false)
    const [newPasswordLimit, setNewPasswordLimit] = useState(false);
    const [newPasswordConfirmLimit, setNewPasswordConfirmLimit] = useState(false)
    const [mismatchedPasswords, setMismatchedPasswords] = useState(false)

    const handleCurrentPasswordChange = e => {
        setInitialLoad(false)
        setCurrentPasswordValue(e.target.value);
    };

    const handleNewPasswordChange = e => {
        setInitialLoad(false)
        setNewPasswordValue(e.target.value);
    };

    const handleNewPasswordConfirmChange = e => {
        setInitialLoad(false)
        setNewPasswordConfirmValue(e.target.value)
    }

    useLayoutEffect(() => {
        if (!initialLoad) {
            if (currentPasswordValue === "") {
                setCurrentPasswordEmpty(true);
            } else {
                setCurrentPasswordEmpty(false);
            }
        }
    }, [currentPasswordValue]);

    useLayoutEffect(() => {
        if (!initialLoad) {
            if (newPasswordValue === "") {
                setNewPasswordEmpty(true);
            } else {
                setNewPasswordEmpty(false);
            }

            if (newPasswordValue.length < 8) {
                setNewPasswordLimit(true);
            } else {
                setNewPasswordLimit(false);
            }
        }
    }, [newPasswordValue]);

    useLayoutEffect(() => {
        if (!initialLoad) {
            if (newPasswordConfirmValue === "") {
                setNewPasswordConfirmEmpty(true);
            } else {
                setNewPasswordConfirmEmpty(false);
            }

            if (newPasswordConfirmValue.length < 8) {
                setNewPasswordConfirmLimit(true);
            } else {
                setNewPasswordConfirmLimit(false);
                if (newPasswordConfirmValue !== newPasswordValue) {
                    setMismatchedPasswords(true)
                } else {
                    setMismatchedPasswords(false)
                }
            }
        }
    }, [newPasswordConfirmValue]);

    const sendData = () => {
        parentCallback({
            current: currentPasswordValue,
            new: newPasswordValue,
            confirm: newPasswordConfirmValue
        });
    };

    useEffect(() => {
        sendData();
    }, [currentPasswordValue, newPasswordValue, newPasswordConfirmValue]);

    return (
        <>
            <div className="form-group pt-2">
                <label htmlFor="bio">Input Your Current Password</label>
                <input
                    className="w-75 form-control"
                    id="password"
                    type="password"
                    placeholder="Account Password"
                    onChange={e => handleCurrentPasswordChange(e)}
                    value={currentPasswordValue}
                />
                <small
                    className="text-danger form-text pt-2"
                    hidden={!currentPasswordEmpty}
                >
                    This field cannot be empty.
                </small>
            </div>
            <div className="form-group pt-2">
                <label htmlFor="bio">Input Your New Password</label>
                <input
                    className="w-75 form-control"
                    id="password"
                    type="password"
                    placeholder="Account Password"
                    onChange={e => handleNewPasswordChange(e)}
                    value={newPasswordValue}
                />
                <small
                    className="text-danger form-text pt-2"
                    hidden={!newPasswordEmpty}
                >
                    This field cannot be empty.
                </small>
                <small
                    className="text-danger form-text pt-2"
                    hidden={!newPasswordLimit}
                >
                    Must have 8 or more characters.
                </small>
            </div>

            <div className="form-group pt-2">
                <label htmlFor="bio">Confirm Your New Password</label>
                <input
                    className="w-75 form-control"
                    id="password"
                    type="password"
                    placeholder="Account Password"
                    onChange={e => handleNewPasswordConfirmChange(e)}
                    value={newPasswordConfirmValue}
                />
                <small
                    className="text-danger form-text pt-2"
                    hidden={!newPasswordConfirmEmpty}
                >
                    This field cannot be empty.
                </small>
                <small
                    className="text-danger form-text pt-2"
                    hidden={!newPasswordConfirmLimit}
                >
                    Must have 8 or more characters.
                </small>
                <small
                    className="text-danger form-text pt-2"
                    hidden={!mismatchedPasswords}
                >
                    This does not match your new password.
                </small>
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
                    font-size: 0.8rem !important;
                }
                .form-control::-moz-placeholder {
                    font-size: 0.8rem !important;
                }
                .form-control:-ms-input-placeholder {
                    font-size: 0.8rem !important;
                }
            `}</style>
        </>
    );
};

export default Password;
