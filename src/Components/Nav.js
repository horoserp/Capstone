import { HStack, Stack } from "@chakra-ui/react";

function Nav(props) {
    const noBullets = {
        listStyleType: 'none'
    }

    const noUnderline = {
        textDecoration: 'none'
    }

    return (
        <nav>
            <ul style={noBullets}>
                <Stack
                    direction={[props.first, props.second]}
                    px={props.px}
                    justifyContent={props.justify}
                    alignItems={props.alignItems}
                    spacing={props.spacing}
                >
                    <li><a href="" style={noUnderline}>Home</a></li>
                    <li><a href="" style={noUnderline}>About</a></li>
                    <li><a href="" style={noUnderline}>Menu</a></li>
                    <li><a href="" style={noUnderline}>Reservations</a></li>
                    <li><a href="" style={noUnderline}>Order Online</a></li>
                    <li><a href="" style={noUnderline}>Login</a></li>
                </Stack>
            </ul>
        </nav>
    );
}

export default Nav;