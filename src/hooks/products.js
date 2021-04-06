import ServImg01 from "assets/serv-01.jpg";
import ServImg02 from "assets/serv-02.jpg";
import ServImg03 from "assets/serv-03.jpg";
import ServImg04 from "assets/serv-04.jpg";
import ServImg05 from "assets/serv-05.jpg";

const products = [
  {
    id: 1,
    title: "1º Habilitação de Carro e Moto",
    slang: "primeira-habilitacao-carro-e-moto",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    image: ServImg01,
  },
  {
    id: 2,
    title: "1º Habilitação de Carro",
    slang: "primeira-habilitacao-carro",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    image: ServImg02,
  },
  {
    id: 3,
    title: "1º Habilitação de Moto",
    slang: "primeira-habilitacao-moto",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    image: ServImg03,
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhão",
    slang: "mudanca-de-categoria-caminhao",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    image: ServImg04,
  },
  {
    id: 5,
    title: "Aulas avulsas",
    slang: "aulas-avulsas",
    summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    image: ServImg05,
  },
];

export const useProducts = () => {
  return products;
};

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang);
};
