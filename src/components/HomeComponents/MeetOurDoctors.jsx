import axios from 'axios';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
function MeetOurDoctors({ ...Props }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        // setIsLoading(true)
        const allData = {
            id: null,
            head_text: {
                aze: data.MeetDoctorsTextEng,
                rus: data.MeetDoctorsTextAze,
                eng: data.MeetDoctorsTextRus,
                arab: data.MeetDoctorsTextArab
            },
            description_text: {
                aze: data.MeetOurDoctorsDescriptionEng,
                rus: data.MeetOurDoctorsDescriptionAze,
                eng: data.MeetOurDoctorsDescriptionRus,
                arab: data.MeetOurDoctorsDescriptionArab
            },
        }
        try {
            await axios.post('https://858253a8-656d-4a88-b704-5f0fe268bd97-00-239z73hq99tyi.sisko.replit.dev/api/v1/meet-our-doctors/', allData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            // setIsLoading(false)

            reset()
            Props.Props.setMeetDoctorsModalIsOpen(false)
        } catch (error) {
            // setIsLoading(false)
            console.log('error', error.message)
        }
    }
    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.meetDoctorsModalIsOpen}
            onRequestClose={() => Props.Props.setMeetDoctorsModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Meet Our Doctors Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setMeetDoctorsModalIsOpen(false)}>x</button>
            <h2>Meet Our Doctors</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor="">Meet Our Doctors Head Text </label>
                    <input
                        defaultValue={''}
                        maxLength={50}
                        type="text"
                        placeholder="Type head text in English...(max 50 character)"
                        {...register("MeetDoctorsTextEng", { required: "how text is required" })}
                    />
                    {errors.MeetDoctorsTextEng && <p className="error">{errors.MeetDoctorsTextEng.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Azerbaijan...(max 50 character)"
                        {...register("MeetDoctorsTextAze", { required: "how text is required" })}
                    />
                    {errors.MeetDoctorsTextAze && <p className="error">{errors.MeetDoctorsTextAze.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Russian...(max 50 character)"
                        {...register("MeetDoctorsTextRus", { required: "how text is required" })}
                    />
                    {errors.MeetDoctorsTextRus && <p className="error">{errors.MeetDoctorsTextRus.message}</p>}
                    <input
                        maxLength={50}
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Arabic...(max 50 character)"
                        {...register("MeetDoctorsTextArab", { required: "how text is required" })}
                    />
                    {errors.MeetDoctorsTextArab && <p className="error">{errors.MeetDoctorsTextArab.message}</p>}
                </div>
                <div className='card'>
                    <label htmlFor="">Meet Our Doctors Description Text </label>
                    <textarea
                        maxLength={120}
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in English...(max 120 character)"
                        {...register("MeetOurDoctorsDescriptionEng", { required: "how description is required" })}
                    />
                    {errors.MeetOurDoctorsDescriptionEng && <p className="error">{errors.MeetOurDoctorsDescriptionEng.message}</p>}
                    <textarea
                        maxLength={120}
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Azerbaijan...(max 120 character)"
                        {...register("MeetOurDoctorsDescriptionAze", { required: "how description is required" })}
                    />
                    {errors.MeetOurDoctorsDescriptionAze && <p className="error">{errors.MeetOurDoctorsDescriptionAze.message}</p>}
                    <textarea
                        maxLength={120}
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Russian...(max 120 character)"
                        {...register("MeetOurDoctorsDescriptionRus", { required: "how description is required" })}
                    />
                    {errors.MeetOurDoctorsDescriptionRus && <p className="error">{errors.MeetOurDoctorsDescriptionRus.message}</p>}
                    <textarea
                        maxLength={120}
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Arabic...(max 120 character)"
                        {...register("MeetOurDoctorsDescriptionArab", { required: "how description is required" })}
                    />
                    {errors.MeetOurDoctorsDescriptionArab && <p className="error">{errors.MeetOurDoctorsDescriptionArab.message}</p>}
                    <hr />
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default MeetOurDoctors