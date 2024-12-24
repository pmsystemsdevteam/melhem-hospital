import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

function MeetSpecialists({ ...Props }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log('jasdlhsaf', data)
        reset()
        Props.Props.setSpecialists(false)
    }
    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.specialists}
            onRequestClose={() => Props.Props.setSpecialists(false)}
            style={Props.Props.customStyles}
            contentLabel="Meet Our Specialists Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setSpecialists(false)}>x</button>
            <h2>Meet Our Specialists</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor="">Meet Our Specialists Head Text </label>
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in English...(max 50 character)"
                        {...register("meetSpecialistsTextEng", { required: "how text is required" })}
                    />
                    {errors.meetSpecialistsTextEng && <p className="error">{errors.meetSpecialistsTextEng.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Azerbaijan...(max 50 character)"
                        {...register("meetSpecialistsTextAze", { required: "how text is required" })}
                    />
                    {errors.meetSpecialistsTextAze && <p className="error">{errors.meetSpecialistsTextAze.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Russian...(max 50 character)"
                        {...register("meetSpecialistsTextRus", { required: "how text is required" })}
                    />
                    {errors.meetSpecialistsTextRus && <p className="error">{errors.meetSpecialistsTextRus.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type text in Arabic...(max 50 character)"
                        {...register("meetSpecialistsTextArab", { required: "how text is required" })}
                    />
                    {errors.meetSpecialistsTextArab && <p className="error">{errors.meetSpecialistsTextArab.message}</p>}
                </div>
                <div className='card'>
                    <label htmlFor="">Meet Our Specialists Description Text </label>
                    <textarea
                        maxLength={120}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in English...(max 120 character)"
                        {...register("meetSpecialistsDescriptionEng", { required: "how description is required" })}
                    />
                    {errors.meetSpecialistsDescriptionEng && <p className="error">{errors.meetSpecialistsDescriptionEng.message}</p>}
                    <textarea
                        maxLength={120}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Azerbaijan...(max 120 character)"
                        {...register("meetSpecialistsDescriptionAze", { required: "how description is required" })}
                    />
                    {errors.meetSpecialistsDescriptionAze && <p className="error">{errors.meetSpecialistsDescriptionAze.message}</p>}
                    <textarea
                        maxLength={120}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Russian...(max 120 character)"
                        {...register("meetSpecialistsDescriptionRus", { required: "how description is required" })}
                    />
                    {errors.meetSpecialistsDescriptionRus && <p className="error">{errors.meetSpecialistsDescriptionRus.message}</p>}
                    <textarea
                        maxLength={120}
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Arabic...(max 120 character)"
                        {...register("meetSpecialistsDescriptionArab", { required: "how description is required" })}
                    />
                    {errors.meetSpecialistsDescriptionArab && <p className="error">{errors.meetSpecialistsDescriptionArab.message}</p>}
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default MeetSpecialists