export default [
  {
    id: 'cover'
  },
  { id: 'capa', autoplay: 3000 },
  {
    id: 'capa',
    images: [require('./assets/images/titulo.svg')],
    autoplay: 400
  },
  {
    id: 'capa',
    images: [
      require('./assets/images/titulo.svg'),
      require('./assets/images/nomes.svg')
    ]
  },
  {
    id: 'delay',
    images: [],
    autoplay: 500
  },
  {
    id: '4',
    images: [require('./assets/images/Contexto H.svg')]
  },
  {
    id: '5',
    images: [require('./assets/images/Principais C.svg')]
  }
];
