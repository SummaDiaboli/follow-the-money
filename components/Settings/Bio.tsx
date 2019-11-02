import React, { useState, useEffect } from "react";

interface Params {
    parentCallback: Function;
}

const Bio: React.FC<Params> = ({ parentCallback }) => {
    const [bioValue, setBioValue] = useState("");
    const [initialLoad, setInitialLoad] = useState(true);

    const [bioEmpty, setBioEmpty] = useState(false);
    const [bioLimit, setBioLimit] = useState(false);

    const handleChange = e => {
        setInitialLoad(false);
        setBioValue(e.target.value);
    };

    const sendData = () => {
        parentCallback(bioValue);
    };

    useEffect(() => {
        sendData();

        if (!initialLoad) {
            /* if (bioValue === "") {
                setBioEmpty(true);
            } else {
                setBioEmpty(false);
            } */

            if (bioValue.length == 120) {
                setBioLimit(true);
            } else {
                setBioLimit(false);
            }
        }
    }, [bioValue]);

    return (
        <>
            <div className="form-group pt-2">
                <label htmlFor="bio">Edit your bio</label>
                <textarea
                    className="w-75 bio form-control"
                    id="bio"
                    placeholder="Account Bio"
                    rows={3}
                    onChange={e => handleChange(e)}
                    value={bioValue}
                    maxLength={120}
                ></textarea>
                <small
                    className="text-danger form-text pt-2"
                    hidden={!bioEmpty}
                >
                    This field cannot be empty.
                </small>
                <small
                    className="text-danger form-text pt-2"
                    hidden={!bioLimit}
                >
                    You have reached the character limit.
                </small>
            </div>

            <style jsx>{`
                .bio {
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

export default Bio;
