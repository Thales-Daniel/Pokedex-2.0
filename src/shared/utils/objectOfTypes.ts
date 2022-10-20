interface cardType {
  [key: string]: { background: string; color: string }
}

const typeCardObject: cardType = {
  grass: {
    background: "#9bcc50",
    color: "#212121",
  },
  fire: {
    background: "#fd7d24",
    color: "#fff",
  },
  water: {
    background: "#4592c4",
    color: "#fff",
  },
  electric: {
    background: "#eed535",
    color: "#212121",
  },
  normal: {
    background: "#a4acaf",
    color: "#212121",
  },
  rock: {
    background: "#a38c21",
    color: "#212121",
  },
  poison: {
    background: "#b97fc9",
    color: "#fff",
  },
  bug: {
    background: "#729f3f",
    color: "#fff",
  },
  flying: {
    background: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
    color: "#212121",
  },
  ground: {
    background: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
    color: "#212121",
  },
  dragon: {
    background: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
    color: "#212121",
  },
  psychic: {
    background: "#f366b9",
    color: "#fff",
  },
  ghost: {
    background: "#7b62a3",
    color: "#fff",
  },
  steel: {
    background: "#9eb7b8",
    color: "#212121",
  },
  fairy: {
    background: "#fdb9e9",
    color: "#212121",
  },
  dark: {
    background: "#707070",
    color: "#fff",
  },
  fighting: {
    background: "#d56723",
    color: "#fff",
  },
  ice: {
    background: "#51c4e7",
    color: "#212121",
  },
}

export default typeCardObject
