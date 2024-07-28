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

  { path: '/comoComprar', label: 'Como Comprar', exact: false },
  { path: '/nosotros', label: 'Nosotros', exact: false },
];
