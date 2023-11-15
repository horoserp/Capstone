import Nav from './Nav';
import logo from '../Images/Logo.svg';
import { Box, HStack } from "@chakra-ui/react";

function Header() {
    return (
        <header>
            <Box
                w="45%"
                mx="auto"
                my="20px"
            >
                <HStack>
                    <img src={logo} alt={"Little Lemon Logo"} />
                    <Nav/>
                </HStack>
            </Box>
        </header>
    );
}

export default Header;