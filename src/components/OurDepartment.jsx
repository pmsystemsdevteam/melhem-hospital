
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
function OurDepartment({ ...Props }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = () => {
        reset();
        Props.Props.setOurDepartmentModalIsOpen(false);
    };


    return (
        <Modal
            className={'modal'}
            isOpen={Props.Props.ourDepartmentModalIsOpen}
            onRequestClose={() => Props.Props.setOurDepartmentModalIsOpen(false)}
            style={Props.Props.customStyles}
            contentLabel="Department Modal"
        >
            <button className="close-button" onClick={() => Props.Props.setOurDepartmentModalIsOpen(false)}>x</button>
            <h2>Our Department</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor=""> Our Department Head Text </label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in English..."
                        {...register("departmentHeadTextEng", { required: "Department text is required" })}
                    />
                    {errors.departmentHeadTextEng && <p className="error">{errors.departmentHeadTextEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Azerbaijan..."
                        {...register("departmentHeadTextAze", { required: "Department text is required" })}
                    />
                    {errors.departmentHeadTextAze && <p className="error">{errors.departmentHeadTextAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Russian..."
                        {...register("departmentHeadTextRus", { required: "Department text is required" })}
                    />
                    {errors.departmentHeadTextRus && <p className="error">{errors.departmentHeadTextRus.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head text in Arabic..."
                        {...register("departmentHeadTextArab", { required: "Department text is required" })}
                    />
                    {errors.departmentHeadTextArab && <p className="error">{errors.departmentHeadTextArab.message}</p>}
                </div>
                <div>
                    <label htmlFor=""> Our Department Description Text </label>
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in English..."
                        {...register("departmentDescriptionEng", { required: "Department description is required" })}
                    />
                    {errors.departmentDescriptionEng && <p className="error">{errors.departmentDescriptionEng.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Azerbaijan..."
                        {...register("departmentDescriptionAze", { required: "Department description is required" })}
                    />
                    {errors.departmentDescriptionAze && <p className="error">{errors.departmentDescriptionAze.message}</p>}
                    <input
                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Russian..."
                        {...register("departmentDescriptionRus", { required: "Department description is required" })}
                    />
                    {errors.departmentDescriptionRus && <p className="error">{errors.departmentDescriptionRus.message}</p>}
                    <input

                        defaultValue={''}
                        type="text"
                        placeholder="Type head description in Arabic..."
                        {...register("departmentDescriptionArab", { required: "Department description is required" })}
                    />
                    {errors.departmentDescriptionArab && <p className="error">{errors.departmentDescriptionArab.message}</p>}
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default OurDepartment