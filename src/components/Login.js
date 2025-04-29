import React from 'react'
import "./Login.css"
import styled from 'styled-components';

const Container = styled.section`
    overflow: hidden;
    display: flex
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height:100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

function Login() {
  return (
    <div className='login'>
        <Container>
            <Content>Content</Content>
        </Container>
    </div>
  )
}

export default Login