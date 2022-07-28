import styled from 'styled-components';
// Animation
const { motion } = require('framer-motion');

export const CardWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
`;

export const CardStyle = styled(motion.div)`
  width: 40%;
  background: #f1f1f1;
  overflow-y: scroll;
  position: relative;
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem;
  img {
    width: 8rem;
  }
`;

export const CardInfo = styled(motion.div)`
  width: 60%;
  div {
    display: flex;
    flex-direction: space-between;
  }
`;

export const EmptyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  transform: translate(-50%, 0);
  flex-direction: column;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  svg {
    font-size: 3rem;
    color: var(--secondary);
  }
`;

export const Checkout = styled(motion.div)`
  margin: 2rem;
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
  }
`;

export const Cards = styled(motion.div)``;