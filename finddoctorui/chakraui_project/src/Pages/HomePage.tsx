import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
const list = ["Dentist", "Cardiologist", "Dermatologist", "Family Physicians"];
const statements = [
  "We are here to hear and heal your health problems",
  "It is not only about the money",
  "More than just treating patients",
];
const HomePage = () => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  const [isSmallerThan880] = useMediaQuery("(max-width: 880px)");
  const [isSmallerThan460] = useMediaQuery("(max-width: 460px)");

  return (
    <>
      <Header />
      <Navbar />
      <Box bg="primary.51">
        <Box
          display="flex"
          flexDirection={isSmallerThan1200 ? "column" : "row"}
          maxW="1400px"
          margin="0 auto"
        >
          <Box p="40px 10px 20px 30px">
            <Box
              bg="primary.52"
              p="60px 20px 40px 0px"
              borderRadius="10px"
              maxW="100%"
            >
              <Box
                display="flex"
                flexDirection={isSmallerThan768 ? "column" : "row"}
                rowGap={isSmallerThan768 ? "20px" : "0px"}
                pl="20px"
                justifyContent="space-around"
              >
                <Box display="flex" alignItems="center" gap="10px">
                  <Image src="./assets/search.png" w="26px" h="26px" />
                  <Input
                    placeholder="Search by Doctors"
                    bg="primary.53"
                    _placeholder={{
                      fontSize: "17px",
                      color: "primary.58",
                      fontWeight: "bold",
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center" gap="10px">
                  <Image src="./assets/Location.png" w="26px" h="26px" />
                  <Input
                    placeholder="Search by Location"
                    bg="primary.53"
                    _placeholder={{
                      fontSize: "17px",
                      color: "primary.58",
                      fontWeight: "bold",
                    }}
                  />
                </Box>
                <Box bg="primary.54" borderRadius="10px">
                  <Image src="./assets/wsearch.png" w="37px" h="38px" />
                </Box>
              </Box>
              <Box p="30px 0px 15px 70px">
                <Text fontWeight="600">You may be looking for</Text>
                <Box
                  display="flex"
                  flexDirection={isSmallerThan768 ? "column" : "row"}
                  gap="50px"
                  mt="20px"
                  alignItems="center"
                >
                  {list.map((key, index) => (
                    <Text
                      bg="primary.53"
                      key={index}
                      w="150px"
                      textAlign="center"
                      borderRadius="10px"
                      fontFamily="Poppins"
                      fontWeight="600"
                    >
                      {key}
                    </Text>
                  ))}
                  <Button>More</Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box pos="relative">
            <Image src="./assets/ellipse.png" maxW="100%" w="100%" h="350px" />
            <Box
              pos="absolute"
              top="57%"
              transform="translate(-50%,-50%)"
              zIndex="1"
              left="50%"
            >
              <Image
                alignItems="center"
                src="./assets/first.png"
                h="300px"
                w="100%"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box p="50px 40px 30px 80px" maxW="1400px" m="0 auto">
          <Box
            display="flex"
            flexDirection={isSmallerThan880 ? "column" : "row"}
            justifyContent="space-between"
          >
            <Box maxW="360px">
              <Heading fontFamily="Poppins" fontWeight="600" fontSize="40">
                Find the right Doctor Right at your fingertips
              </Heading>
              <Box display="flex" gap="5px" pt="15px">
                <Image
                  src="./assets/psearch.png"
                  w="18px"
                  h="21px"
                  alignItems="center"
                  mt="10px"
                />
                <InputGroup bg="primary.60" borderRadius="10px">
                  <Input
                    placeholder="Search Nearest Hospital"
                    _placeholder={{
                      color: "primary.57",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  />
                  <InputRightAddon bg="primary.60">
                    <Image src="./assets/lpsearch.png" />
                  </InputRightAddon>
                </InputGroup>
              </Box>
              <Box maxW="310px" pt="15px">
                <UnorderedList>
                  {statements.map((key) => (
                    <ListItem opacity="41%">{key}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Box>
            <Box maxW="400px" pos="relative">
              <Box>
                <Image src="./assets/Rectangle 22.png" />
                <Box pos="absolute" top="0">
                  <Image src="./assets/Rectangle 23.png" />
                  <Box
                    pos="absolute"
                    w="50%"
                    top={isSmallerThan460 ? "49px" : "85px"}
                    left="20%"
                  >
                    <Image src="./assets/image 1.png" />
                  </Box>
                  <Text textAlign="center" fontWeight="600" fontSize="20px">
                    Top rated primary care physicians
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Heading textAlign="center" pt="55px">
          Search by Specialist
        </Heading>
        <Box mt="15px">
          <Box p="50px 25px 25px 80px" bg="primary.55">
            <SimpleGrid
              columns={[1, 2, 3, 4]}
              spacing="30px"
              maxW="1400px"
              m="0 auto"
            >
              <Box>
                <Image src="./assets/Rectangle 17.png" alt="specialist" />
                <Heading size="sm">Dr: Name Name</Heading>
                <Text>Doctor degree name</Text>
              </Box>
              <Box>
                <Image src="./assets/Rectangle 18.png" alt="specialist" />
                <Heading size="sm">Dr: Name Name</Heading>
                <Text>Doctor degree name</Text>
              </Box>
              <Box>
                <Image src="./assets/Rectangle 19.png" alt="specialist" />
                <Heading size="sm">Dr: Name Name</Heading>
                <Text>Doctor degree name</Text>
              </Box>
              <Box>
                <Image src="./assets/Rectangle 20.png" alt="specialist" />
                <Heading size="sm">Dr: Name Name</Heading>
                <Text>Doctor degree name</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
