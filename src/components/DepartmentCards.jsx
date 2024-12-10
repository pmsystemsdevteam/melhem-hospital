import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import { MdDeleteOutline } from "react-icons/md";
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

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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

    const deleteCard = (id) => {
        setDepartmentCardsData(departmentCardsData.filter(data => data.id !== id))
    }

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
                    <div className="card" key={item?.id}>
                        {departmentCardsData.length > 1 &&
                            < MdDeleteOutline onClick={() => deleteCard(item?.id)} className="delete-icon" />
                        }
                        <h3 htmlFor=""> {`${index + 1}'th`} Card</h3>
                        <label htmlFor="">Card Head Text</label>
                        <input
                            defaultValue={''}
                            type="text"
                            placeholder="Card head text in English..."
                            {...register(`card[${index}].HeadTextEng`, { required: "Card head text is required" })}
                        />
                        {errors[`card[${index}].HeadTextEng`] && <p className="error">{errors[`card[${index}].HeadTextEng`].message}</p>}

                        <input
                            defaultValue={''}
                            type="text"
                            placeholder="Card head text in Azerbaijan..."
                            {...register(`card[${index}].HeadTextAze`, { required: "Card head text is required" })}
                        />
                        {errors[`card[${index}].HeadTextAze`] && <p className="error">{errors[`card[${index}].HeadTextAze`].message}</p>}
                        <input
                            defaultValue={''}
                            type="text"
                            placeholder="Card head text in Russian..."
                            {...register(`card[${index}].HeadTextRus`, { required: "Card head text is required" })}
                        />
                        {errors[`card[${index}].HeadTextRus`] && <p className="error">{errors[`card[${index}].HeadTextRus`].message}</p>}
                        <input
                            defaultValue={''}
                            type="text"
                            placeholder="Card head text in Arabic..."
                            {...register(`card[${index}].HeadTextArab`, { required: "Card head text is required" })}
                        />
                        {errors[`card[${index}].HeadTextArab`] && <p className="error">{errors[`card[${index}].HeadTextArab`].message}</p>}


                        <label htmlFor="">Card Description Text</label>
                        <textarea
                            defaultValue={''}
                            type="text"
                            placeholder="Card Description text in English..."
                            {...register(`card[${index}].DescriptionTextEng`, { required: "Card Description text is required" })}

                        />
                        {errors[`card[${index}].DescriptionTextEng`] && <p className="error">{errors[`card[${index}].DescriptionTextEng`].message}</p>}
                        <textarea
                            defaultValue={''}
                            type="text"
                            placeholder="Card Description text in Azerbaijan..."
                            {...register(`card[${index}].DescriptionTextAze`, { required: "Card Description text is required" })}
                        />
                        {errors[`card[${index}].DescriptionTextAze`] && <p className="error">{errors[`card[${index}].DescriptionTextAze`].message}</p>}
                        <textarea
                            defaultValue={''}
                            type="text"
                            placeholder="Card Description text in Russian..."
                            {...register(`card[${index}].DescriptionTextRus`, { required: "Card Description text is required" })}
                        />
                        {errors[`card[${index}].DescriptionTextRus`] && <p className="error">{errors[`card[${index}].DescriptionTextRus`].message}</p>}
                        <textarea
                            defaultValue={''}
                            type="text"
                            placeholder="Card Description text in Arabic..."
                            {...register(`card[${index}].DescriptionTextArab`, { required: "Card Description text is required" })}
                        />
                        {errors[`card[${index}].DescriptionTextArab`] && <p className="error">{errors[`card[${index}].DescriptionTextArab`].message}</p>}
                        <div className="file">
                            <input
                                type="file"
                                {...register(`card[${index}].logo`, { required: "Card logo is required" })}
                                onChange={(e) => handlelogo(e, index)}
                            />
                            {item.url && <img src={item.url} alt="Preview" />}
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