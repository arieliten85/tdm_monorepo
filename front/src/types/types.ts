// export interface ProductoProps {
//   id: string | number;
//   img: string;
//   title: string;
//   description: string;
//   price: string;
//   tags?: string[];
// }

interface Image {
  id: number;
  productId: number;
  url: string;
}

interface Category {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiProductoProps {
  id: string | number;
  image: Image[];
  title: string;
  description: string;
  price: string;
  tags?: string[];
  category?: Category;
  optionalImages?: { image: string }[];
}

export interface ApiProductos {
  productos: ApiProductoProps[];
}

// export interface Productos {
//   productos: ProductoProps[];
// }
export interface CounterProps {
  count: number;

  increment: () => void;
  decrement: () => void;
}

export interface buyProductProps {
  image: Image[];
  title: string;
  description: string;
  price: string;
  tags?: string[];
  count?: number;
  increment?: () => void;
  decrement?: () => void;
}

// CONTEXTO
