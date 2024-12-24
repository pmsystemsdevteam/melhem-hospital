import axios from 'axios';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
function OurBlog({ ...Props }) {
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
            await axios.post('https://858253a8-656d-4a88-b704-5f0fe268bd97-00-239z73hq99tyi.sisko.replit.dev/api/v1/our-blog/', allData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            reset()
            Props.Props.setOurBlogModalIsOpen(false)
            // setIsLoading(false)
        } catch (error) {
            // setIsLoading(false)
            console.log('error', error.message)
        }
    }
    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.ourBlogModalIsOpen}
            onRequestClose={() => Props.Props.setOurBlogModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Our blog Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setOurBlogModalIsOpen(false)}>x</button>
            <h2>Our Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor="">Our Blog Head Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type our blog text in English...(max 40 character)"
                        maxLength={40}
                        {...register("headerTextEng", { required: "Header text is required" })}
                    />
                    {errors.headerTextEng && <p className="error">{errors.headerTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type our blog text in Azerbaijan...(max 40 character)"
                        maxLength={40}
                        {...register("headerTextAze", { required: "Header text is required" })}
                    />
                    {errors.headerTextAze && <p className="error">{errors.headerTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type our blog text in Russian...(max 40 character)"
                        maxLength={40}
                        {...register("headerTextRus", { required: "Header text is required" })}
                    />
                    {errors.headerTextRus && <p className="error">{errors.headerTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type our blog text in Arabic...(max 40 character)"
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

export default OurBlog