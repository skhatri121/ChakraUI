import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="primary.56">
      <Box p="20px 30px 50px 80px" maxW="1400px" m="0 auto">
        <Text
          fontSize={{ base: "30px", md: "33px", lg: "35px" }}
          fontFamily="Poppins"
          fontWeight="600"
        >
          About us:
        </Text>
        <Box pl="10px">
          <Text as="b">email: youremail@gmail.com</Text>
          <br />
          <Text as="b">mobile: +91 98xxxxxx10</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
