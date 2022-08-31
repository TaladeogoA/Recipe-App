import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import styled from "styled-components";
import { motion } from "framer-motion";


import React from 'react'

function Home() {
  return (
    <StyledDiv
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        <Veggie />
        <Popular />
    </StyledDiv>
  )
}

const StyledDiv = styled(motion.div)`
  margin-top: -2rem;
`

export default Home