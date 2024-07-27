import axiosInstance from './config/axiosConfig';

const capitalizeFirstLetter = (string: string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get('/api/category/');

    const subRoutes = response.data.map(item => {
      const capitalizedName = capitalizeFirstLetter(item.name);
      return { path: `/${item.name}`, label: capitalizedName };
    });
    return subRoutes;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

console.log(fetchCategories());

export const apiRootNavLink = [
  { path: '/', label: 'Inicio', exact: true },
  {
    path: '/productos',
    label: 'Productos',
    exact: false,
    subRoutes: [
      { path: '/budines', label: 'Budínes' },
      { path: '/tartas', label: 'Tartas' },
      { path: '/cookies', label: 'Cookies' },
      { path: '/tortas', label: 'Tortas' },
      { path: '/tematicas', label: 'Tortas Tematicas' },
      { path: '/numericas', label: 'Tortas Numerales' },
      { path: '/casamiento', label: 'Casamiento' },
      { path: '/bautismo', label: 'Bautismo' },
      { path: '/alfajores', label: 'Alfajores' },
      { path: '/brownies', label: 'Brownies' },
    ],
  },
  // { path: "/galeria", label: "Galeria", exact: false },
  { path: '/comoComprar', label: 'Como Comprar', exact: false },
  { path: '/nosotros', label: 'Nosotros', exact: false },
];
