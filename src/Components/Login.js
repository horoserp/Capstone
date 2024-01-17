import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Reservations from "./Reservations";

function Login() {

    const navigate = useNavigate();
    const phoneRegExp = "[0-9]{3}-[0-9]{3}-[0-9]{4}";

    const loginValidate = Yup.object().shape({
        userName: Yup.string()
            .min(8, "Minimum 8 characters")
            .required("User Name is Required"),
        password: Yup.string()
            .min(10, "Minimum 10 characters")
            .required("Password is Required"),
    });

    const loginFormik = useFormik ({
        validateOnMount: true,
        initialValues: {
            userName: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values);
            window.scrollTo(0,0);
            navigate("/confirmation");
        },
        validationSchema: loginValidate
    });

    const guestValidate = Yup.object().shape({
        firstName: Yup.string()
            .required("First name is required"),
        lastName: Yup.string()
            .required("Last name is required"),
        phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("Phone number is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
    });

    const guestFormik = useFormik ({
        validateOnMount: true,
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values);
            window.scrollTo(0,0);
            navigate("/confirmation");
        },
        validationSchema: guestValidate
    })

    return (
        <>
            <Reservations renderButton={true}>(Step 2 of 2)</Reservations>
            <div className="highlight-b" style={{paddingTop: 20}}>
                <form
                    onSubmit={guestFormik.handleSubmit}
                >
                    <fieldset>
                        <legend className="center underline" style={{fontSize: "xx-large"}}>Proceed as Guest</legend>
                        <div className="container flex-dir">
                            <label
                                htmlFor="firstName"
                                style={{marginBottom: 0}}
                            >
                                First Name*
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                onChange={guestFormik.handleChange}
                                onBlur={guestFormik.handleBlur}
                                value={guestFormik.values.userName}
                                style={{marginBottom: 20}}
                                required
                                aria-required="true"
                                />
                            {guestFormik.touched.firstName && guestFormik.errors.firstName ? (
                                <div style={{marginTop: -20}}>{guestFormik.errors.firstName}</div>
                                ) : null}
                            <label
                                htmlFor="lastName"
                                style={{marginBottom: 0}}
                            >
                                Last Name*
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={guestFormik.handleChange}
                                onBlur={guestFormik.handleBlur}
                                value={guestFormik.values.userName}
                                style={{marginBottom: 20}}
                                required
                                aria-required="true"
                            />
                            {guestFormik.touched.lastName && guestFormik.errors.lastName ? (
                                <div style={{marginTop: -20}}>{guestFormik.errors.lastName}</div>
                                ) : null}
                            <label
                                htmlFor="phone"
                                style={{marginBottom: 0}}
                            >
                                Phone Number*
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="123-456-7890"
                                onChange={guestFormik.handleChange}
                                onBlur={guestFormik.handleBlur}
                                value={guestFormik.values.userName}
                                style={{marginBottom: 20}}
                                required
                                aria-required="true"
                            />
                            {guestFormik.touched.phone && guestFormik.errors.phone ? (
                                <div style={{marginTop: -20}}>{guestFormik.errors.phone}</div>
                                ) : null}
                            <label
                                htmlFor="email"
                                style={{marginBottom: 0}}
                            >
                                Email Address*
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="user@example.com"
                                onChange={guestFormik.handleChange}
                                onBlur={guestFormik.handleBlur}
                                value={guestFormik.values.userName}
                                style={{marginBottom: 20}}
                                required
                                aria-required="true"
                            />
                            {guestFormik.touched.email && guestFormik.errors.email ? (
                                <div style={{marginTop: -20}}>{guestFormik.errors.email}</div>
                                ) : null}
                            <input
                                type="submit"
                                value="Reserve Your Table"
                                style={{marginBottom: 40, marginTop: 20}}
                                aria-label="On Click"
                                disabled={!guestFormik.isValid}
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
            <h2 className="underline">
                -OR-
            </h2>
            <div className="highlight-b">
                <form
                    onSubmit={loginFormik.handleSubmit}
                >
                    <fieldset>
                        <legend className="center underline" style={{fontSize: "xx-large"}}>Login</legend>
                        <div className="container flex-dir">
                            <label
                                htmlFor="userName"
                                style={{marginBottom: 0}}
                            >
                                User Name*
                            </label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                placeholder="User Name"
                                onChange={loginFormik.handleChange}
                                onBlur={loginFormik.handleBlur}
                                value={loginFormik.values.userName}
                                style={{marginBottom: 20}}
                                required
                                aria-required="true"
                            />
                            {loginFormik.touched.userName && loginFormik.errors.userName ? (
                                <div style={{marginTop: -20}}>{loginFormik.errors.userName}</div>
                                ) : null}
                            <label
                                htmlFor="password"
                                style={{marginBottom: 0}}
                            >
                                Password*
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                onChange={loginFormik.handleChange}
                                onBlur={loginFormik.handleBlur}
                                value={loginFormik.values.password}
                                style={{marginBottom: 20}}
                                required
                                aria-required="true"
                            />
                            {loginFormik.touched.password && loginFormik.errors.password ? (
                                <div style={{marginTop: -20}}>{loginFormik.errors.password}</div>
                                ) : null}
                            <input
                                type="submit"
                                id="submit-login"
                                value="Reserve Your Table"
                                style={{marginBottom: 40, marginTop: 20}}
                                aria-label="On Click"
                                disabled={!loginFormik.isValid}
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default Login;