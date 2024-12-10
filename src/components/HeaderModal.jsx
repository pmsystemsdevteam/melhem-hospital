
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
Modal.setAppElement('#root');
function HeaderModal({ ...Props }) {
    const [fileURL, setfileURL] = useState(null);
    const [headerPhotoFile, setHeaderPhotoFile] = useState(null)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    // const text = {
    //     headText: [
    //         { aze: "asfljf" },
    //         { rus: "asfljf" },
    //         { eng: "asfljf" },
    //         { arab: "asfljf" },
    //     ],
    //     headDesc: [
    //         { aze: "asfljf" },
    //         { eng: "asfljf" },
    //         { rus: "asfljf" },
    //         { arab: "asfljf" },
    //     ]
    // }

    // text.headDesc.map(item=>item.aze)


    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("headerTextEng", data.headerTextEng);
        formData.append("headerTextAze", data.headerTextAze);
        formData.append("headerTextRus", data.headerTextRus);
        formData.append("headerTextArab", data.headerTextArab);
        formData.append("headerDescriptionEng", data.headerDescriptionEng);
        formData.append("headerDescriptionAze", data.headerDescriptionAze);
        formData.append("headerDescriptionRus", data.headerDescriptionRus);
        formData.append("headerDescriptionArab", data.headerDescriptionArab);
        formData.append("headerPhoto", headerPhotoFile);

        reset();
        Props.Props.setHeaderModalIsOpen(false);
    };


    const handlePhoto = (e) => {
        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setHeaderPhotoFile(file)
        setfileURL(objectUrl);
    };

    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.headerModalIsOpen}
            onRequestClose={() => Props.Props.setHeaderModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Header Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setHeaderModalIsOpen(false)}>x</button>
            <h2>About Melhem Hospital</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor=""> Header Text </label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in English...(max 50 character)"
                        maxLength={50} // Add maxLength
                        {...register("headerTextEng", { required: "Header text is required" })}
                    />
                    {errors.headerTextEng && <p className="error">{errors.headerTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Azerbaijan...(max 50 character)"
                        maxLength={50} // Add maxLength
                        {...register("headerTextAze", { required: "Header text is required" })}
                    />
                    {errors.headerTextAze && <p className="error">{errors.headerTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Russian...(max 50 character)"
                        maxLength={50} // Add maxLength
                        {...register("headerTextRus", { required: "Header text is required" })}
                    />
                    {errors.headerTextRus && <p className="error">{errors.headerTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Arabic...(max 50 character)"
                        maxLength={50} // Add maxLength
                        {...register("headerTextArab", { required: "Header text is required" })}
                    />
                    {errors.headerTextArab && <p className="error">{errors.headerTextArab.message}</p>}
                </div>
                <div className='card'>
                    <label htmlFor=""> Header Description </label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in English...(max 120 character)"
                        maxLength={120} // Add maxLength
                        {...register("headerDescriptionEng", { required: "Header description is required" })}
                    />
                    {errors.headerDescriptionEng && <p className="error">{errors.headerDescriptionEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Azerbaijan...(max 120 character)"
                        maxLength={120} // Add maxLength
                        {...register("headerDescriptionAze", { required: "Header description is required" })}
                    />
                    {errors.headerDescriptionAze && <p className="error">{errors.headerDescriptionAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Russian...(max 120 character)"
                        maxLength={120} // Add maxLength
                        {...register("headerDescriptionRus", { required: "Header description is required" })}
                    />
                    {errors.headerDescriptionRus && <p className="error">{errors.headerDescriptionRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Arabic...(max 120 character)"
                        maxLength={120} // Add maxLength
                        {...register("headerDescriptionArab", { required: "Header description is required" })}
                    />
                    {errors.headerDescriptionArab && <p className="error">{errors.headerDescriptionArab.message}</p>}
                </div>
                <div>
                    <input
                        type="file"
                        {...register("headerPhoto", { required: "Header photo is required" })}
                        onChange={(e) => handlePhoto(e)}
                    />
                    {errors.headerPhoto && <p className="error">{errors.headerPhoto.message}</p>}
                </div>
                {fileURL &&
                    <img src={fileURL} alt="Preview" />
                }
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>


    )
}

export default HeaderModal