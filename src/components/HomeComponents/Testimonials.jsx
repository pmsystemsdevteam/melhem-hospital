import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
function Testimonials({ ...Props }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [profile, setprofile] = useState({ file: null, url: "" })
    const [backfile, setbackfile] = useState({ file: null, url: "" })

    const onSubmit = () => {
        console.log('form submitted')
        reset()
        Props.Props.setTestimonailsModalIsOpen(false)
    }
    const handlelogo = (e) => {
        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setprofile({ file, url: objectUrl })
    }

    const handleBakcFile = (e) => {
        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setbackfile({ file, url: objectUrl })
    }
    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.testimonailsModalIsOpen}
            onRequestClose={() => Props.Props.setTestimonailsModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Testimonials  Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setTestimonailsModalIsOpen(false)}>x</button>
            <h2>Testimonials  Text</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <h3>Profile Image</h3>
                    <div className='file'>
                        <input
                            type="file"
                            {...register(`profileFile`, { required: "Profile is required" })}
                            onChange={(e) => handlelogo(e)}
                        />
                        {profile.url && <img src={profile.url} alt="" />}
                    </div>
                    <hr />


                    <h3>Testimonials Back Image</h3>
                    <div className='file'>
                        <input
                            type="file"
                            {...register(`backFile`, { required: "Back file is required" })}
                            onChange={(e) => handleBakcFile(e)}
                        />
                        {backfile.url && <img src={backfile.url} alt="" />}
                    </div>
                    <hr />


                    <h3>Testimonals Name</h3>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type Testimonials text in English...(max 30 character)"
                        maxLength={30}
                        {...register(`testimonialsNameEng`, { required: "Name is required" })}
                    />
                    {errors.testimonialsNameEng && <p className="error">{errors.testimonialsNameEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type Testimonials text in Azerbaijan...(max 30 character)"
                        maxLength={30}
                        {...register(`testimonialsNameAze`, { required: "Name is required" })}
                    />
                    {errors.testimonialsNameAze && <p className="error">{errors.testimonialsNameAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type Testimonials text in Russian...(max 30 character)"
                        maxLength={30}
                        {...register(`testimonialsNameRus`, { required: "Name is required" })}
                    />
                    {errors.testimonialsNameRus && <p className="error">{errors.testimonialsNameRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type Testimonials text in Arabic...(max 30 character)"
                        maxLength={30}
                        {...register(`testimonialsNameArab`, { required: "Name is required" })}
                    />
                    {errors.testimonialsNameArab && <p className="error">{errors.testimonialsNameArab.message}</p>}

                    <h3>Testimonals Description</h3>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Testimonials text in English...(max 150 character)"
                        maxLength={150}
                        {...register("testDescEng", { required: "Description text is required" })}
                    />
                    {errors.testDescEng && <p className="error">{errors.testDescEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Testimonials text in Azerbaijan...(max 150 character)"
                        maxLength={150}
                        {...register("testDescAze", { required: "Description text is required" })}
                    />
                    {errors.testDescAze && <p className="error">{errors.testDescAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Testimonials text in Russian...(max 150 character)"
                        maxLength={150}
                        {...register("testDescRus", { required: "Description text is required" })}
                    />
                    {errors.testDescRus && <p className="error">{errors.testDescRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Testimonials text in Arabic...(max 150 character)"
                        maxLength={150}
                        {...register("testDescArab", { required: "Description text is required" })}
                    />
                    {errors.testDescArab && <p className="error">{errors.testDescArab.message}</p>}


                    <h3>Profile Country</h3>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type Testimonials country text in English...(max 30 character)"
                        maxLength={30}
                        {...register(`testimonialsCountryEng`, { required: "Country name is required" })}
                    />
                    {errors.testimonialsCountryEng && <p className="error">{errors.testimonialsCountryEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type Testimonials country text in Azerbaijan...(max 30 character)"
                        maxLength={30}
                        {...register(`testimonialsCountryAze`, { required: "Country name is required" })}
                    />
                    {errors.testimonialsCountryAze && <p className="error">{errors.testimonialsCountryAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type Testimonials country text in Russian...(max 30 character)"
                        maxLength={30}
                        {...register(`testimonialsCountryRus`, { required: "Country name is required" })}
                    />
                    {errors.testimonialsCountryRus && <p className="error">{errors.testimonialsCountryRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type Testimonials country text in Arabic...(max 30 character)"
                        maxLength={30}
                        {...register(`testimonialsCountryArab`, { required: "Country name is required" })}
                    />
                    {errors.testimonialsCountryArab && <p className="error">{errors.testimonialsCountryArab.message}</p>}
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default Testimonials