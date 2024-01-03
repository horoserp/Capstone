import Reservations from "./Reservations";

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logged in");
    }

    return (
        <>
            <Reservations>(Step 2 of 2)</Reservations>
            <form
                onSubmit={handleSubmit}
                style={{display: "grid", maxWidth: 200, gap: 20}}
            >
                <p className="underline">
                   Proceed as Guest
                </p>
                <label htmlFor="first-name">First Name*</label>
                <input
                    type="text"
                    id="first-name"
                    placeholder="First Name"
                />
                <label htmlFor="last-name">Last Name*</label>
                <input
                    type="text"
                    id="last-name"
                    placeholder="Last Name"
                />
                <label htmlFor="phone">Phone Number*</label>
                <input
                    type="tel"
                    id="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                />
                <label htmlFor="email">Email Address*</label>
                <input
                    type="email"
                    id="email"
                    placeholder="user@example.com"
                />
                <input type="submit" value="Reserve Your Table" />
            </form>
            <p>
                -OR-
            </p>
            <form
                onSubmit={handleLogin}
                style={{display: "grid", maxWidth: 200, gap: 20}}
            >
                <p className="underline">
                    Login
                </p>
                <label htmlFor="user-name">User Name*</label>
                <input
                    type="text"
                    id="user-name"
                    placeholder="User Name"
                />
                <label htmlFor="password">Password*</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                />
                <input type="submit" value="Reserve Your Table" />
            </form>
        </>
    );
}

export default Login;