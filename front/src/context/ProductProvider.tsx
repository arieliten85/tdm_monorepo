import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { ApiProductoProps } from '../types/types';
// import { getAllProducts } from '../hook/useGetProducts';
import axiosInstance from '../api/config/axiosConfig';

interface ProductContextType {
  products: ApiProductoProps[];
  status: 'loading' | 'error' | 'success';
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setStatus: Dispatch<SetStateAction<'loading' | 'error' | 'success'>>;
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  status: 'loading',
  errorMessage: '',
  setErrorMessage: () => '',
  setStatus: () => '',
});

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<ApiProductoProps[]>([]);
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');
  // Function to fetch products using axios
  const fetchProducts = async () => {
    try {
      setStatus('loading');
      const response = await axiosInstance.get('/api/products/');

      console.log('CONTEXT', response.data);
      const dataProduct = response.data; // Assuming the response has the products data in `data`

      if (dataProduct) {
        // Simulate response delay
        setTimeout(() => {
          setProducts(dataProduct);
          setStatus('success');
        }, 550);
      } else {
        setStatus('error');
        setErrorMessage('Ocurrió un error al cargar los productos.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Ocurrió un error al cargar los productos.');
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   try {
  //     setStatus('loading');
  //     const dataProduct = getAllProducts();
  //     if (dataProduct) {
  //       //simula delay de respuesta
  //       setTimeout(() => {
  //         setProducts(dataProduct);
  //         setStatus('success');
  //       }, 550);
  //     } else {
  //       setStatus('error');
  //       setErrorMessage('Ocurrió un error al cargar los productos.');
  //     }
  //   } catch (error) {
  //     setStatus('error');
  //     setErrorMessage('Ocurrió un error al cargar los productos.');
  //   }
  // }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        status,
        errorMessage,

        setErrorMessage,
        setStatus,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductContext);
