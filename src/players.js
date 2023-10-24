

const players = [
  {
    nom: 'Erling Haaland ',
    equip: 'man city',
    national: 'Nerwij',
    numero: 9,
    age: 25,
    photo: 'https://www.mancity.com/meta/media/jybffupz/erling-haaland.png',
  },
  {
    nom: 'Phile foden ',
    equip: 'Man city',
    national: 'Angleterre',
    numero: 47,
    age: 22,
    photo: 'https://www.mancity.com/meta/media/apzpgmcj/phil-foden.png',
  },
  {
    nom: 'Riadh Mehrez',
    equip: 'Man city',
    national: 'algerie',
    numero: 26,
    age: 28,
    photo: 'https://actuanewsmedia.files.wordpress.com/2023/07/riyad-mahrez.png',
  },
  {
    nom: 'Ederson ',
    equip: 'Man city',
    national: 'brazil',
    numero: 1,
    age: 30,
    photo: 'https://www.mancity.com/meta/media/pjbbld2d/ederson.png',
  },

];
//default props pour ajouter un nom par defaut si en met pas un nom 
players.defaultProps = {
  nam:"username",
}
export default players
