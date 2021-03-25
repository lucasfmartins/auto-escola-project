import React from "react";
import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import { Link } from "react-router-dom";
//type
import ProductType from "types/ProductType";
//Atoms
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Feature from "components/atoms/Feature";
import Grid from "components/atoms/Grid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";
//Molecules
import Section from "components/molecules/Section";
import Hero from "components/molecules/Hero";
//Organisms
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
//img
import HeroImage from "assets/hero.jpg";

import AboutVideo from "assets/about.mp4";


const Home = ({products}) => (
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
            <Button as={Link} to="/sobre" color="primary" >Saiba Mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay playsInline loop muted />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius maiores
          quas necessitatibus accusamus maxime, molestiae, vel aut explicabo
          harum tempora quaerat sed in natus nostrum? Voluptates fuga sit cum
          facilis.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius maiores
          quas necessitatibus accusamus maxime, molestiae, vel aut explicabo
          harum tempora quaerat sed in natus nostrum? Voluptates fuga sit cum
          facilis.
        </Accordion>
        <Accordion title="Fui multado, e agora?">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius maiores
          quas necessitatibus accusamus maxime, molestiae, vel aut explicabo
          harum tempora quaerat sed in natus nostrum? Voluptates fuga sit cum
          facilis.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {
  products: [],
};

Home.propTypes = {
  products: PropTypes.arrayOf(ProductType)
};

export default Home;
