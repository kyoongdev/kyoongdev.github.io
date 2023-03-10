type Menu = {
  icon: string;
  name: string;
  path: string;
};

export const MENU: Array<Menu> = [
  {
    icon: 'π ',
    name: 'Home',
    path: '/',
  },
  {
    icon: 'π',
    name: 'About',
    path: '/about',
  },
  ...(process.env.NODE_ENV === 'development'
    ? [
        {
          icon: 'π',
          name: 'Post',
          path: '/post',
        },
      ]
    : []),
];

export const TAGS = ['νλ°νΈμλ', 'λ°±μλ', 'μΈνλΌ', 'λΌμ΄νμ€νμΌ', 'μΈκ°κ΄κ³'] as const;
