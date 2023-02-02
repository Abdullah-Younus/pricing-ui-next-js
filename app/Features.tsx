import React from 'react';
import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function Features() {
    return (
        <Box width={"800px"} m="auto" mt="35px">
            <Flex>
                <HStack>
                    <Image src="/icons/image1.png" alt='icon' width={30} height={30} />
                    <Text>30 days money back Guarantee</Text>
                </HStack>
                <HStack>
                    <Image src="/icons/image2.png" alt='icon' width={30} height={30} />
                    <Text>No setup fees 100% hassle-free</Text>
                </HStack>
                <HStack>
                    <Image src="/icons/image3.png" alt='icon' width={30} height={30} />
                    <Text>No montly subscripition Pay once and for all</Text>
                </HStack>
            </Flex>
        </Box>
    )
}
