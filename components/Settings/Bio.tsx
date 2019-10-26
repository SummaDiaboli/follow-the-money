import React, {useState} from "react";

const Bio = () => {
    const [bioValue, setBioValue] = useState('')

    const handleChange = (e) => {
        setBioValue(e.target.value);
    }

    return (
        <>
            <div className="form-group pt-3">
                
                <label htmlFor="bio">Edit your bio</label>
                <textarea
                    className="w-75 bio form-control"
                    id="bio"
                    placeholder="Account Bio"
                    rows={3}
                    onChange={e => handleChange(e)}
                    value={bioValue}
                ></textarea>
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

export default Bio;
