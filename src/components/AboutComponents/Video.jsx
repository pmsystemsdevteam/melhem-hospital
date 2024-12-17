import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

function Video({ ...Props }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log('jasdlhsaf', data)
        reset()
        Props.Props.setVideoSectionModalIsOpen(false)
    }
    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.videoSectionModalIsOpen}
            onRequestClose={() => Props.Props.setVideoSectionModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Video Section Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setVideoSectionModalIsOpen(false)}>x</button>
            <h2>Video Section</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor="">Video Section Head Text </label>
                    <input
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in English...(max 150 character)"
                        {...register("VideoSectionTextEng", { required: "how text is required" })}
                    />
                    {errors.VideoSectionTextEng && <p className="error">{errors.VideoSectionTextEng.message}</p>}
                    <input
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Azerbaijan...(max 150 character)"
                        {...register("VideoSectionTextAze", { required: "how text is required" })}
                    />
                    {errors.VideoSectionTextAze && <p className="error">{errors.VideoSectionTextAze.message}</p>}
                    <input
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Russian...(max 150 character)"
                        {...register("VideoSectionTextRus", { required: "how text is required" })}
                    />
                    {errors.VideoSectionTextRus && <p className="error">{errors.VideoSectionTextRus.message}</p>}
                    <input
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Arabic...(max 150 character)"
                        {...register("VideoSectionTextArab", { required: "how text is required" })}
                    />
                    {errors.VideoSectionTextArab && <p className="error">{errors.VideoSectionTextArab.message}</p>}
                </div>
                <div className='card'>
                    <label htmlFor="">Video Section Description Text </label>
                    <textarea
                        maxLength={250}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in English...(max 250 character)"
                        {...register("VideoSectionDescriptionEng", { required: "how description is required" })}
                    />
                    {errors.VideoSectionDescriptionEng && <p className="error">{errors.VideoSectionDescriptionEng.message}</p>}
                    <textarea
                        maxLength={250}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Azerbaijan...(max 250 character)"
                        {...register("VideoSectionDescriptionAze", { required: "how description is required" })}
                    />
                    {errors.VideoSectionDescriptionAze && <p className="error">{errors.VideoSectionDescriptionAze.message}</p>}
                    <textarea
                        maxLength={250}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Russian...(max 250 character)"
                        {...register("VideoSectionDescriptionRus", { required: "how description is required" })}
                    />
                    {errors.VideoSectionDescriptionRus && <p className="error">{errors.VideoSectionDescriptionRus.message}</p>}
                    <textarea
                        maxLength={250}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Arabic...(max 250 character)"
                        {...register("VideoSectionDescriptionArab", { required: "how description is required" })}
                    />
                    {errors.VideoSectionDescriptionArab && <p className="error">{errors.VideoSectionDescriptionArab.message}</p>}
                    <hr />
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default Video