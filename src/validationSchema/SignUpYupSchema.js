import * as Yup from 'yup';
const signUpYupSchema=Yup.object().shape(
    {
        // fullName:Yup.string()
        //     .required("Name required")
        //     .matches(/[a-zA-Z]*$/, 'Alphabets only'),
        email:Yup.string().email("Invalid Email Address")
            .required("email is required")
            .matches(/[a-zA-Z0-9/-/.]*[@][ga][a-z]{3,4}[/.][comin]{2,3}$/, 'Invalid pattern'),
        password:Yup.string()
            .min(8, "the password must be minimum 8 letters")
            .required("password required"),
        confirmPassword:Yup.string().min(8, "the password must be minimum 8 letters")
            .required(" required")
            .oneOf([Yup.ref('password'), null], ' confirm Passwords should be Same as Password')
    }
);

const initialValues=
    {
        // fullName:"",
        email:"",
        password:"" ,
        confirmPassword:""
    };

export default {signUpYupSchema,initialValues };