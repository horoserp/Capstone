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
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <HStack
                                justifyContent="space-between"
                                alignItems="center"
                                py={4}
                            >
                                <FontAwesomeIcon icon={faFacebookF} />
                                <Text px={4}>Facebook</Text>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </HStack>
                        </a>
                        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <HStack
                                justifyContent="space-between"
                                alignItems="center"
                                py={4}
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                                <Text px={4}>Twitter</Text>
                                <FontAwesomeIcon icon={faTwitter} />
                            </HStack>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <HStack
                                justifyContent="space-between"
                                alignItems="center"
                                py={4}
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                                <Text px={4}>Instagram</Text>
                                <FontAwesomeIcon icon={faInstagram} />
                            </HStack>
                        </a>
                    </VStack>
                </HStack>
            </Box>
        </footer>
    );
}

export default Footer;