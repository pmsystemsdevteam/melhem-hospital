import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
function Header({ ...Props }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [headFiles, setheadFiles] = useState([
        { id: 1, file: null, url: "" },
        { id: 2, file: null, url: "" }
    ])
    const onSubmit = () => {
        console.log('form submitted')
        reset()
        Props.Props.setHeaderModalIsOpen(false)
    }

    const handlelogo = (e, index) => {
        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setheadFiles(headFiles.map((obj, i) => i === index ? {
            ...obj,
            id: obj.id,
            url: objectUrl,
            file: file
        } : obj));
    }
    return (

        <Modal
            className={'modal'}
            isOpen={Props.Props.headerModalIsOpen}
            onRequestClose={() => Props.Props.setHeaderModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="About Header Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setHeaderModalIsOpen(false)}>x</button>
            <h2>About Header</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <h3>Header Big Image</h3>
                    <div className='file'>
                        <input
                            type="file"
                            {...register(`bigImage`, { required: "Profile is required" })}
                            onChange={(e) => handlelogo(e, 0)}
                        />
                        {headFiles[0].url && <img src={headFiles[0].url} alt="" />}
                    </div>
                    <hr />
                    <h3>Header Small Image</h3>
                    <div className='file'>
                        <input
                            type="file"
                            {...register(`smalImage`, { required: "Profile is required" })}
                            onChange={(e) => handlelogo(e, 1)}
                        />
                        {headFiles[1].url && <img src={headFiles[1].url} alt="" />}
                    </div>
                    <hr />
                    <label htmlFor="">Head Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type About Head text in English...(max 50 character)"
                        maxLength={50}
                        {...register("headTextEng", { required: "About Head text is required" })}
                    />
                    {errors.headTextEng && <p className="error">{errors.headTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type About Head text in Azerbaijan...(max 50 character)"
                        maxLength={50}
                        {...register("headTextAze", { required: "About Head text is required" })}
                    />
                    {errors.headTextAze && <p className="error">{errors.headTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type About Head text in Russian...(max 50 character)"
                        maxLength={50}
                        {...register("headTextRus", { required: "About Head text is required" })}
                    />
                    {errors.headTextRus && <p className="error">{errors.headTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type About Head text in Arabic...(max 50 character)"
                        maxLength={50}
                        {...register("headTextArab", { required: "About Head text is required" })}
                    />
                    {errors.headTextArab && <p className="error">{errors.headTextArab.message}</p>}
                </div>


                <div className='card'>
                    <label htmlFor="">Our Goals Description</label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Our Goals Description in English..."
                        {...register("ourGoalsDescEng", { required: "Our goals description is required" })}
                    />
                    {errors.ourGoalsDescEng && <p className="error">{errors.ourGoalsDescEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Our Goals Description in Azerbaijan..."
                        {...register("ourGoalsDescAze", { required: "Our goals description is required" })}
                    />
                    {errors.ourGoalsDescAze && <p className="error">{errors.ourGoalsDescAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Our Goals Description in Russian..."
                        {...register("ourGoalsDescRus", { required: "Our goals description is required" })}
                    />
                    {errors.ourGoalsDescRus && <p className="error">{errors.ourGoalsDescRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Our Goals Description in Arabic..."
                        {...register("ourGoalsDescArab", { required: "Our goals description is required" })}
                    />
                    {errors.ourGoalsDescArab && <p className="error">{errors.ourGoalsDescArab.message}</p>}
                </div>

                <div className="card">
                    <label htmlFor="">Second Title</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type second title text in English...(max 120 character)"
                        maxLength={120}
                        {...register("secondTitleEng", { required: "About Head text is required" })}
                    />
                    {errors.secondTitleEng && <p className="error">{errors.secondTitleEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type second title text in Azerbaijan...(max 120 character)"
                        maxLength={120}
                        {...register("secondTitleAze", { required: "About Head text is required" })}
                    />
                    {errors.secondTitleAze && <p className="error">{errors.secondTitleAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type second title text in Russian...(max 120 character)"
                        maxLength={120}
                        {...register("secondTitleRus", { required: "About Head text is required" })}
                    />
                    {errors.secondTitleRus && <p className="error">{errors.secondTitleRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type second title text in Arabic...(max 120 character)"
                        maxLength={120}
                        {...register("secondTitleArab", { required: "About Head text is required" })}
                    />
                    {errors.secondTitleArab && <p className="error">{errors.secondTitleArab.message}</p>}

                </div>


                <div className='card'>
                    <label htmlFor="">Second Description</label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Second Description..."
                        {...register("secondDescEng", { required: "Second description is required" })}
                    />
                    {errors.secondDescEng && <p className="error">{errors.secondDescEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Second Description in Azerbaijan..."
                        {...register("secondDescAze", { required: "Second description is required" })}
                    />
                    {errors.secondDescAze && <p className="error">{errors.secondDescAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Second Description in Russian..."
                        {...register("secondDescRus", { required: "Second description is required" })}
                    />
                    {errors.secondDescRus && <p className="error">{errors.secondDescRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Second Description in Arabic..."
                        {...register("secondDescArab", { required: "Second description is required" })}
                    />
                    {errors.secondDescArab && <p className="error">{errors.secondDescArab.message}</p>}
                </div>


                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default Header