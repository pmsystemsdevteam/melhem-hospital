import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
Modal.setAppElement('#root');

function FourBox({ ...Props }) {
    const [cardFiles, setCardFiles] = useState([
        { id: 1, url: '', file: null },
        { id: 2, url: '', file: null },
        { id: 3, url: '', file: null },
        { id: 4, url: '', file: null }
    ]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        const fileOne = data.cardOnelogo[0];
        const fileTwo = data.cardTwologo[0];
        const fileThree = data.cardThreelogo[0];
        const fileFour = data.cardFourlogo[0];
        formData.append("cardOnelogo", fileOne);
        formData.append("cardTwologo", fileTwo);
        formData.append("cardThreelogo", fileThree);
        formData.append("cardFourlogo", fileFour);

        reset();
        setCardFiles([
            { id: 1, url: '', file: null },
            { id: 2, url: '', file: null },
            { id: 3, url: '', file: null },
            { id: 4, url: '', file: null }
        ])
        Props.Props.setFourBoxIsOpen(false);
    };

    const handlelogo = (e, index) => {
        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setCardFiles(cardFiles.map((obj, i) => i === index ? {
            id: obj.id,
            url: objectUrl,
            file: file
        } : obj));
    };




    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.fourBoxIsOpen}
            onRequestClose={() => Props.Props.setFourBoxIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Four box Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setFourBoxIsOpen(false)}>x</button>
            <h2>Four box text</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Add form fields for Four box */}
                <div className='card'>
                    <h3 htmlFor=""> First Card </h3>
                    <label htmlFor="">Card Head Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in English..."
                        {...register("cardOneHeadTextEng", { required: "Card head text is required" })}
                    />
                    {errors.cardOneHeadTextEng && <p className="error">{errors.cardOneHeadTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in Azerbaijan..."
                        {...register("cardOneHeadTextAze", { required: "Card head text is required" })}
                    />
                    {errors.cardOneHeadTextAze && <p className="error">{errors.cardOneHeadTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in Russian..."
                        {...register("cardOneHeadTextRus", { required: "Card head text is required" })}
                    />
                    {errors.cardOneHeadTextRus && <p className="error">{errors.cardOneHeadTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in Arabic..."
                        {...register("cardOneHeadTextArab", { required: "Card head text is required" })}
                    />
                    {errors.cardOneHeadTextArab && <p className="error">{errors.cardOneHeadTextArab.message}</p>}


                    <label htmlFor="">Card Description Text</label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in English..."
                        {...register("cardOneDescriptionTextEng", { required: "Card Description text is required" })}
                    />
                    {errors.cardOneDescriptionTextEng && <p className="error">{errors.cardOneDescriptionTextEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in Azerbaijan..."
                        {...register("cardOneDescriptionTextAze", { required: "Card Description text is required" })}
                    />
                    {errors.cardOneDescriptionTextAze && <p className="error">{errors.cardOneDescriptionTextAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in Russian..."
                        {...register("cardOneDescriptionTextRus", { required: "Card Description text is required" })}
                    />
                    {errors.cardOneDescriptionTextRus && <p className="error">{errors.cardOneDescriptionTextRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in Arabic..."
                        {...register("cardOneDescriptionTextArab", { required: "Card Description text is required" })}
                    />
                    {errors.cardOneDescriptionTextArab && <p className="error">{errors.cardOneDescriptionTextArab.message}</p>}
                    <div>
                        <div>

                            <input
                                type="file"
                                {...register("cardOnelogo", { required: "Card logo is required" })}
                                onChange={(e) => handlelogo(e, 0)}
                            />
                            {cardFiles[0]?.url &&
                                <img src={cardFiles[0]?.url} alt="Preview" />
                            }
                        </div>
                        {errors.cardOnelogo && <p className="error">{errors.cardOnelogo.message}</p>}
                    </div>
                    <hr />
                </div>
                <div className='card'>
                    <h3 htmlFor=""> Second Card </h3>
                    <label htmlFor="">Card Head Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in English..."
                        {...register("cardTwoHeadTextEng", { required: "Card head text is required" })}
                    />
                    {errors.cardTwoHeadTextEng && <p className="error">{errors.cardTwoHeadTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in Azerbaijan..."
                        {...register("cardTwoHeadTextAze", { required: "Card head text is required" })}
                    />
                    {errors.cardTwoHeadTextAze && <p className="error">{errors.cardTwoHeadTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in Russian..."
                        {...register("cardTwoHeadTextRus", { required: "Card head text is required" })}
                    />
                    {errors.cardTwoHeadTextRus && <p className="error">{errors.cardTwoHeadTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in Arabic..."
                        {...register("cardTwoHeadTextArab", { required: "Card head text is required" })}
                    />
                    {errors.cardTwoHeadTextArab && <p className="error">{errors.cardTwoHeadTextArab.message}</p>}

                    <label htmlFor="">Card Description Text</label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in English..."
                        {...register("cardTwoDescriptionTextEng", { required: "Card Description text is required" })}
                    />
                    {errors.cardTwoDescriptionTextEng && <p className="error">{errors.cardTwoDescriptionTextEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in Azerbaijan..."
                        {...register("cardTwoDescriptionTextAze", { required: "Card Description text is required" })}
                    />
                    {errors.cardTwoDescriptionTextAze && <p className="error">{errors.cardTwoDescriptionTextAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in Russian..."
                        {...register("cardTwoDescriptionTextRus", { required: "Card Description text is required" })}
                    />
                    {errors.cardTwoDescriptionTextRus && <p className="error">{errors.cardTwoDescriptionTextRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in Arabic..."
                        {...register("cardTwoDescriptionTextArab", { required: "Card Description text is required" })}
                    />
                    {errors.cardTwoDescriptionTextArab && <p className="error">{errors.cardTwoDescriptionTextArab.message}</p>}
                    <div>
                        <div>

                            <input
                                type="file"
                                {...register("cardTwologo", { required: "Card logo is required" })}
                                onChange={(e) => handlelogo(e, 1)}
                            />
                            {cardFiles[1]?.url &&
                                <img src={cardFiles[1]?.url} alt="Preview" />
                            }
                        </div>
                        {errors.cardTwologo && <p className="error">{errors.cardTwologo.message}</p>}
                    </div>
                    <hr />
                </div>
                <div className='card'>
                    <h3 htmlFor=""> Thirth Card </h3>
                    <label htmlFor="">Card Head Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in English..."
                        {...register("cardThreeHeadTextEng", { required: "Card head text is required" })}
                    />
                    {errors.cardThreeHeadTextEng && <p className="error">{errors.cardThreeHeadTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in Azerbaijan..."
                        {...register("cardThreeHeadTextAze", { required: "Card head text is required" })}
                    />
                    {errors.cardThreeHeadTextAze && <p className="error">{errors.cardThreeHeadTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in Russian..."
                        {...register("cardThreeHeadTextRus", { required: "Card head text is required" })}
                    />
                    {errors.cardThreeHeadTextRus && <p className="error">{errors.cardThreeHeadTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in Arabic..."
                        {...register("cardThreeHeadTextArab", { required: "Card head text is required" })}
                    />
                    {errors.cardThreeHeadTextArab && <p className="error">{errors.cardThreeHeadTextArab.message}</p>}

                    <label htmlFor="">Card Description Text</label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in English..."
                        {...register("cardThreeDescriptionTextEng", { required: "Card Description text is required" })}
                    />
                    {errors.cardThreeDescriptionTextEng && <p className="error">{errors.cardThreeDescriptionTextEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in Azerbaijan..."
                        {...register("cardThreeDescriptionTextAze", { required: "Card Description text is required" })}
                    />
                    {errors.cardThreeDescriptionTextAze && <p className="error">{errors.cardThreeDescriptionTextAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in Russian..."
                        {...register("cardThreeDescriptionTextRus", { required: "Card Description text is required" })}
                    />
                    {errors.cardThreeDescriptionTextRus && <p className="error">{errors.cardThreeDescriptionTextRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in Arabic..."
                        {...register("cardThreeDescriptionTextArab", { required: "Card Description text is required" })}
                    />
                    {errors.cardThreeDescriptionTextArab && <p className="error">{errors.cardThreeDescriptionTextArab.message}</p>}

                    <div>
                        <div>

                            <input
                                type="file"
                                {...register("cardThreelogo", { required: "Card logo is required" })}
                                onChange={(e) => handlelogo(e, 2)}
                            />
                            {cardFiles[2]?.url &&
                                <img src={cardFiles[2]?.url} alt="Preview" />
                            }
                        </div>
                        {errors.cardThreelogo && <p className="error">{errors.cardThreelogo.message}</p>}
                    </div>
                    <hr />
                </div>
                <div className='card'>
                    <h3 htmlFor=""> Fourth Card </h3>
                    <label htmlFor="">Card Head Text</label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in English..."
                        {...register("cardFourHeadTextEng", { required: "Card head text is required" })}
                    />
                    {errors.cardFourHeadTextEng && <p className="error">{errors.cardFourHeadTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in Azerbaijan..."
                        {...register("cardFourHeadTextAze", { required: "Card head text is required" })}
                    />
                    {errors.cardFourHeadTextAze && <p className="error">{errors.cardFourHeadTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in Russian..."
                        {...register("cardFourHeadTextRus", { required: "Card head text is required" })}
                    />
                    {errors.cardFourHeadTextRus && <p className="error">{errors.cardFourHeadTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Card head text in Arabic..."
                        {...register("cardFourHeadTextArab", { required: "Card head text is required" })}
                    />
                    {errors.cardFourHeadTextArab && <p className="error">{errors.cardFourHeadTextArab.message}</p>}

                    <label htmlFor="">Card Description Text</label>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in English..."
                        {...register("cardFourDescriptionTextEng", { required: "Card Description text is required" })}
                    />
                    {errors.cardFourDescriptionTextEng && <p className="error">{errors.cardFourDescriptionTextEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in Azerbaijan..."
                        {...register("cardFourDescriptionTextAze", { required: "Card Description text is required" })}
                    />
                    {errors.cardFourDescriptionTextAze && <p className="error">{errors.cardFourDescriptionTextAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in Russian..."
                        {...register("cardFourDescriptionTextRus", { required: "Card Description text is required" })}
                    />
                    {errors.cardFourDescriptionTextRus && <p className="error">{errors.cardFourDescriptionTextRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Card Description text in Arabic..."
                        {...register("cardFourDescriptionTextArab", { required: "Card Description text is required" })}
                    />
                    {errors.cardFourDescriptionTextArab && <p className="error">{errors.cardFourDescriptionTextArab.message}</p>}

                    <div>
                        <div>

                            <input
                                type="file"
                                {...register("cardFourlogo", { required: "Card logo is required" })}
                                onChange={(e) => handlelogo(e, 3)}
                            />
                            {cardFiles[3]?.url &&
                                <img src={cardFiles[3]?.url} alt="Preview" />
                            }
                        </div>
                        {errors.cardFourlogo && <p className="error">{errors.cardFourlogo.message}</p>}
                    </div>
                    <hr />
                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default FourBox