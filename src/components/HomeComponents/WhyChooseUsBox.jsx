import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
function WhyChooseUsBox({ ...Props }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [cardFiles, setcardFiles] = useState([
        { id: 1, file: null, url: "" },
        { id: 2, file: null, url: "" },
        { id: 3, file: null, url: "" }
    ])
    
    const [backfile, setbackfile] = useState({ file: null, url: "" })
    const onSubmit = () => {
        console.log('form submitted')
        reset()
        Props.Props.setWhyChooseUsBoxModalIsOpen(false)
    }

    const handlelogo = (e, index) => {
        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setcardFiles(cardFiles.map((obj, i) => i === index ? {
            ...obj,
            id: obj.id,
            url: objectUrl,
            file: file
        } : obj));
    }

    const handleBakcFile = (e) => {
        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setbackfile({ file, url: objectUrl })
    }

    return (

        <Modal
            className={'modal'}
            isOpen={Props.Props.whyChooseUsBoxModalIsOpen}
            onRequestClose={() => Props.Props.setWhyChooseUsBoxModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Why choose us Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setWhyChooseUsBoxModalIsOpen(false)}>x</button>
            <h2>Why Choose Us Cards</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='card'>

                    <h3>Right Image</h3>
                    <div className='file'>
                        <input
                            type="file"
                            {...register(`backFile`, { required: "Back file is required" })}
                            onChange={(e) => handleBakcFile(e)}
                        />
                        {backfile.url && <img src={backfile.url} alt="" />}
                    </div>
                    <hr />

                    <h3>Card One</h3>
                    <hr />
                    <label htmlFor="">Why Choose Us Card Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in English...(max 100 character)"
                        maxLength={100}
                        {...register("cardOneHeadTextEng", { required: "Header text is required" })}
                    />
                    {errors.cardOneHeadTextEng && <p className="error">{errors.cardOneHeadTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Azerbaijan...(max 100 character)"
                        maxLength={100}
                        {...register("cardOneHeadTextAze", { required: "Header text is required" })}
                    />
                    {errors.cardOneHeadTextAze && <p className="error">{errors.cardOneHeadTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Russian...(max 100 character)"
                        maxLength={100}
                        {...register("cardOneHeadTextRus", { required: "Header text is required" })}
                    />
                    {errors.cardOneHeadTextRus && <p className="error">{errors.cardOneHeadTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Arabic...(max 100 character)"
                        maxLength={100}
                        {...register("cardOneHeadTextArab", { required: "Header text is required" })}
                    />
                    {errors.cardOneHeadTextArab && <p className="error">{errors.cardOneHeadTextArab.message}</p>}


                    <label htmlFor="">Why Choose Us Description Text</label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in English...(max 100 character)"
                        maxLength={100}
                        {...register("cardOneHeadTextEng", { required: "Header text is required" })}
                    />
                    {errors.cardOneHeadTextEng && <p className="error">{errors.cardOneHeadTextEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Azerbaijan...(max 100 character)"
                        maxLength={100}
                        {...register("cardOneHeadTextAze", { required: "Header text is required" })}
                    />
                    {errors.cardOneHeadTextAze && <p className="error">{errors.cardOneHeadTextAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Russian...(max 100 character)"
                        maxLength={100}
                        {...register("cardOneHeadTextRus", { required: "Header text is required" })}
                    />
                    {errors.cardOneHeadTextRus && <p className="error">{errors.cardOneHeadTextRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Arabic...(max 100 character)"
                        maxLength={100}
                        {...register("cardOneHeadTextArab", { required: "Header text is required" })}
                    />
                    {errors.cardOneHeadTextArab && <p className="error">{errors.cardOneHeadTextArab.message}</p>}
                    <div className='file'>
                        <input
                            type="file"
                            {...register(`cardOneLogo`, { required: "Card logo is required" })}
                            onChange={(e) => handlelogo(e, 0)}
                        />
                        {cardFiles[0].url && <img src={cardFiles[0].url} alt="" />}

                    </div>





                    <h3>Card Two</h3>
                    <hr />
                    <label htmlFor="">Why Choose Us Card Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in English...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextEng", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextEng && <p className="error">{errors.cardThreeHeadTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Azerbaijan...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextAze", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextAze && <p className="error">{errors.cardThreeHeadTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Russian...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextRus", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextRus && <p className="error">{errors.cardThreeHeadTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Arabic...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextArab", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextArab && <p className="error">{errors.cardThreeHeadTextArab.message}</p>}

                    <label htmlFor="">Why Choose Us Description Text</label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in English...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextEng", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextEng && <p className="error">{errors.cardThreeHeadTextEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Azerbaijan...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextAze", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextAze && <p className="error">{errors.cardThreeHeadTextAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Russian...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextRus", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextRus && <p className="error">{errors.cardThreeHeadTextRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Arabic...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextArab", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextArab && <p className="error">{errors.cardThreeHeadTextArab.message}</p>}
                    <div className='file'>
                        <input
                            type="file"
                            {...register(`cardOneLogo`, { required: "Card logo is required" })}
                            onChange={(e) => handlelogo(e, 1)}
                        />
                        {cardFiles[1].url && <img src={cardFiles[1].url} alt="" />}

                    </div>




                    <h3>Card Three</h3>
                    <hr />
                    <label htmlFor="">Why Choose Us Card Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in English...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextEng", { required: "Header text is required" })}
                    />

                    {errors.cardThreeHeadTextEng && <p className="error">{errors.cardThreeHeadTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Azerbaijan...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextAze", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextAze && <p className="error">{errors.cardThreeHeadTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Russian...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextRus", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextRus && <p className="error">{errors.cardThreeHeadTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Arabic...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextArab", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextArab && <p className="error">{errors.cardThreeHeadTextArab.message}</p>}

                    <label htmlFor="">Why Choose Us Description Text</label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in English...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextEng", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextEng && <p className="error">{errors.cardThreeHeadTextEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Azerbaijan...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextAze", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextAze && <p className="error">{errors.cardThreeHeadTextAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Russian...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextRus", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextRus && <p className="error">{errors.cardThreeHeadTextRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type description in Arabic...(max 100 character)"
                        maxLength={100}
                        {...register("cardThreeHeadTextArab", { required: "Header text is required" })}
                    />
                    {errors.cardThreeHeadTextArab && <p className="error">{errors.cardThreeHeadTextArab.message}</p>}
                    <div className='file'>
                        <input
                            type="file"
                            {...register(`cardOneLogo`, { required: "Card logo is required" })}
                            onChange={(e) => handlelogo(e, 2)}
                        />
                        {cardFiles[2].url && <img src={cardFiles[2].url} alt="" />}

                    </div>
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default WhyChooseUsBox