import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

function TechHeader({ ...Props }) {
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
            contentLabel="Technology Header Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setHeaderModalIsOpen(false)}>x</button>
            <h2>Technology Header</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor="">Technology Header Head Text </label>
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in English...(max 50 character)"
                        {...register("TechHeaderTextEng", { required: "how text is required" })}
                    />
                    {errors.TechHeaderTextEng && <p className="error">{errors.TechHeaderTextEng.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Azerbaijan...(max 50 character)"
                        {...register("TechHeaderTextAze", { required: "how text is required" })}
                    />
                    {errors.TechHeaderTextAze && <p className="error">{errors.TechHeaderTextAze.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Russian...(max 50 character)"
                        {...register("TechHeaderTextRus", { required: "how text is required" })}
                    />
                    {errors.TechHeaderTextRus && <p className="error">{errors.TechHeaderTextRus.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Arabic...(max 50 character)"
                        {...register("TechHeaderTextArab", { required: "how text is required" })}
                    />
                    {errors.TechHeaderTextArab && <p className="error">{errors.TechHeaderTextArab.message}</p>}
                </div>
                <div className='card'>
                    <label htmlFor="">Technology Header Description Text </label>
                    <textarea
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in English...(max 150 character)"
                        {...register("TechHeaderDescriptionEng", { required: "how description is required" })}
                    />
                    {errors.TechHeaderDescriptionEng && <p className="error">{errors.TechHeaderDescriptionEng.message}</p>}
                    <textarea
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Azerbaijan...(max 150 character)"
                        {...register("TechHeaderDescriptionAze", { required: "how description is required" })}
                    />
                    {errors.TechHeaderDescriptionAze && <p className="error">{errors.TechHeaderDescriptionAze.message}</p>}
                    <textarea
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Russian...(max 150 character)"
                        {...register("TechHeaderDescriptionRus", { required: "how description is required" })}
                    />
                    {errors.TechHeaderDescriptionRus && <p className="error">{errors.TechHeaderDescriptionRus.message}</p>}
                    <textarea
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Arabic...(max 150 character)"
                        {...register("TechHeaderDescriptionArab", { required: "how description is required" })}
                    />
                    {errors.TechHeaderDescriptionArab && <p className="error">{errors.TechHeaderDescriptionArab.message}</p>}
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default TechHeader