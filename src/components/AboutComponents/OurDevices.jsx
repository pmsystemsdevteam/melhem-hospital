import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
function OurDevices({ ...Props }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [headFiles, setheadFiles] = useState({ file: null, url: "" },)
    const onSubmit = () => {
        console.log('form submitted')
        reset()
        Props.Props.setOurDevicesModalIsOpen(false)
    }

    const handlelogo = (e) => {
        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setheadFiles({ file, url: objectUrl })
    }
    return (

        <Modal
            className={'modal'}
            isOpen={Props.Props.ourDevicesModalIsOpen}
            onRequestClose={() => Props.Props.setOurDevicesModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="About OurDevices Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setOurDevicesModalIsOpen(false)}>x</button>
            <h2>About OurDevices</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <h3>Our Devices Image</h3>
                    <div className='file'>
                        <input
                            type="file"
                            {...register(`bigImage`, { required: "Profile is required" })}
                            onChange={(e) => handlelogo(e)}
                        />
                        {headFiles.url && <img src={headFiles.url} alt="" />}
                    </div>
                    <hr />
                    <label htmlFor="">Head Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type About description text in English...(max 50 character)"
                        maxLength={50}
                        {...register("headTextEng", { required: "About description text is required" })}
                    />
                    {errors.headTextEng && <p className="error">{errors.headTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type About description text in Azerbaijan...(max 50 character)"
                        maxLength={50}
                        {...register("headTextAze", { required: "About description text is required" })}
                    />
                    {errors.headTextAze && <p className="error">{errors.headTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type About description text in Russian...(max 50 character)"
                        maxLength={50}
                        {...register("headTextRus", { required: "About description text is required" })}
                    />
                    {errors.headTextRus && <p className="error">{errors.headTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type About description text in Arabic...(max 50 character)"
                        maxLength={50}
                        {...register("headTextArab", { required: "About description text is required" })}
                    />
                    {errors.headTextArab && <p className="error">{errors.headTextArab.message}</p>}
                </div>


                <div className='card'>
                    <label htmlFor="">Our Devices Description</label>
                    <textarea
                        defaultValue={''}
                        maxLength={150}
                        type="text"
                        placeholder="Type Our Devices Description in English...(max 150 character)"
                        {...register("ourDevicesDescEng", { required: "Our Devices description is required" })}
                    />
                    {errors.ourDevicesDescEng && <p className="error">{errors.ourDevicesDescEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        maxLength={150}
                        type="text"
                        placeholder="Type Our Devices Description in Azerbaijan...(max 150 character)"
                        {...register("ourDevicesDescAze", { required: "Our Devices description is required" })}
                    />
                    {errors.ourDevicesDescAze && <p className="error">{errors.ourDevicesDescAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        maxLength={150}
                        type="text"
                        placeholder="Type Our Devices Description in Russian...(max 150 character)"
                        {...register("ourDevicesDescRus", { required: "Our Devices description is required" })}
                    />
                    {errors.ourDevicesDescRus && <p className="error">{errors.ourDevicesDescRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        maxLength={150}
                        type="text"
                        placeholder="Type Our Devices Description in Arabic...(max 150 character)"
                        {...register("ourDevicesDescArab", { required: "Our Devices description is required" })}
                    />
                    {errors.ourGoalsDescArab && <p className="error">{errors.ourGoalsDescArab.message}</p>}
                </div>

                <div className="card">
                    <label htmlFor="">Technology Title</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type technology title text in English..."
                        
                        {...register("technologyTitleEng", { required: "About description text is required" })}
                    />
                    {errors.technologyTitleEng && <p className="error">{errors.technologyTitleEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type technology title text in Azerbaijan..."
                        
                        {...register("technologyTitleAze", { required: "About description text is required" })}
                    />
                    {errors.technologyTitleAze && <p className="error">{errors.technologyTitleAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type technology title text in Russian..."
                        
                        {...register("technologyTitleRus", { required: "About description text is required" })}
                    />
                    {errors.technologyTitleRus && <p className="error">{errors.technologyTitleRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type technology title text in Arabic..."
                        
                        {...register("technologyTitleArab", { required: "About description text is required" })}
                    />
                    {errors.technologyTitleArab && <p className="error">{errors.technologyTitleArab.message}</p>}

                </div>


                <div className='card'>
                    <label htmlFor="">Technology Description</label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type technology Description in English..."
                        {...register("technologyDescEng", { required: "technology description is required" })}
                    />
                    {errors.technologyDescEng && <p className="error">{errors.technologyDescEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type technology Description in Azerbaijan..."
                        {...register("technologyDescAze", { required: "technology description is required" })}
                    />
                    {errors.technologyDescAze && <p className="error">{errors.technologyDescAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type technology Description in Russian..."
                        {...register("technologyDescRus", { required: "technology description is required" })}
                    />
                    {errors.technologyDescRus && <p className="error">{errors.technologyDescRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type technology Description in Arabic..."
                        {...register("technologyDescArab", { required: "technology description is required" })}
                    />
                    {errors.technologyDescArab && <p className="error">{errors.technologyDescArab.message}</p>}
                </div>


                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default OurDevices