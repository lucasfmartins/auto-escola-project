import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "components/atoms/Card";
import BreadCrump from "components/atoms/BreadCrump";

import HeroImage from "assets/hero.jpg";
import AboutImage from "draws/About2";
import InstImage1 from "assets/instructors/dog1.jpg";
import InstImage2 from "assets/instructors/dog2.jpg";
import InstImage3 from "assets/instructors/dog3.jpg";
import InstImage4 from "assets/instructors/dog4.jpg";
import InstImage5 from "assets/instructors/dog5.jpg";
import InstImage6 from "assets/instructors/dog6.jpg";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const instructors = [
  {
    id: 1,
    name: "Emmy",
    avatar: InstImage1,
  },
  {
    id: 2,
    name: "Jack",
    avatar: InstImage2,
  },
  {
    id: 3,
    name: "Bolinha",
    avatar: InstImage3,
  },
  {
    id: 4,
    name: "Hanz",
    avatar: InstImage4,
  },
  {
    id: 5,
    name: "Thor",
    avatar: InstImage5,
  },
  {
    id: 6,
    name: "Sansão",
    avatar: InstImage6,
  },
];

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Auto Escola Project</h1>
      </Heading>
      <BreadCrump
        items={[{ label: "Início", link: "/" }, { label: "Sobre" }]}
      />
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
      <Grid sm={2} md={3} lg={4}>
        {instructors.map((instructor) => (
          <Card key={instructor.id}>
            <CardMedia image={instructor.avatar}>
              <CardMediaDescription>
                <h5>{instructor.name}</h5>
              </CardMediaDescription>
            </CardMedia>
          </Card>
        ))}
      </Grid>
    </Section>
    <Footer />
  </>
);


export default About;

// p*3>Lorem
// ul>li*5>Lorem
// div*2>h4+p>Lorem
