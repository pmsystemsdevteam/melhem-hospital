import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
function FaqHead({ ...Props }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = () => {
        console.log('form submitted')
        reset()
        Props.Props.setFaqHeadModalIsOpen(false)
    }
    return (

        <Modal
            className={'modal'}
            isOpen={Props.Props.faqHeadModalIsOpen}
            onRequestClose={() => Props.Props.setFaqHeadModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Faq head Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setFaqHeadModalIsOpen(false)}>x</button>
            <h2>Faq Head</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor="">Faq Head Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type Faq text in English...(max 40 character)"
                        maxLength={40}
                        {...register("headerTextEng", { required: "Header text is required" })}
                    />
                    {errors.headerTextEng && <p className="error">{errors.headerTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type Faq text in Azerbaijan...(max 40 character)"
                        maxLength={40}
                        {...register("headerTextAze", { required: "Header text is required" })}
                    />
                    {errors.headerTextAze && <p className="error">{errors.headerTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type Faq text in Russian...(max 40 character)"
                        maxLength={40}
                        {...register("headerTextRus", { required: "Header text is required" })}
                    />
                    {errors.headerTextRus && <p className="error">{errors.headerTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type Faq text in Arabic...(max 40 character)"
                        maxLength={40}
                        {...register("headerTextArab", { required: "Header text is required" })}
                    />
                    {errors.headerTextArab && <p className="error">{errors.headerTextArab.message}</p>}
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default FaqHead