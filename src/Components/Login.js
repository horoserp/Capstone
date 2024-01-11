import { useNavigate } from "react-router-dom";
import Reservations from "./Reservations";

function Login() {

    const navigate = useNavigate();

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
                    onSubmit={handleLogin}
                    className="grid"
                >
                    <h2 className="underline col-2">
                        Login
                    </h2>
                    <label htmlFor="user-name" className="col-1 gap">User Name*</label>
                    <label htmlFor="password" className="col-3 gap">Password*</label>
                    <input
                        type="text"
                        id="user-name"
                        placeholder="User Name"
                        className="col-1"
                        minLength={3}
                        maxLength={15}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="col-3"
                        minLength={5}
                        required
                    />
                    <input type="submit" className="col-2" value="Reserve Your Table" />
                </form>
            </div>
        </>
    );
}

export default Login;