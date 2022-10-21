const GET_ITEMS_URL = 'productData.json';

export type Product = {
  id: string;
  name: string;
  description: string;
  features: string;
  price: string;
  keywords: string;
  category: string;
  subcategory: string;
  images: string[];
};

export type GetProductsResponse = {
  products: {
    data: {
      items: Product[];
    };
  };
};

export const ProductsService = {
  getProducts: async (): Promise<GetProductsResponse> => {
    const response = await fetch(GET_ITEMS_URL);

    const productData: GetProductsResponse = await response.json();

    return productData;
  },
};
