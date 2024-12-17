
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
function HowWeWorkWay({ ...Props }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log('jasdlhsaf', data)
        reset()
        Props.Props.setHowWeWorkWayIsOpen(false)
    }
    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.howWeWorkWayIsOpen}
            onRequestClose={() => Props.Props.setHowWeWorkWayIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="How we work Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setHowWeWorkWayIsOpen(false)}>x</button>
            <h2>How We Work Way</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>
                    <label htmlFor="">How We Work Way Head Text(first) </label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in English..."
                        {...register("howOneHeadTextEng", { required: "how text is required" })}
                    />
                    {errors.howOneHeadTextEng && <p className="error">{errors.howOneHeadTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Azerbaijan..."
                        {...register("howOneHeadTextAze", { required: "how text is required" })}
                    />
                    {errors.howOneHeadTextAze && <p className="error">{errors.howOneHeadTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Russian..."
                        {...register("howOneHeadTextRus", { required: "how text is required" })}
                    />
                    {errors.howOneHeadTextRus && <p className="error">{errors.howOneHeadTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Arabic..."
                        {...register("howOneHeadTextArab", { required: "how text is required" })}
                    />
                    {errors.howOneHeadTextArab && <p className="error">{errors.howOneHeadTextArab.message}</p>}
                </div>
                <div className='card'>
                    <label htmlFor="">How We Work Way Description Text(first) </label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in English..."
                        {...register("howOneDescriptionEng", { required: "how description is required" })}
                    />
                    {errors.howOneDescriptionEng && <p className="error">{errors.howOneDescriptionEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Azerbaijan..."
                        {...register("howOneDescriptionAze", { required: "how description is required" })}
                    />
                    {errors.howOneDescriptionAze && <p className="error">{errors.howOneDescriptionAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Russian..."
                        {...register("howOneDescriptionRus", { required: "how description is required" })}
                    />
                    {errors.howOneDescriptionRus && <p className="error">{errors.howOneDescriptionRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Arabic..."
                        {...register("howOneDescriptionArab", { required: "how description is required" })}
                    />
                    {errors.howOneDescriptionArab && <p className="error">{errors.howOneDescriptionArab.message}</p>}
                    <hr />
                </div>

                <div className='card'>
                    <label htmlFor="">How We Work Way Head Text(second) </label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in English..."
                        {...register("howTwoHeadTextEng", { required: "how text is required" })}
                    />
                    {errors.howTwoHeadTextEng && <p className="error">{errors.howTwoHeadTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Azerbaijan..."
                        {...register("howTwoHeadTextAze", { required: "how text is required" })}
                    />
                    {errors.howTwoHeadTextAze && <p className="error">{errors.howTwoHeadTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Russian..."
                        {...register("howTwoHeadTextRus", { required: "how text is required" })}
                    />
                    {errors.howTwoHeadTextRus && <p className="error">{errors.howTwoHeadTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Arabic..."
                        {...register("howTwoHeadTextArab", { required: "how text is required" })}
                    />
                    {errors.howTwoHeadTextArab && <p className="error">{errors.howTwoHeadTextArab.message}</p>}
                </div>
                <div className='card'>
                    <label htmlFor="">How We Work Way Description Text(second) </label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in English..."
                        {...register("howTwoDescriptionEng", { required: "how description is required" })}
                    />
                    {errors.howTwoDescriptionEng && <p className="error">{errors.howTwoDescriptionEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Azerbaijan..."
                        {...register("howTwoDescriptionAze", { required: "how description is required" })}
                    />
                    {errors.howTwoDescriptionAze && <p className="error">{errors.howTwoDescriptionAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Russian..."
                        {...register("howTwoDescriptionRus", { required: "how description is required" })}
                    />
                    {errors.howTwoDescriptionRus && <p className="error">{errors.howTwoDescriptionRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Arabic..."
                        {...register("howTwoDescriptionArab", { required: "how description is required" })}
                    />
                    {errors.howTwoDescriptionArab && <p className="error">{errors.howTwoDescriptionArab.message}</p>}
                    <hr />
                </div>

                <div className='card'>
                    <label htmlFor="">How We Work Way Head Text(thirth) </label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in English..."
                        {...register("howThreeHeadTextEng", { required: "how text is required" })}
                    />
                    {errors.howThreeHeadTextEng && <p className="error">{errors.howThreeHeadTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Azerbaijan..."
                        {...register("howThreeHeadTextAze", { required: "how text is required" })}
                    />
                    {errors.howThreeHeadTextAze && <p className="error">{errors.howThreeHeadTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Russian..."
                        {...register("howThreeHeadTextRus", { required: "how text is required" })}
                    />
                    {errors.howThreeHeadTextRus && <p className="error">{errors.howThreeHeadTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Arabic..."
                        {...register("howThreeHeadTextArab", { required: "how text is required" })}
                    />
                    {errors.howThreeHeadTextArab && <p className="error">{errors.howThreeHeadTextArab.message}</p>}
                </div>
                <div className='card'>
                    <label htmlFor="">How We Work Way Description Text(thirth) </label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in English..."
                        {...register("howThreeDescriptionEng", { required: "how description is required" })}
                    />
                    {errors.howThreeDescriptionEng && <p className="error">{errors.howThreeDescriptionEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Azerbaijan..."
                        {...register("howThreeDescriptionAze", { required: "how description is required" })}
                    />
                    {errors.howThreeDescriptionAze && <p className="error">{errors.howThreeDescriptionAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Russian..."
                        {...register("howThreeDescriptionRus", { required: "how description is required" })}
                    />
                    {errors.howThreeDescriptionRus && <p className="error">{errors.howThreeDescriptionRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Arabic..."
                        {...register("howThreeDescriptionArab", { required: "how description is required" })}
                    />
                    {errors.howThreeDescriptionArab && <p className="error">{errors.howThreeDescriptionArab.message}</p>}
                    <hr />
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default HowWeWorkWay