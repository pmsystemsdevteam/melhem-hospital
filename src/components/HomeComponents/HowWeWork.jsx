
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';


function HowWeWork({ ...Props }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const allData = {
            id: null,
            header_text: {
                eng: data.headerTextEng,
                aze: data.headerTextAze,
                rus: data.headerTextRus,
                arab: data.headerTextArab
            }
        }
        try {
            await axios.post('https://858253a8-656d-4a88-b704-5f0fe268bd97-00-239z73hq99tyi.sisko.replit.dev/api/v1/how-we-work/', allData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            reset()
            Props.Props.setHowWorkModalIsOpen(false)
            // setIsLoading(false)
        } catch (error) {
            // setIsLoading(false)
            console.log('error', error.message)
        }
    }
    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.howWorkModalIsOpen}
            onRequestClose={() => Props.Props.setHowWorkModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Header Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setHowWorkModalIsOpen(false)}>x</button>
            <h2>How We Work Text</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor="">Head Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in English..."
                        {...register("headerTextEng", { required: "Header text is required" })}
                    />
                    {errors.headerTextEng && <p className="error">{errors.headerTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Azerbaijan..."
                        {...register("headerTextAze", { required: "Header text is required" })}
                    />
                    {errors.headerTextAze && <p className="error">{errors.headerTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Russian..."
                        {...register("headerTextRus", { required: "Header text is required" })}
                    />
                    {errors.headerTextRus && <p className="error">{errors.headerTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Arabic..."
                        {...register("headerTextArab", { required: "Header text is required" })}
                    />
                    {errors.headerTextArab && <p className="error">{errors.headerTextArab.message}</p>}
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default HowWeWork