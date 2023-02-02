import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react';

export default function Pricing() {
    return (
        <Box width="856px" mx="auto" mt="-200px" bg="white" borderRadius="16px" overflow="hidden" boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}>
            <Flex>
                <Box bg="#F0EAFB" p="64px" textAlign="center">
                    <Text fontWeight="bold" fontSize={"24px"}>Premium PRO</Text>
                    <Heading fontSize="60px">$329</Heading>
                    <Text>billed just once</Text>
                    <Button w="200px" h="35px" mt="15px" borderRadius="5px" bg="#805AD5" color="#FFFFFF">Get Started</Button>
                </Box>
                <Box pt="50px" pl="25px">
                    <Text mt="15px">Access these features when you get this pricing package for your business.</Text>
                    <HStack mb="15px" mt="10px">
                        <Image src="/icons/icon.png" alt="icon" width={12} height={12} />
                        <Text>International calling and messaging API</Text>
                    </HStack>
                    <HStack mb="15px">
                        <Image src="/icons/icon.png" alt="icon" width={12} height={12} />
                        <Text>Additional phone numbers</Text>
                    </HStack>
                    <HStack mb="15px">
                        <Image src="/icons/icon.png" alt="icon" width={12} height={12} />
                        <Text>Automated messages via Zapier</Text>
                    </HStack>
                    <HStack mb="15px">
                        <Image src="/icons/icon.png" alt="icon" width={12} height={12} />
                        <Text>24/7 support and consulting</Text>
                    </HStack>
                </Box>
            </Flex>
        </Box >
    )
}
