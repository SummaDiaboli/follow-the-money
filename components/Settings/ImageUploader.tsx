import React, { useState } from "react";
import fetch from 'isomorphic-unfetch'

const ImageUploader = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null)
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    /* const handleSubmit = e => {
        if (e.target.files && e.target.files[0]) {
            e.preventDefault();
            console.log("handle uploading...", file);
        }
        const formData = new FormData()
        console.log(file)
        console.log(fileName)
        formData.append("file", file)
        formData.append("fileName", fileName)
        fetch('api/upload', {
            method: "POST",
            body: formData
        })
    }; */

    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        if (file) {
            reader.readAsDataURL(file);
        }

        reader.onloadend = () => {
            setFile(file);
            setFileName(file.name)
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

                {/* <button onClick={handleSubmit}>
                    Submit File
                </button> */}

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
