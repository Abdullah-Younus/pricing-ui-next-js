import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Pricing() {
    return (
        <Box>
            <Flex>
                <Box bg="#F0EAFB" p="64px" textAlign="center">
                    <Text fontWeight="bold" fontSize={"24px"}>Premium PRO</Text>
                    <Heading fontSize="60px">$329</Heading>
                    <Text>billed just once</Text>
                    <Button w="200px" h="35px" mt="15px" borderRadius="5px" bg="#805AD5" color="#FFFFFF">Get Started</Button>
                </Box>

                <Box>
                    asjdfa
                </Box>
            </Flex >
        </Box >
    )
}
