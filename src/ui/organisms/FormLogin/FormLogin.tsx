"use client";
import { FormField } from "@/ui/molecules";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormButton, inputAlert } from "@/ui/atoms";
import Link from "next/link";
import "./formLoginStyles.scss"
import { IAuthResponseError, IAuthResponseSuccess, ILoginRequest } from "@/app/core/application/dtos/auth";
import { AuthService } from "@/infrastructure/services";
import { UtilApplication } from "@/app/core/application/utils";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";
import { useAuthLoggedState } from "@/app/core/application/global-state";

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required(),

    password: yup
        .string()
        .required()
        .max(10, "Password must be 10 characters long"),

})

export default function FormLogin():React.ReactNode{
    const router = useRouter();
    const {setAuth} = useAuthLoggedState((state)=>state);
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(loginSchema),
    })

    const handleLogin = async({email, password}:ILoginRequest):Promise<void> =>{
        try{
            const data:IAuthResponseSuccess | IAuthResponseError = await AuthService.login({email,password});
            if(data.statusCode !== 200){
                inputAlert("Error to login! Try again...", "error");
                return;
            }
            const userLogged = data as IAuthResponseSuccess;
            const token:string = userLogged.token;
            const getName = UtilApplication.separateName(email);
            Cookie.set("TOKEN_LOGGED_USER", token);
            inputAlert(`Wellcome ${getName}`,"success");

            setAuth(userLogged);
            router.push("/dashboard");

        }catch(error){
            console.error("Error during login:", error);
            inputAlert("Something went wrong during login!", "error");
        }
    }
    return (
        <div className="content-form">
            <form className="form" onSubmit={handleSubmit(handleLogin)}>
                <div className="form-title">
                    <h5 className="title font-size-2">Login</h5>
                    <p className="title-paragraph">Enter to Dashboard</p>
                </div>
                <FormField<ILoginRequest>
                    name="email"
                    type="email"
                    error={errors.email}
                    placeholder="Email"
                    id="email"
                    label="Email"
                    control={control}
                />
                <FormField<ILoginRequest>
                    name="password"
                    type="password"
                    error={errors.password}
                    placeholder="password"
                    id="password"
                    label="Password"
                    control={control}
                />

                <div className="form-buttons">
                    <FormButton className="button button-form">
                        Login
                    </FormButton>
                </div>

                <div className="form-links">
                    <Link className="link" href={"/register"}>
                    <span className="dont-have">
                        Don't Have an account?
                    </span>
                    Sign In
                    </Link>
                </div>
            </form>
        </div>
    )
}