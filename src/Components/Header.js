import Nav from './Nav';
import logo from '../Images/Logo.svg';
import { HStack } from "@chakra-ui/react";

function Header() {
    return (
        <header>
            <HStack spacing={32}>
                <img src={logo} alt={"Little Lemon Logo"} />
                <Nav/>
            </HStack>
        </header>
    )
}

export default Header;