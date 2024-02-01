import {
  Box,
  Text,
  ButtonGroup,
  Button,
  useMediaQuery,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
const menus = ["Home", "Doctors", "FAQ", "About", "Contact"];
const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

  return (
    <Box bg="primary.51">
      <Box
        display="flex"
        justifyContent={isSmallerThan768 ? "space-between" : "end"}
        gap="40px"
        maxW="1300px"
        margin="0 auto"
        p="10px"
      >
        {isSmallerThan768 && (
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open menu"
            fontSize="24px"
            color="primary.58"
          />
        )}

        {isLargerThan768 &&
          menus.map((key, index) => (
            <Box key={index} alignItems="center">
              <Text fontFamily="Robotto" fontWeight="600" fontSize="20px">
                {key}
              </Text>
            </Box>
          ))}

        <ButtonGroup fontSize="18px">
          <Button bg="primary.57" color="primary.59">
            Login
          </Button>
          <Button bg="primary.58" color="primary.59">
            Sign up
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Navbar;
