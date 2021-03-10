import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/hero.jpg";
import AboutImage from "draws/About2";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Auto Escola Project</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            repellendus architecto iste earum ut autem repellat cumque deleniti,
            blanditiis sed veniam, ipsa eveniet voluptas obcaecati corrupti vero
            voluptatibus atque ex?
          </p>
          <p>
            Velit officiis consequatur, reprehenderit at ex error officia, nulla
            alias eius nobis quisquam atque quod voluptates vitae magnam dolor
            perferendis? Officiis ex corrupti, suscipit voluptatum laborum
            eligendi iusto ad dignissimos!
          </p>
          <p>
            Perferendis sint autem praesentium? Illum dolores ab nobis incidunt
            architecto, nostrum exercitationem animi voluptatem nisi maiores
            quaerat consequatur quam quos praesentium aliquid pariatur. Laborum
            quidem quisquam libero dolores perspiciatis. Enim!
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quasi quo similique reiciendis sed dignissimos repudiandae atque ad!
            Ut totam debitis reprehenderit ratione, praesentium laborum illo
            deleniti? Exercitationem, corrupti nobis.
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet
            dolores numquam vel. Maiores deleniti, quisquam doloribus fugiat
            voluptatem ut atque molestias facere, ea consequatur eaque, expedita
            dolor fuga reiciendis.
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Doloremque id porro, optio nihil numquam tempora eius, fugit, rem
            libero animi sapiente sint autem blanditiis odio nobis
            necessitatibus aliquid explicabo quidem vel. Iure quis eaque illo
            ut, esse consequuntur?
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;

// p*3>Lorem
// ul>li*5>Lorem
// div*2>h4+p>Lorem
