import React from "react";
import styled from "styled-components";
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;
const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover{
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Auto Escola Project</h6>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sed minus molestias autem modi. Consectetur ipsam
            voluptatem neque deleniti mollitia, facilis amet quo esse adipisci
            illum sunt vitae natus repellat.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (34) 12345-6789
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
          </Heading>
          <p>
            <FooterLink
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100001014767506"
            >
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              Facebook
            </FooterLink>
          </p>

          <p>
            <FooterLink
              target="_blank"
              href="https://www.linkedin.com/in/lucasfemartins/"
            >
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              Linkedin
            </FooterLink>
          </p>
          <p>
            <FooterLink
              target="_blank"
              href="https://twitter.com/lukas_martinz"
            >
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              Twitter
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
