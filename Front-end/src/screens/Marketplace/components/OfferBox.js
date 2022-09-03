import CountDownTimer from "components/CountDownTimer"

import {
  NavBtnLink,
  NavBtn,
  BgImage,
  OfferBgImage,
  OfferBoxContainer,
  OfferImage,
  OfferImageContainer,
  OfferTimerBox,
  OfferImage2,
  OfferImage3,
  OfferImage4,
  OfferImage5,
  OfferTimeTextHeading,
  OfferTimerDiscountBox,
  OfferPrice,
  OfferTimerInnerBox,
} from "../styles/OfferBoxStyling"

export const OfferBox = ({
  hoursMinSecs,
  img1,
  img2,
  img3,
  img4,
  img5,
  netImg,
  soccerBg,
}) => {
  return (
    <OfferBoxContainer>
      <OfferImageContainer>
        <BgImage src={soccerBg} alt="bg image" />
        <OfferImage src={img1} alt="offer card" />
        <OfferImage2 src={img2} alt="offer card" />
        <OfferImage3 src={img3} alt="offer card" />
        <OfferImage4 src={img4} alt="offer card" />
        <OfferImage5 src={img5} alt="offer card" />
      </OfferImageContainer>

      <OfferTimerBox>
        <OfferTimeTextHeading>
          golden team with enhanced stats!
        </OfferTimeTextHeading>

        <OfferTimerDiscountBox>
          <OfferPrice left="true">$180</OfferPrice>
          <OfferPrice center="true">$129</OfferPrice>
          <OfferPrice right="true">-29%</OfferPrice>
        </OfferTimerDiscountBox>

        <OfferTimerInnerBox>
          <CountDownTimer hoursMinSecs={hoursMinSecs} />
          <span>until the end of the promotion</span>
        </OfferTimerInnerBox>

        <NavBtn>
          <NavBtnLink to="/">buy</NavBtnLink>
        </NavBtn>

        <OfferBgImage src={netImg} alt="net" />
      </OfferTimerBox>
    </OfferBoxContainer>
  )
}
