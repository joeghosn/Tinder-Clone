import * as yup from "yup";


export const userVerification=yup.object().shape({
    email: yup.string().email("Please Enter a Valid Email").required("Email Is Required"),
});