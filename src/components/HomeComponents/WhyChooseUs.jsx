import axios from 'axios';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
function WhyChooseUs({ ...Props }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const allData = {
            id: null,
            head_text: {
                eng: data.headTextEng,
                aze: data.headTextAze,
                rus: data.headTextRus,
                arab: data.headTextArab
            }
        }
        try {
            await axios.post('https://858253a8-656d-4a88-b704-5f0fe268bd97-00-239z73hq99tyi.sisko.replit.dev/api/v1/why-choose-us/', allData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            reset()
            Props.Props.setWhyChooseUsModalIsOpen(false)
            // setIsLoading(false)
        } catch (error) {
            // setIsLoading(false)
            console.log('error', error.message)
        }
    }
    return (

        <Modal
            className={'modal'}
            isOpen={Props.Props.whyChooseUsModalIsOpen}
            onRequestClose={() => Props.Props.setWhyChooseUsModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Why choose us Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setWhyChooseUsModalIsOpen(false)}>x</button>
            <h2>Why Choose Us Head</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor="">Why Choose Us Head Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in English...(max 30 character)"
                        maxLength={30}
                        {...register("headTextEng", { required: "Header text is required" })}
                    />
                    {errors.headTextEng && <p className="error">{errors.headTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Azerbaijan...(max 30 character)"
                        maxLength={30}
                        {...register("headTextAze", { required: "Header text is required" })}
                    />
                    {errors.headTextAze && <p className="error">{errors.headTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Russian...(max 30 character)"
                        maxLength={30}
                        {...register("headTextRus", { required: "Header text is required" })}
                    />
                    {errors.headTextRus && <p className="error">{errors.headTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Arabic...(max 30 character)"
                        maxLength={30}
                        {...register("headTextArab", { required: "Header text is required" })}
                    />
                    {errors.headTextArab && <p className="error">{errors.headTextArab.message}</p>}
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default WhyChooseUs