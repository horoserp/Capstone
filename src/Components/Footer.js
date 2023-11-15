import { Box, HStack, VStack } from "@chakra-ui/react";
import monoLogo from '../Images/Logo Mono.png';
import Nav from '../Components/Nav';

function Footer() {
    return (
        <footer>
            <Box
                w="100%"
                bg="#495E57"
                color="#ffffff"
            >
                <HStack>
                    <img src={monoLogo} alt="Little Lemon white logo"/>
                    <Nav
                        first="row"
                        second="column"
                        px={16}
                        spacing={2}
                    />
                </HStack>
            </Box>
        </footer>
    );
}

export default Footer;