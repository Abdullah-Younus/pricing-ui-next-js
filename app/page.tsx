"use client";
// import Image from 'next/image'
// import styles from './page.module.css'
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
import Header from './Header';
export default function Home() {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  )
}
