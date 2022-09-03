import React from "react"
import svgMPlace from "../../images/svgMPlace.svg"
import Logo from "../../images/Logo.svg"

import {
  FooterLinksContainer,
  LogoImage,
  NavLinks,
  Width35,
  Image,
  SocialLogo,
  BrandName,
  ListItemWrapper,
  ListItemMarketplace,
  CopyrightText,
  Links,
  LinksContainer,
} from "./FooterElements"
import { footerLinks } from "./data"

const FooterComponent = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <FooterLinksContainer>
        <Width35>
          <SocialLogo to="/" onClick={toggleHome}>
            <LogoImage src={Logo} />
          </SocialLogo>
          <BrandName>YLG</BrandName>
        </Width35>
        <LinksContainer>
          <ListItemWrapper>
            <Image src={svgMPlace} alt="React Logo" />
            <ListItemMarketplace
              to="/nftMarket"
              spy="true"
              duration={500}
              exact="true"
              offset={0}
            >
              marketplace
            </ListItemMarketplace>
          </ListItemWrapper>
          <Links>
            {footerLinks.map(({ id, to, name }) => (
              <NavLinks
                key={id}
                to={to}
                spy="true"
                duration={500}
                exact="true"
                offset={0}
              >
                {name}
              </NavLinks>
            ))}
          </Links>
        </LinksContainer>
      </FooterLinksContainer>
      <CopyrightText>YourLife. 2022</CopyrightText>
    </>
  )
}

export default FooterComponent
