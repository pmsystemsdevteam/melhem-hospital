import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdDeleteOutline } from 'react-icons/md';
import Modal from 'react-modal';

function Faq({ ...Props }) {
    const [faq, setFaq] = useState([
        { id: 1, question: [{ eng: "", aze: "", rus: "", arab: '' }], answer: [{ eng: "", aze: "", rus: "", arab: '' }] },
        { id: 2, question: [{ eng: "", aze: "", rus: "", arab: '' }], answer: [{ eng: "", aze: "", rus: "", arab: '' }] },
        { id: 3, question: [{ eng: "", aze: "", rus: "", arab: '' }], answer: [{ eng: "", aze: "", rus: "", arab: '' }] },
        { id: 4, question: [{ eng: "", aze: "", rus: "", arab: '' }], answer: [{ eng: "", aze: "", rus: "", arab: '' }] },
        { id: 5, question: [{ eng: "", aze: "", rus: "", arab: '' }], answer: [{ eng: "", aze: "", rus: "", arab: '' }] },
        { id: 6, question: [{ eng: "", aze: "", rus: "", arab: '' }], answer: [{ eng: "", aze: "", rus: "", arab: '' }] },
    ]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('form submitted', data);
        reset();
        Props.Props.setFaqModalIsOpen(false);
    }

    const addOtherFaq = () => {
        const newFaq = { id: faq.length + 1, question: [{ eng: "", aze: "", rus: "", arab: '' }], answer: [{ eng: "", aze: "", rus: "", arab: '' }] }
        setFaq([...faq, newFaq])
    }

    const deleteCard = (id) => {
        setFaq(faq.filter(item => item.id !== id))
    }


    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.faqModalIsOpen}
            onRequestClose={() => Props.Props.setFaqModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Faq Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setFaqModalIsOpen(false)}>x</button>
            <h2>FAQ</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {faq.map((item, index) => (
                    <div className='card' key={item.id} style={{ borderRadius: "5px", marginBottom: "20px" }}>

                        {faq.length > 1 &&
                            < MdDeleteOutline onClick={() => deleteCard(item?.id)} className="delete-icon" />
                        }
                        <div>
                            <label htmlFor="">Question {index + 1}.</label>
                            <textarea
                                defaultValue={''}
                                type="text"
                                placeholder="Type question in English...(max 100 character)"
                                maxLength={100}
                                {...register(`faq[${index}].questionEng`, { required: "Question text is required" })}
                            />
                            {errors?.faq?.[index]?.questionEng && <p className="error">{errors.faq[index].questionEng.message}</p>}

                            <textarea
                                defaultValue={''}
                                type="text"
                                placeholder="Type question in Azerbaijan...(max 100 character)"
                                maxLength={100}
                                {...register(`faq[${index}].questionAze`, { required: "Question text is required" })}
                            />
                            {errors?.faq?.[index]?.questionAze && <p className="error">{errors.faq[index].questionAze.message}</p>}

                            <textarea
                                defaultValue={''}
                                type="text"
                                placeholder="Type question in Russian...(max 100 character)"
                                maxLength={100}
                                {...register(`faq[${index}].questionRus`, { required: "Question text is required" })}
                            />
                            {errors?.faq?.[index]?.questionRus && <p className="error">{errors.faq[index].questionRus.message}</p>}

                            <textarea
                                defaultValue={''}
                                type="text"
                                placeholder="Type question in Arabic...(max 100 character)"
                                maxLength={100}
                                {...register(`faq[${index}].questionArab`, { required: "Question text is required" })}
                            />
                            {errors?.faq?.[index]?.questionArab && <p className="error">{errors.faq[index].questionArab.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="">Answer</label>
                            <textarea
                                defaultValue={''}
                                type="text"
                                placeholder="Type answer in English...(max 100 character)"
                                maxLength={100}
                                {...register(`faq[${index}].answerEng`, { required: "Answer text is required" })}
                            />
                            {errors?.faq?.[index]?.answerEng && <p className="error">{errors.faq[index].answerEng.message}</p>}

                            <textarea
                                defaultValue={''}
                                type="text"
                                placeholder="Type answer in Azerbaijan...(max 100 character)"
                                maxLength={100}
                                {...register(`faq[${index}].answerAze`, { required: "Answer text is required" })}
                            />
                            {errors?.faq?.[index]?.answerAze && <p className="error">{errors.faq[index].answerAze.message}</p>}

                            <textarea
                                defaultValue={''}
                                type="text"
                                placeholder="Type answer in Russian...(max 100 character)"
                                maxLength={100}
                                {...register(`faq[${index}].answerRus`, { required: "Answer text is required" })}
                            />
                            {errors?.faq?.[index]?.answerRus && <p className="error">{errors.faq[index].answerRus.message}</p>}

                            <textarea
                                defaultValue={''}
                                type="text"
                                placeholder="Type answer in Arabic...(max 100 character)"
                                maxLength={100}
                                {...register(`faq[${index}].answerArab`, { required: "Answer text is required" })}
                            />
                            {errors?.faq?.[index]?.answerArab && <p className="error">{errors.faq[index].answerArab.message}</p>}
                        </div>
                    </div>
                ))}
                <button className='btn' type="submit">Submit</button>
            </form>
            <button className='btn' onClick={addOtherFaq}>Add Other FAQ</button>
        </Modal>
    )
}

export default Faq;
