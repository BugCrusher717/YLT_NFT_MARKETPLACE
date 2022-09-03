import React, { useState, useRef } from "react"
import axios from "axios"

import { toast, ToastContainer } from "react-toastify"

import andrade from "../../images/marketplace/offerBox/andrade.webp"
import andrade2 from "../../images/marketplace/offerBox/andrade2.webp"
import makenzie from "../../images/marketplace/offerBox/makenzie.webp"
import madisen from "../../images/marketplace/offerBox/madisen.webp"
import madisen2 from "../../images/marketplace/offerBox/madisen2.webp"
import soccerBg from "../../images/marketplace/soccerBg.svg"
import netImg from "../../images/marketplace/rectangles.png"

import {
  InfoContainer,
  LeftMenuHeader,
  RightMenuWidth,
  DesktopRightSide,
  InnerHeaderContainer,
  BackButton,
  Heading,
  MainInnerContainer,
  FiltersContainer,
  CardContainer,
} from "./styles/InfoElements"
import "./st.css"
import {
  Boosters,
  OfferBox,
  SearchInput,
  Sports,
  SubscribeBox,
} from "./components"
import { nftCards, nftCards2, sports } from "./dummy-data"
import { CarouselSlider } from "./components/Carousel"
import { SlidersContainer } from "./styles/SliderStyling"
import BoosterCard from "./components/BoosterCard"
import BoosterSlider from "./components/BoosterSlider"
import Filters from "./components/Filters"
import OfferCards from "./components/OfferCards"
import Buttons from "./components/Buttons"

/** description of marketplace */
const Marketplace = () => {
  const [userInput, setUserInput] = useState("")
  const [isOpen, setIsOpen] = useState(true)

  const hoursMinSecs = { hours: 23, minutes: 1, seconds: 40 }
  const [newsletterEmail, setNewsletterEmail] = useState("")

  const subscribeHandler = () => {
    axios
      .put("/api/add-contact", {
        email: newsletterEmail,
      })
      .then((res) => {
        toast.success("🦄 We send you email! Check your email address", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setNewsletterEmail("")
      })
      .catch((e) =>
        toast.error("🦄 Something wrong try again later!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }),
      )
  }

  return (
    <>
      <InfoContainer>
        <InnerHeaderContainer>
          <BackButton>Previous</BackButton>
          <Heading>Marketplace</Heading>
        </InnerHeaderContainer>

        <BoosterSlider />

        <OfferBox
          hoursMinSecs={hoursMinSecs}
          img1={andrade}
          img2={makenzie}
          img3={madisen}
          img4={madisen2}
          img5={andrade2}
          netImg={netImg}
          soccerBg={soccerBg}
        />

        <MainInnerContainer>
          <FiltersContainer>
            <Filters />
          </FiltersContainer>
          <CardContainer>
            <OfferCards />
          </CardContainer>
          <Buttons />
        </MainInnerContainer>

        {/* <BoosterCardContainer>

        </BoosterCardContainer> */}

        {/* <LeftMenuHeader>
          <RightMenuWidth>
            <SearchInput userInput={userInput} setUserInput={setUserInput} />
            <Sports sports={sports} isOpen={isOpen} setIsOpen={setIsOpen} />

            <DesktopRightSide>
              <Boosters
                title1="Booster Pack"
                title2="NFT CARDS"
                title3="additionally"
              />
            </DesktopRightSide>

            <SlidersContainer>
              <CarouselSlider nftCards={nftCards} heading="best offers!" />
              <CarouselSlider
                nftCards={nftCards2}
                heading="auction"
                second="true"
              />
            </SlidersContainer>

            <OfferBox hoursMinSecs={hoursMinSecs} />
          </RightMenuWidth>
        </LeftMenuHeader>

        <SubscribeBox
          newsletterEmail={newsletterEmail}
          setNewsletterEmail={setNewsletterEmail}
          subscribeHandler={subscribeHandler}
        /> */}

        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastStyle={{ backgroundColor: "#191919" }}
        /> */}
      </InfoContainer>
    </>
  )
}

export default Marketplace
