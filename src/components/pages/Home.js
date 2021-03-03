import React from "react";
// import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";

import HeroImage from "assets/hero.jpg";
import ServImg01 from "assets/serv-01.jpg";
import ServImg02 from "assets/serv-02.jpg";
import ServImg03 from "assets/serv-03.jpg";
import ServImg04 from "assets/serv-04.jpg";
import ServImg05 from "assets/serv-05.jpg";
import AboutVideo from "assets/about.mp4";

const products = [
  {
    id: 1,
    title: "1º Habilitação de Carro e Moto",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    image: ServImg01,
  },
  {
    id: 2,
    title: "1º Habilitação de Carro",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    image: ServImg02,
  },
  {
    id: 3,
    title: "1º Habilitação de Moto",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    image: ServImg03,
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhão",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    image: ServImg04,
  },
  {
    id: 5,
    title: "Aulas avulsas",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    image: ServImg05,
  },
];

const Home = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br />
          para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      </ul>
      <Button color="primary" variant="outlined">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Auto Escola Project</h2>
          </Heading>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
            consequatur quia! Quod, ipsam. Ipsa officiis dignissimos ea
            laudantium! Odio recusandae minima eos beatae fuga dignissimos?
          </p>
          <div>
            <Button color="primary">Saiba Mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
