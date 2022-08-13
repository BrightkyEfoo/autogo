//icons for home slider
import { BiWorld, BiBook, BiTimer, BiTime } from 'react-icons/bi';
import { GiDiploma } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaLinkedinIn,
  FaYoutubeSquare,
  FaMailchimp,
} from 'react-icons/fa';
// end of icons for home slider

export const postAPIConnectionURL = 'https://autogoback237.herokuapp.com/api/connexion';
export const postAPIInscriptionURL = 'https://autogoback237.herokuapp.com/api/inscription';

export const containerStyle = {
  //for chakra components only
  flexGrow: 1,
};
export let tokenBearer = '';

export let connexionData = {};

export const typeCarDesc = [
  {
    catergorie: 'A',
    texte:
      'Lore ipsum dolor sit, amet consectetur adipisicing elit. Recusandae officia quaerat harum nulla similique dignissimos sint ad exercitationem? Quod, deleniti. Libero nisi ab officia assumenda, animi voluptas delectus sed culpa.',
    img: 'https://i.ibb.co/vLgYL3K/clionew.jpg',
    imgTitre: "figure d'une image de PTAC inferieur a 3500 kg",
  },
  {
    //pour categorie B et ainsi de suite
    catergorie: 'B',
    texte:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae officia quaerat harum nulla similique dignissimos sint ad exercitationem? Quod, deleniti. Libero nisi ab officia assumenda, animi voluptas delectus sed culpa.',
    img: 'https://i.ibb.co/0f94tBg/voiture-g-n-rique-m-tallique-blanche-de-suv-sur-le-fond-blanc-avec-chemin-d-isolement-123337285.jpg',
    imgTitre: "figure d'une image de PTAC inferieur a 3500 kg",
  },
  {
    catergorie: 'C',
    texte:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae officia quaerat harum nulla similique dignissimos sint ad exercitationem? Quod, deleniti. Libero nisi ab officia assumenda, animi voluptas delectus sed culpa.',
    img: 'https://i.ibb.co/5T5MPds/RENAULT-MEGANE-p1ay0lwhymycra3vfadeo4bs2k2bf6py9gqstuos6c.jpg',
    imgTitre: "figure d'une image de PTAC inferieur a 3500 kg",
  },
  {
    catergorie: 'D',
    texte:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae officia quaerat harum nulla similique dignissimos sint ad exercitationem? Quod, deleniti. Libero nisi ab officia assumenda, animi voluptas delectus sed culpa.',
    img: 'https://i.ibb.co/8rTq7kk/333967-2019-Mercedes-Benz-G-Class.jpg',
    imgTitre: "figure d'une image de PTAC inferieur a 3500 kg",
  },
  {
    catergorie: 'E',
    texte:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae officia quaerat harum nulla similique dignissimos sint ad exercitationem? Quod, deleniti. Libero nisi ab officia assumenda, animi voluptas delectus sed culpa.',
    img: 'https://i.ibb.co/0KmC936/ARKANA.png',
    imgTitre: "figure d'une image de PTAC inferieur a 3500 kg",
  },
  {
    catergorie: 'F',
    texte:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae officia quaerat harum nulla similique dignissimos sint ad exercitationem? Quod, deleniti. Libero nisi ab officia assumenda, animi voluptas delectus sed culpa.',
    img: 'https://i.ibb.co/0f94tBg/voiture-g-n-rique-m-tallique-blanche-de-suv-sur-le-fond-blanc-avec-chemin-d-isolement-123337285.jpg',
    imgTitre: "figure d'une image de PTAC inferieur a 3500 kg",
  },
  {
    catergorie: 'G',
    texte:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae officia quaerat harum nulla similique dignissimos sint ad exercitationem? Quod, deleniti. Libero nisi ab officia assumenda, animi voluptas delectus sed culpa.',
    img: 'https://i.ibb.co/YNMNBtv/captuR.png',
    imgTitre: "figure d'une image de PTAC inferieur a 3500 kg",
  },
  //   add some categories as an object like up there and it will display automatically
];

let fontSize = 35;
export const homeSwiperSlides = [
  {
    title: 'Anywhere',
    botom: {
      as: BiBook,
      fontSize,
      color: 'blue.700',
    },
    iconeColor: 'black',
    iconeBg: 'blue.400',
    icone: BiWorld,
    preview:
      "Accessible de n'importe ou dans le monde, peu importe ou vous soyez!",
  },
  {
    title: 'Anytime',
    botom: {
      as: BiTime,
      fontSize,
      color: 'black',
    },
    iconeColor: 'black',
    iconeBg: 'gray.300',
    icone: BiTimer,
    preview: 'Disponible H24 7j/7.',
  },
  {
    title: 'WINGO',
    botom: {
      as: MdSchool,
      fontSize,
      color: 'gray.400',
    },
    iconeColor: 'black',
    iconeBg: 'gray.300',
    icone: GiDiploma,
    preview: 'Décrochez votre permis comme un chef!',
  },
  {
    title: 'Follow Us !!',
    hstack: 'Hstack',
    botom: [
      {
        route: 'https://www.facebook.com',
        as: FaFacebookSquare,
        fontSize,
        color: 'blue.400',
      },
      {
        route: 'https://api.whatapp.com',
        as: FaWhatsappSquare,
        fontSize,
        color: 'green.400',
      },
      {
        route: 'https://www.linkedin.com',
        as: FaLinkedinIn,
        fontSize,
        color: 'blue.300',
      },
      {
        route: 'https://www.youtube.com',
        as: FaYoutubeSquare,
        fontSize,
        color: 'red.400',
      },
      {
        route: 'https://www.gmail.com',
        as: FaMailchimp,
        fontSize,
        color: 'gray.400',
      },
    ],
    iconeColor: 'white',
    iconeBg: 'blue.500',
    icone: GiDiploma,
    preview: 'Rejoignez la communautée AUTOGO',
  },
];

//data for top navBar

export const topNavView = (id) => [
  {
    route: '/',
    title: 'Home',
  },
  {
    route: id === 0 ? '/connexion' : '/account',
    title: id === 0 ? 'Login' : 'Account',
  },
  {
    route: '/courses',
    title: 'All courses',
  },
  {
    route: '/services',
    title: 'Services',
  },
  {
    route: '/about',
    title: 'About',
  },
  //add any view by respecting your desired order
];
