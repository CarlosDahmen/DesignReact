import React from "react"
import styled from "styled-components"
import MockupAnimation from "../animations/MockupAnimation"
import PurchaseButton from "../buttons/purchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/textStyles"

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <img src="/images/logos/logo.svg" alt="logo" />
          <Title>
            Design <br></br> Focused React App
          </Title>
          <Description>Welcome to your new Gatsby site.</Description>
          <PurchaseButton
            title="Start learning"
            subtitle="100+ hours of content"
          />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
`

const Description = styled(MediumText)``
