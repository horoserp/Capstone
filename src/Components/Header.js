import Nav from './Nav';
import logo from '../Images/Logo.svg';
import { Box, HStack } from "@chakra-ui/react";

function Header() {
    return (
        <header>
            {/* <Box
                w="45%"
                mx="auto"
                my="20px"
            >
                <HStack> */}
                <img src={logo} alt={"Little Lemon Logo"} />
                <Nav/>
                {/* <Nav
                    first="column"
                    second="row"
                    px={16}
                    justify="space-between"
                    alignItems="center"
                    spacing={16}
                /> */}
                {/* </HStack>
            </Box> */}
        </header>
    );
}

export default Header;