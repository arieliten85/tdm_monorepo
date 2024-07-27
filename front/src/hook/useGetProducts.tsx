import { useProductsContext } from '../context/ProductProvider';
import { ApiProductoProps } from '../types/types';

// TYPS
interface FilterRangePriceProps {
  numMin: string | number;
  numMax: string | number;
  dataArray: ApiProductoProps[];
}

// Custom hook to use products context
export const useGetProducts = () => {
  const { products } = useProductsContext();

  const getProductByTitle = (title: string) => {
    const searchValueLowercase = title.toLowerCase();

    const searchResults = products.filter((product: ApiProductoProps) => {
      const titleLowercase = product.title.toLowerCase();

      if (titleLowercase.includes(searchValueLowercase)) {
        return true;
      }

      if (product.tags) {
        const tagsLowercase = product.tags.map(tag => tag.toLowerCase());
        if (tagsLowercase.some(tag => tag.includes(searchValueLowercase))) {
          return true;
        }
      }

      return false;
    });

    return searchResults;
  };

  const getProductByRangePrice = ({
    numMin,
    numMax,
    dataArray,
  }: FilterRangePriceProps): ApiProductoProps[] => {
    const minPrice = parseFloat(numMin as string);
    const maxPrice = parseFloat(numMax as string);

    if (isNaN(minPrice) || isNaN(maxPrice)) {
      console.error('Invalid price range values:', { numMin, numMax });
      return [];
    }

    const resultRange = dataArray.filter((producto: ApiProductoProps) => {
      const productPrice = parseFloat(producto.price.replace(/[^\d.-]/g, ''));
      return productPrice >= minPrice && productPrice <= maxPrice;
    });

    return resultRange;
  };

  const getProductByCategory = (categoria: string) => {
    console.log('products', products);
    const productosFiltrados = products.filter(product => product.category?.name === categoria);

    return productosFiltrados;
  };

  const getProductByAscending = (dataArray: ApiProductoProps[]) => {
    return dataArray.slice().sort((a, b) => (a.price > b.price ? 1 : -1));
  };

  const getProductByDescending = (dataArray: ApiProductoProps[]) => {
    return dataArray.slice().sort((a, b) => (a.price < b.price ? 1 : -1));
  };

  return {
    getProductByTitle,
    getProductByRangePrice,
    getProductByCategory,
    getProductByAscending,
    getProductByDescending,
  };
};
