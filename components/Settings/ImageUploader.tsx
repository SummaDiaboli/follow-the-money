import React, { useState } from "react";

const ImageUploader = () => {
    const [file, setFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    const handleSubmit = e => {
        if (e.target.files && e.target.files[0]) {
            e.preventDefault();
            console.log("handle uploading---", file);
        }
    };

    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        if (file) {
            reader.readAsDataURL(file);
        }

        let imageUrl = e.target.result;
        reader.onloadend = () => {
            setFile(file);
            setImagePreviewUrl(reader.result)
        };
    };

    return (
        <>
            <div className="d-flex flex-row vertical-align w-100 pt-3">
                <div className="d-flex flex-column">
                    <div className="profileImg d-flex flex-column">
                        {imagePreviewUrl != null ? (
                            <img className="" src={imagePreviewUrl}></img>
                        ) : (
                            <img
                                className=""
                                src="../static/assets/img/upload-icon.jpg"
                            ></img>
                        )}
                    </div>
                </div>
                <input
                    type="file"
                    className="file font-segoe ml-3"
                    id="file"
                    value=""
                    onChange={e => handleImageChange(e)}
                />

                <div></div>
            </div>

            <style>{`
                .profileImg{
                    overflow: hidden;
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                }

                .profileImg img{
                    width: 100%;
                }

                .uploadButton{
                    background: #D10000!important;
                    border-radius: 5px;
                    height: 50px;
                }

                .file{

                }
           `}</style>
        </>
    );
};

export default ImageUploader;
