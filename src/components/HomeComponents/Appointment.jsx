import axios from 'axios';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
function Appointment({ ...Props }) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const allData = {
            appointment_text: {
                eng: data.appTextEng,
                aze: data.appTextAze,
                rus: data.appTextRus,
                arab: data.appTextArab
            }
        }
        const formData = new FormData()
        formData.append('appointment_text', JSON.stringify(allData))
        try {
            await axios.post('https://858253a8-656d-4a88-b704-5f0fe268bd97-00-239z73hq99tyi.sisko.replit.dev/api/v1/appointment/', allData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            reset()
            Props.Props.setAppointmentModalIsOpen(false)
            // setIsLoading(false)
        } catch (error) {
            // setIsLoading(false)
            console.log('error', error.message)
        }
    }
    return (

        <Modal
            className={'modal'}
            isOpen={Props.Props.appointmentModalIsOpen}
            onRequestClose={() => Props.Props.setAppointmentModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Appointment Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setAppointmentModalIsOpen(false)}>x</button>
            <h2>Appointment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor="">Appointment Head Text</label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Appointment text in English...(max 120 character)"
                        maxLength={120}
                        {...register("appTextEng", { required: "Appointment text is required" })}
                    />
                    {errors.appTextEng && <p className="error">{errors.appTextEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Appointment text in Azerbaijan...(max 120 character)"
                        maxLength={120}
                        {...register("appTextAze", { required: "Appointment text is required" })}
                    />
                    {errors.appTextAze && <p className="error">{errors.appTextAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Appointment text in Russian...(max 120 character)"
                        maxLength={120}
                        {...register("appTextRus", { required: "Appointment text is required" })}
                    />
                    {errors.appTextRus && <p className="error">{errors.appTextRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type Appointment text in Arabic...(max 120 character)"
                        maxLength={120}
                        {...register("appTextArab", { required: "Appointment text is required" })}
                    />
                    {errors.appTextArab && <p className="error">{errors.appTextArab.message}</p>}
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default Appointment