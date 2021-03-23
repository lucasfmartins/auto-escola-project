import { useEffect } from "react";

// 1º função 2º array de dependencias
//array vazio execua só qnd carregado o componente

export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
};
