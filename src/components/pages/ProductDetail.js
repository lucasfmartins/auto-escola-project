import React from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import ProductType from "types/ProductType";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Callout, {
  CalloutBody,
  CalloutActions,
  CalloutMedia,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";
import BreadCrump from "components/atoms/BreadCrump";

import SpeedImage from "draws/Speed1";
import HeroImage from "assets/hero.jpg";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = ({ product }) => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>{product.title}</h1>
      </Heading>
      <BreadCrump
        items={[
          { label: "Início", link: "/" },
          { label: "Serviços" },
          { label: product.title },
        ]}
      />
    </Hero>
    <Section>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, nobis.
        Iusto culpa quia ea ad aliquid voluptate labore, doloribus architecto
        facere expedita ipsum est nemo quam voluptates aut commodi impedit.
      </p>
      <p>
        Nulla consequuntur reprehenderit quaerat dolorum optio doloribus, iste
        omnis quibusdam accusantium repellendus saepe recusandae in consequatur
        deserunt tenetur unde aspernatur nesciunt voluptatum nostrum commodi
        architecto eius nemo facilis. Nam, voluptatibus.
      </p>
      <p>
        Mollitia aliquid odio assumenda quae molestias numquam repellat nostrum
        quo voluptatem, natus delectus. Recusandae eius consectetur, numquam
        dolor illo repellat voluptatem, officia voluptatum laboriosam, modi
        optio earum animi accusantium corrupti?
      </p>
      <h5>Documentos necessários:</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaIdCard />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Certidão de nascimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Comprovante de residência
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Faça sua matrícula agora mesmo</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quasi, pariatur doloribus, ratione laboriosam architecto omnis ipsum
            mollitia non voluptatum soluta voluptatem beatae illum, quibusdam
            cupiditate itaque. Nam, fugit adipisci!
          </p>
          <CalloutActions>
            <Button color="primary">Matricular</Button>
          </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
          <SpeedImage />
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </>
);

ProductDetail.defaultProps = {
  product: {},
};

ProductDetail.propTypes = {
  product: ProductType,

};

export default ProductDetail;

// yarn svg svg/speed1.svg
