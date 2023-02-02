
import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Header() {
    return (
        <Box textAlign='center' bg="#6B46C1" pt="90px" pb="250px" color="white">
            <Heading>Simple pricing for your business</Heading>
            <Text pt="10px">Plans that are carefully crafted to suit your busines</Text>
        </Box>
    )
}
