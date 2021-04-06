import { useProduct, useProducts } from "./products";

describe("useProduct()", () => {
  test("returns a product", () => {
    const slang = "primeira-habilitacao-moto";

    const product = useProduct({ slang });

    expect(product.title).toEqual("1º Habilitação de Moto");
  });

  test("renturn undefined if product was not found", () => {
    const slang = "invalid-slang";

    const product = useProduct({ slang });

    expect(product).toBeUndefined();
  });
});

describe("useProducts()", () => {
  test("reutrn a product list", () => {
    const products = useProducts();

    expect(products.length).toBeGreaterThan(1);
  });
});
