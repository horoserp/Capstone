import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import monoLogo from '../Images/Logo Mono.png';
import Nav from '../Components/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <Box
                w="100%"
                bg="#495E57"
                color="#ffffff"
            >
                <HStack
                    py={8}
                    px="15%"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <img src={monoLogo} alt="Little Lemon white logo"/>
                    <Nav
                        first="row"
                        second="column"
                        px={16}
                        spacing={2}
                    />
                    <VStack>
                        <Text>123 Fake St.</Text>
                        <Text>Chicago, IL   60601</Text>
                        <Text>(312) 555-4382</Text>
                        <a href="mailto: contact@littlelemon.com" target="_blank" rel="noopener noreferrer">contact@littlelemon.com</a>
                    </VStack>
                    <VStack>
                        <FontAwesomeIcon icon={faFacebookF} />
                        <Text mb={4}>Facebook</Text>
                        <FontAwesomeIcon icon={faTwitter} />
                        <Text mb={4}>Twitter</Text>
                        <FontAwesomeIcon icon={faInstagram} />
                        <Text>Instagram</Text>
                    </VStack>
                </HStack>
            </Box>
        </footer>
    );
}

export default Footer;