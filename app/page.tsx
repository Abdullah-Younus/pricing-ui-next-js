"use client";
// import Image from 'next/image'
// import styles from './page.module.css'
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
import Header from './Header';
import Pricing from './Pricing';
import Features from './Features';


export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      <Features />
    </ChakraProvider>
  )
}
