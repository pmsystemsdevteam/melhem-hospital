import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
Modal.setAppElement('#root');


function DepartmentCards({ ...Props }) {
    const [departmentCardsData, setDepartmentCardsData] = useState([
        {
            id: 1,
            headText: [
                { eng: "" },
                { aze: "" },
                { rus: "" },
                { arab: "" },
            ],
            description: [
                { eng: "" },
                { aze: "" },
                { rus: "" },
                { arab: "" },
            ],
            url: "",
            file: null
        },
        {
            id: 2,
            headText: [
                { eng: "" },
                { aze: "" },
                { rus: "" },
                { arab: "" },
            ],
            description: [
                { eng: "" },
                { aze: "" },
                { rus: "" },
                { arab: "" },
            ],
            url: "",
            file: null
        },
        {
            id: 3,
            headText: [
                { eng: "" },
                { aze: "" },
                { rus: "" },
                { arab: "" },
            ],
            description: [
                { eng: "" },
                { aze: "" },
                { rus: "" },
                { arab: "" },
            ],
            url: "",
            file: null
        },
        {
            id: 4,
            headText: [
                { eng: "" },
                { aze: "" },
                { rus: "" },
                { arab: "" },
            ],
            description: [
                { eng: "" },
                { aze: "" },
                { rus: "" },
                { arab: "" },
            ],
            url: "",
            file: null
        },
    ])

    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
    const onSubmit = () => {
        reset()
        Props.Props.setDepartmentCardsIsOpen(false)
    }

    const handlelogo = (e, index) => {
        const file = e.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setDepartmentCardsData(departmentCardsData.map((obj, i) => i === index ? {
            ...obj,
            id: obj.id,
            url: objectUrl,
            file: file
        } : obj));
    };



    const addOtherCard = () => {
        const newCard = {
            id: departmentCardsData.length + 1,
            headText: [
                { eng: "" },
                { aze: "" },
                { rus: "" },
                { arab: "" },
            ],
            description: [
                { eng: "" },
                { aze: "" },
                { rus: "" },
                { arab: "" },
            ],
            url: "",
            file: null
        };

        setDepartmentCardsData([...departmentCardsData, newCard]);
    };

    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.departmentCardsIsOpen}
            onRequestClose={() => Props.Props.setDepartmentCardsIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Four box Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setDepartmentCardsIsOpen(false)}>x</button>
            <h2>Department cards text</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Add form fields for Four box */}
                {departmentCardsData.map((item, index) => (
                    <div key={item.id}>
                        <h3 htmlFor=""> {`${index + 1}'th`} Card</h3>
                        <label htmlFor="">Card Head Text</label>
                        <input
                            defaultValue={''}
                            type="text"
                            placeholder="Card head text in English..."
                            {...register(`card${index + 1}HeadTextEng`, { required: "Card head text is required" })}
                        />
                        {errors[`card${index + 1}HeadTextEng`] && <p className="error">{errors[`card${index + 1}HeadTextEng`].message}</p>}

                        <input
                            defaultValue={''}
                            type="text"
                            placeholder="Card head text in Azerbaijan..."
                            {...register(`card${index + 1}HeadTextAze`, { required: "Card head text is required" })}
                        />
                        {errors[`card${index + 1}HeadTextAze`] && <p className="error">{errors[`card${index + 1}HeadTextAze`].message}</p>}
                        <input
                            defaultValue={''}
                            type="text"
                            placeholder="Card head text in Russian..."
                            {...register(`card${index + 1}HeadTextRus`, { required: "Card head text is required" })}
                        />
                        {errors[`card${index + 1}HeadTextRus`] && <p className="error">{errors[`card${index + 1}HeadTextRus`].message}</p>}
                        <input
                            defaultValue={''}
                            type="text"
                            placeholder="Card head text in Arabic..."
                            {...register(`card${index + 1}HeadTextArab`, { required: "Card head text is required" })}
                        />
                        {errors[`card${index + 1}HeadTextArab`] && <p className="error">{errors[`card${index + 1}HeadTextArab`].message}</p>}


                        <label htmlFor="">Card Description Text</label>
                        <input
                            defaultValue={''}
                            type="text"
                            placeholder="Card Description text in English..."
                            {...register(`card${index + 1}DescriptionTextEng`, { required: "Card Description text is required" })}

                        />
                        {errors[`card${index + 1}DescriptionTextEng`] && <p className="error">{errors[`card${index + 1}DescriptionTextEng`].message}</p>}
                        <input
                            defaultValue={''}
                            type="text"
                            placeholder="Card Description text in Azerbaijan..."
                            {...register(`card${index + 1}DescriptionTextAze`, { required: "Card Description text is required" })}
                        />
                        {errors[`card${index + 1}DescriptionTextAze`] && <p className="error">{errors[`card${index + 1}DescriptionTextAze`].message}</p>}
                        <input
                            defaultValue={''}
                            type="text"
                            placeholder="Card Description text in Russian..."
                            {...register(`card${index + 1}DescriptionTextRus`, { required: "Card Description text is required" })}
                        />
                        {errors[`card${index + 1}DescriptionTextRus`] && <p className="error">{errors[`card${index + 1}DescriptionTextRus`].message}</p>}
                        <input
                            defaultValue={''}
                            type="text"
                            placeholder="Card Description text in Arabic..."
                            {...register(`card${index + 1}DescriptionTextArab`, { required: "Card Description text is required" })}
                        />
                        {errors[`card${index + 1}DescriptionTextArab`] && <p className="error">{errors[`card${index + 1}DescriptionTextArab`].message}</p>}
                        <div>
                            <div>

                                <input
                                    type="file"
                                    {...register(`card${index + 1}logo`, { required: "Card logo is required" })}
                                    onChange={(e) => handlelogo(e, index)}
                                />
                                {item.url && <img src={item.url} alt="Preview" />}

                            </div>
                            {/* {errors.cardOnelogo && <p className="error">{errors.cardOnelogo.message}</p>} */}
                        </div>
                        <hr />
                    </div>

                ))}
                <button className="btn" type="submit">Submit</button>
            </form>
            <button className="btn" onClick={addOtherCard}>Add Other Card</button>
        </Modal>
    )
}

export default DepartmentCards