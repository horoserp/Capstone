import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Reservations from "./Reservations";

function Login() {

    const navigate = useNavigate();

    const loginValidate = Yup.object().shape({
        userName: Yup.string()
            .min(8, "Minimum 8 characters")
            .required("User Name is Required"),
        password: Yup.string()
            .min(10, "Minimum 10 characters")
            .required("Password is Required"),
    });

    const loginFormik = useFormik ({
        initialValues: {
            userName: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: loginValidate
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        window.scrollTo(0,0);
        navigate("/confirmation");
    }

    const handleLogin = (e) => {
        e.preventDefault();
        window.scrollTo(0,0);
        navigate("/confirmation");
    }

    return (
        <>
            <Reservations renderButton={true}>(Step 2 of 2)</Reservations>
            <div className="highlight-b">
                <form
                    onSubmit={handleSubmit}
                    className="grid"
                >
                    <h2 className="underline col-2">
                        Proceed as Guest
                    </h2>
                    <label htmlFor="first-name" className="col-1 gap">First Name*</label>
                    <label htmlFor="last-name" className="col-3 gap">Last Name*</label>
                    <input
                        type="text"
                        id="first-name"
                        placeholder="First Name"
                        className="col-1"
                        required
                    />
                    <input
                        type="text"
                        id="last-name"
                        placeholder="Last Name"
                        className="col-3"
                        required
                    />
                    <label htmlFor="phone" className="col-1 gap">Phone Number*</label>
                    <label htmlFor="email" className="col-3 gap">Email Address*</label>
                    <input
                        type="tel"
                        id="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890"
                        className="col-1"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder="user@example.com"
                        className="col-3"
                        required
                    />
                    <input type="submit" className="col-2" value="Reserve Your Table" />
                </form>
            </div>
            <h2 className="underline">
                -OR-
            </h2>
            <div className="highlight-b">
                <form
                    onSubmit={loginFormik.handleSubmit}
                >
                    <h2 className="underline col-2">
                        Login
                    </h2>
                    <label htmlFor="userName">User Name*</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        placeholder="User Name"
                        onChange={loginFormik.handleChange}
                        onBlur={loginFormik.handleBlur}
                        value={loginFormik.values.userName}
                    />
                    {loginFormik.touched.userName && loginFormik.errors.userName ? (
                        <div>{loginFormik.errors.userName}</div>
                        ) : null}
                    <label htmlFor="password">Password*</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={loginFormik.handleChange}
                        onBlur={loginFormik.handleBlur}
                        value={loginFormik.values.password}
                    />
                    {loginFormik.touched.password && loginFormik.errors.password ? (
                        <div>{loginFormik.errors.password}</div>
                        ) : null}
                    <input
                        type="submit"
                        id="submit-login"
                        value="Reserve Your Table"
                        />
                </form>
            </div>
        </>
    );
}

export default Login;