import { useNavigate } from "react-router";
import "./index.scss"
import { useForm } from 'react-hook-form';
import { useState } from "react";

function DepartmentDetail() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [file, setFile] = useState({ file: null, url: "" })
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log('data', data)
        reset()
        navigate('/admin/home')
    }
    const handleImage = (e) => {
        const file = e.target.files[0]
        const url = URL.createObjectURL(file)
        setFile({ file, url })
    }
    return (
        <section className="container">
            <div className="det-head">
                <h1>Department Card Details</h1>
            </div>
            <div>
                <h3>Detail Head Text</h3>
                <form className="forms" action="" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type in English...(max 50 character)"
                        maxLength={50} // Add maxLength
                        {...register("headerTextEng", { required: "Header text is required" })} />
                    {errors.headerTextEng && <p className="error">{errors.headerTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type in Azerbaijani...(max 50 character)"
                        maxLength={50} // Add maxLength
                        {...register("headerTextAze", { required: "Header text is required" })} />
                    {errors.headerTextAze && <p className="error">{errors.headerTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type in Russian...(max 50 character)"
                        maxLength={50} // Add maxLength
                        {...register("headerTextRus", { required: "Header text is required" })} />
                    {errors.headerTextRus && <p className="error">{errors.headerTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type in Arabic...(max 50 character)"
                        maxLength={50} // Add maxLength
                        {...register("headerTextArab", { required: "Header text is required" })} />
                    {errors.headerTextArab && <p className="error">{errors.headerTextArab.message}</p>}
                </form>

                <h3>Detail Description Text</h3>
                <form className="forms" action="" onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type in English..."
                        {...register("descriptionTextEng", { required: "Description text is required" })} />
                    {errors.descriptionTextEng && <p className="error">{errors.descriptionTextEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type in Azerbaijani..."
                        {...register("descriptionTextAze", { required: "Description text is required" })} />
                    {errors.descriptionTextAze && <p className="error">{errors.descriptionTextAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type in Russian..."
                        {...register("descriptionTextRus", { required: "Description text is required" })} />
                    {errors.descriptionTextRus && <p className="error">{errors.descriptionTextRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type in Arabic..."
                        {...register("descriptionTextArab", { required: "Description text is required" })} />
                    {errors.descriptionTextArab && <p className="error">{errors.descriptionTextArab.message}</p>}
                </form>
                <h3>Detail Header Image</h3>
                <div className="file">
                    <input onChange={(e) => handleImage(e)} type="file" />
                    {file.url &&
                        <img src={file?.url} alt="Preview" />
                    }
                </div>

                <h3>Detail Head Text</h3>
                <form className="forms" action="" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type in English...(max 50 character)"
                        maxLength={50} // Add maxLength
                        {...register("headerTextEng", { required: "Header text is required" })} />
                    {errors.headerTextEng && <p className="error">{errors.headerTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type in Azerbaijani...(max 50 character)"
                        maxLength={50} // Add maxLength
                        {...register("headerTextAze", { required: "Header text is required" })} />
                    {errors.headerTextAze && <p className="error">{errors.headerTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type in Russian...(max 50 character)"
                        maxLength={50} // Add maxLength
                        {...register("headerTextRus", { required: "Header text is required" })} />
                    {errors.headerTextRus && <p className="error">{errors.headerTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type in Arabic...(max 50 character)"
                        maxLength={50} // Add maxLength
                        {...register("headerTextArab", { required: "Header text is required" })} />
                    {errors.headerTextArab && <p className="error">{errors.headerTextArab.message}</p>}
                </form>

                <h3>Detail Description Text</h3>
                <form className="forms" action="" onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type in English..."
                        {...register("descriptionTextEng", { required: "Description text is required" })} />
                    {errors.descriptionTextEng && <p className="error">{errors.descriptionTextEng.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type in Azerbaijani..."
                        {...register("descriptionTextAze", { required: "Description text is required" })} />
                    {errors.descriptionTextAze && <p className="error">{errors.descriptionTextAze.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type in Russian..."
                        {...register("descriptionTextRus", { required: "Description text is required" })} />
                    {errors.descriptionTextRus && <p className="error">{errors.descriptionTextRus.message}</p>}
                    <textarea
                        defaultValue={''}
                        type="text"
                        placeholder="Type in Arabic..."
                        {...register("descriptionTextArab", { required: "Description text is required" })} />
                    {errors.descriptionTextArab && <p className="error">{errors.descriptionTextArab.message}</p>}
                </form>
                <h3>Detail Header Image</h3>
                <div className="file">
                    <input onChange={(e) => handleImage(e)} type="file" />
                    {file.url &&
                        <img src={file?.url} alt="Preview" />
                    }
                </div>

            </div>
        </section>
    )
}

export default DepartmentDetail