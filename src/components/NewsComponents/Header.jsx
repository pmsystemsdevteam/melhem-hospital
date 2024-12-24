import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

function NewsHeader({ ...Props }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log('jasdlhsaf', data)
        reset()
        Props.Props.setHeaderModalIsOpen(false)
    }
    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.headerModalIsOpen}
            onRequestClose={() => Props.Props.setHeaderModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="News Header Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setHeaderModalIsOpen(false)}>x</button>
            <h2>News Header</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor="">News Header Head Text </label>
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in English...(max 50 character)"
                        {...register("NewsHeaderTextEng", { required: "how text is required" })}
                    />
                    {errors.NewsHeaderTextEng && <p className="error">{errors.NewsHeaderTextEng.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Azerbaijan...(max 50 character)"
                        {...register("NewsHeaderTextAze", { required: "how text is required" })}
                    />
                    {errors.NewsHeaderTextAze && <p className="error">{errors.NewsHeaderTextAze.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Russian...(max 50 character)"
                        {...register("NewsHeaderTextRus", { required: "how text is required" })}
                    />
                    {errors.NewsHeaderTextRus && <p className="error">{errors.NewsHeaderTextRus.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Arabic...(max 50 character)"
                        {...register("NewsHeaderTextArab", { required: "how text is required" })}
                    />
                    {errors.NewsHeaderTextArab && <p className="error">{errors.NewsHeaderTextArab.message}</p>}
                </div>
                <div className='card'>
                    <label htmlFor="">News Header Description Text </label>
                    <textarea
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in English...(max 150 character)"
                        {...register("NewsHeaderDescriptionEng", { required: "how description is required" })}
                    />
                    {errors.NewsHeaderDescriptionEng && <p className="error">{errors.NewsHeaderDescriptionEng.message}</p>}
                    <textarea
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Azerbaijan...(max 150 character)"
                        {...register("NewsHeaderDescriptionAze", { required: "how description is required" })}
                    />
                    {errors.NewsHeaderDescriptionAze && <p className="error">{errors.NewsHeaderDescriptionAze.message}</p>}
                    <textarea
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Russian...(max 150 character)"
                        {...register("NewsHeaderDescriptionRus", { required: "how description is required" })}
                    />
                    {errors.NewsHeaderDescriptionRus && <p className="error">{errors.NewsHeaderDescriptionRus.message}</p>}
                    <textarea
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Arabic...(max 150 character)"
                        {...register("NewsHeaderDescriptionArab", { required: "how description is required" })}
                    />
                    {errors.NewsHeaderDescriptionArab && <p className="error">{errors.NewsHeaderDescriptionArab.message}</p>}
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default NewsHeader