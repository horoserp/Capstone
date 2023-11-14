import { HStack } from "@chakra-ui/react";

function Nav() {
    const noBullets = {
        listStyleType: 'none'
    }

    const noUnderline = {
        textDecoration: 'none'
    }

    return (
        <nav>
            <ul style={noBullets}>
                <HStack spacing={32}>
                    <li><a href="" style={noUnderline}>Home</a></li>
                    <li><a href="" style={noUnderline}>About</a></li>
                    <li><a href="" style={noUnderline}>Menu</a></li>
                    <li><a href="" style={noUnderline}>Reservations</a></li>
                    <li><a href="" style={noUnderline}>Order Online</a></li>
                    <li><a href="" style={noUnderline}>Login</a></li>
                </HStack>
            </ul>
        </nav>
    );
}

export default Nav;