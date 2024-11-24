import { Input } from "@/ui/atoms";
import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import "./formFieldStyles.scss";


interface IFormFieldProps<T extends FieldValues> {
    name: Path<T>,
    type?: string,
    error?:FieldError,
    placeholder?:string,
    id?:string,
    label:string,
    control: Control<T>
}
export default function FormField<T extends FieldValues>({
    name,
    type,
    error,
    placeholder,
    id,
    label,
    control,
}:IFormFieldProps<T>):React.ReactNode{

    return (
        <div className="content-formfield">
            <label className="formfield-label" htmlFor={id || label.toLocaleLowerCase()}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                        id={id || label.toLocaleLowerCase()}
                        className="formfield-input"
                        error={error?.message}
                    />
                )}
            />
        </div>
    )
}