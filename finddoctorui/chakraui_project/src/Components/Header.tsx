import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box p="10px 10px 10px 100px" maxW="1300px" m="0 auto">
      <Box bg="primary.50" w="fit-content" borderRadius="5px">
        <Heading
          fontSize={{ base: "35px", md: "45px", lg: "60px" }}
          fontWeight={600}
          fontFamily="Stoke"
        >
          Find Doctors Near by
        </Heading>
      </Box>
    </Box>
  );
};

export default Header;
