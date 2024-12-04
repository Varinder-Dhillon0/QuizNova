import RenderFormikError from "../../../components/renderFormikError";

export default function Input({ name, type, placeholder, formik }) {

    console.log(formik);

    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                className={` ${formik.touched[name] &&
                    formik.errors[name] &&
                    "!border-red-500 !border-[1px]"
                    } bg-[#2e2e2e] text-white p-3 border-[1px] border-transparent rounded w-full outline-none`}
                {...formik.getFieldProps(name)}
            />
            <RenderFormikError field={name} formik={formik} />
        </div>

    );
}
