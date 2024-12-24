import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

function ContactHeader({ ...Props }) {
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
            contentLabel="Contact Header Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setHeaderModalIsOpen(false)}>x</button>
            <h2>Contact Header</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor="">Contact Header Head Text </label>
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in English...(max 50 character)"
                        {...register("ContactHeaderTextEng", { required: "how text is required" })}
                    />
                    {errors.ContactHeaderTextEng && <p className="error">{errors.ContactHeaderTextEng.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Azerbaijan...(max 50 character)"
                        {...register("ContactHeaderTextAze", { required: "how text is required" })}
                    />
                    {errors.ContactHeaderTextAze && <p className="error">{errors.ContactHeaderTextAze.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Russian...(max 50 character)"
                        {...register("ContactHeaderTextRus", { required: "how text is required" })}
                    />
                    {errors.ContactHeaderTextRus && <p className="error">{errors.ContactHeaderTextRus.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Arabic...(max 50 character)"
                        {...register("ContactHeaderTextArab", { required: "how text is required" })}
                    />
                    {errors.ContactHeaderTextArab && <p className="error">{errors.ContactHeaderTextArab.message}</p>}
                </div>
                <div className='card'>
                    <label htmlFor="">Contact Header Description Text </label>
                    <textarea
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in English...(max 150 character)"
                        {...register("ContactHeaderDescriptionEng", { required: "how description is required" })}
                    />
                    {errors.ContactHeaderDescriptionEng && <p className="error">{errors.ContactHeaderDescriptionEng.message}</p>}
                    <textarea
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Azerbaijan...(max 150 character)"
                        {...register("ContactHeaderDescriptionAze", { required: "how description is required" })}
                    />
                    {errors.ContactHeaderDescriptionAze && <p className="error">{errors.ContactHeaderDescriptionAze.message}</p>}
                    <textarea
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Russian...(max 150 character)"
                        {...register("ContactHeaderDescriptionRus", { required: "how description is required" })}
                    />
                    {errors.ContactHeaderDescriptionRus && <p className="error">{errors.ContactHeaderDescriptionRus.message}</p>}
                    <textarea
                        maxLength={150}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Arabic...(max 150 character)"
                        {...register("ContactHeaderDescriptionArab", { required: "how description is required" })}
                    />
                    {errors.ContactHeaderDescriptionArab && <p className="error">{errors.ContactHeaderDescriptionArab.message}</p>}
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default ContactHeader