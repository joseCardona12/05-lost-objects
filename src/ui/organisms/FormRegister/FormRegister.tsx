"use client";
import { FormField } from "@/ui/molecules";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormButton, inputAlert } from "@/ui/atoms";
import Link from "next/link";
import "./formRegisterStyles.scss"
import { IAuthResponseError, IAuthResponseSuccess, IRegisterRequest } from "@/app/core/application/dtos/auth";
import { AuthService } from "@/infrastructure/services";
import { UtilApplication } from "@/app/core/application/utils";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";

const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required()
        .min(3, "Name must have at least 3 characters"),
    email: yup
        .string()
        .required()
        .email("Invalid email format"),
    password: yup
        .string()
        .required()
        .min(6, "Password must be at least 6 characters")
        .max(10, "Password must be 10 characters long"),
    birthDate: yup
        .string()
        .required()
        .min(3, "Name must have at least 3 characters"),
})

export default function FormRegister():React.ReactNode{
    const router = useRouter();
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<IRegisterRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(registerSchema),
    })

    const handleRegister = async({name,email, password, birthDate}:IRegisterRequest):Promise<void> =>{
        const role_user:number = 2
        const data:IAuthResponseSuccess | IAuthResponseError = await AuthService.register({name,email,password,birthDate,role_id: role_user.toString()});
        if(data.statusCode !== 200){
            inputAlert("Error to Regiser! Try again...", "error");
            return;
        }
        const userLogged = data as IAuthResponseSuccess;
        const token:string = userLogged.token;
        const getName = UtilApplication.separateName(email); 

        Cookie.set("TOKEN_REGISTERED_USER", token);
        inputAlert(`Wellcome ${getName}`,"success");
        router.push("/dashboard");
    }
    return (
        <div className="content-form">
            <form className="form" onSubmit={handleSubmit(handleRegister)}>
                <div className="form-title">
                    <h5 className="title font-size-2">Create Account</h5>
                    <p className="title-paragraph">Recovery your lost objects</p>
                </div>
                <FormField<IRegisterRequest>
                    name="name"
                    type="text"
                    error={errors.name}
                    placeholder="Name"
                    id="name"
                    label="name"
                    control={control}
                />
                <FormField<IRegisterRequest>
                    name="email"
                    type="email"
                    error={errors.email}
                    placeholder="Email"
                    id="email"
                    label="Email"
                    control={control}
                />
                <FormField<IRegisterRequest>
                    name="password"
                    type="password"
                    error={errors.password}
                    placeholder="password"
                    id="password"
                    label="Password"
                    control={control}
                />
                <FormField<IRegisterRequest>
                    name="birthDate"
                    type="date"
                    error={errors.birthDate}
                    placeholder="birthDate"
                    id="birthDate"
                    label="birthDate"
                    control={control}
                />

                <div className="form-buttons">
                    <FormButton className="button button-form">
                        Create account
                    </FormButton>
                </div>

                <div className="form-links">
                    <Link className="link" href={"/login"}>
                    <span className="dont-have">
                        Have an account?
                    </span>
                    Log In
                    </Link>
                </div>
            </form>
        </div>
    )
}