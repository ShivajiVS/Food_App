import * as Yup from 'yup';
const confirmReservationSchema = Yup.object().shape(
    {
        fullName: Yup.string()
            .required("name is required")
            .min(4, "the name is tooo short."),
        email: Yup.string().email("Invalid Email Address")
            .required("email is required")
            .matches(/[a-zA-Z0-9/-/.]*[@][ga][a-z]{3,4}[/.][comin]{2,3}$/, 'Invalid pattern'),
        phoneNumber: Yup.string()
            .required("required")
            .max(10, "invalid")
            .matches(/[6789]{1}[0-9]{9}$/, 'Invalid Phone number'),
        tableReservationNumber: Yup.string(),
    }
);

const initialValues =
{
    fullName: "",
    email: "",
    phoneNumber: "",
    tableReservationNumber: "",
};

export { confirmReservationSchema, initialValues };