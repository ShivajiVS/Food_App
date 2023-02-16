import * as Yup from 'yup';
const logInYupSchema=Yup.object().shape(
    {
        email:Yup.string().email("Invalid Email Address")
            .required("email is required")
            .matches(/[a-zA-Z0-9/-/.]*[@][ga][a-z]{3,4}[/.][comin]{2,3}$/, 'Invalid pattern'),
        password:Yup.string()
            .min(8, "the password must be minimum 8 letters")
            .required("password required"),
    }
);

const initialValues=
    {
        email:"",
        password:"" ,

    };

export default {logInYupSchema,initialValues };