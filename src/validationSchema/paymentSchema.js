import * as Yup from 'yup';
const paymentSchema = Yup.object().shape(
    {
        name: Yup.string()
            .required("required")
            .matches(/[a-zA-Z]*$/, 'Alphabets only'),
        cardNumber: Yup.string()
            .required("required")
            .min(16, "invalid"),
        empiryDate: Yup.string()
            .required("required"),
        cvv: Yup.number()
            .required("required")
            .min(3, "invalid"),
    }
);

const initialValues =
{
    name: "",
    cardNumber: "",
    empiryDate: "",
    cvv: "",

};

export { paymentSchema, initialValues };