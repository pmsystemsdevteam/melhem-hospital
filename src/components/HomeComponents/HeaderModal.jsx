
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactLoading from 'react-loading';
import Modal from 'react-modal';
Modal.setAppElement('#root');
function HeaderModal({ ...Props }) {
    const [fileURL, setfileURL] = useState(null);
    const [headerPhotoFile, setHeaderPhotoFile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        setIsLoading(true);
        const formData = new FormData();
        const texts = {
            id: 1,
            header_text: {
                aze: data.headerTextAze,
                rus: data.headerTextRus,
                eng: data.headerTextEng,
                arab: data.headerTextArab
            },
            header_description: {
                aze: data.headerDescriptionAze,
                rus: data.headerDescriptionRus,
                eng: data.headerDescriptionEng,
                arab: data.headerDescriptionArab
            },
        };
        formData.append("data", JSON.stringify(texts)); // Stringify the object
        formData.append("header_photo", headerPhotoFile); // Append the file

        try {
            await axios.post(
                'https://858253a8-656d-4a88-b704-5f0fe268bd97-00-239z73hq99tyi.sisko.replit.dev/api/v1/header/',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data', // Ensure correct headers
                    },
                }
            );
            setIsLoading(false);
            reset(); // Reset form
            Props.Props.setHeaderModalIsOpen(false); // Close modal
            setfileURL(null); // Clear file URL
        } catch (error) {
            setIsLoading(false);
            console.error('error', error.message);
        }
    };

    const handlePhoto = (e) => {
        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setHeaderPhotoFile(file)
        setfileURL(objectUrl);
    };

    // const getData = async () => {
    //     const response = await axios.get('http://127.0.0.1:8000/api/v1/header')
    //     console.log('resp', response.data)
    // }
    // useEffect(() => {
    //     getData()
    // }, [])

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
                    <div className='file'>
                        <input
                            type="file"
                            {...register("header_photo", { required: "Header photo is required" })}
                            onChange={(e) => handlePhoto(e)}
                        />
                        {fileURL &&
                            <img src={fileURL} alt="Preview" />
                        }
                        {errors.header_photo && <p className="error">{errors.header_photo.message}</p>}
                    </div>
                </div>
                <button className='btn' type="submit">{isLoading ? <ReactLoading type='spin' color='#773693' height={'15px'} width={'15px'} /> : "Submit"}</button>
            </form>
        </Modal>


    )
}

export default HeaderModal