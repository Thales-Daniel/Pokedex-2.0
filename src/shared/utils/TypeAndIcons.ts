import grass from "../images/typeIcons/grass.svg"
import fire from "../images/typeIcons/fire.svg"
import water from "../images/typeIcons/water.svg"
import electric from "../images/typeIcons/electric.svg"
import normal from "../images/typeIcons/normal.svg"
import rock from "../images/typeIcons/rock.svg"
import dragon from "../images/typeIcons/dragon.svg"
import fairy from "../images/typeIcons/fairy.svg"
import fighting from "../images/typeIcons/fighting.svg"
import ghost from "../images/typeIcons/ghost.svg"
import ice from "../images/typeIcons/ice.svg"
import poison from "../images/typeIcons/poison.svg"
import psychic from "../images/typeIcons/psychic.svg"
import steel from "../images/typeIcons/steel.svg"
import ground from "../images/typeIcons/ground.svg"
import bug from "../images/typeIcons/bug.svg"
import flying from "../images/typeIcons/flying.svg"
import dark from "../images/typeIcons/dark.svg"
import All from "../images/typeIcons/icon-all.svg"

interface cardType {
  [key: string]: { src: string; color: string }
}

const TypeAndIcons: cardType = {
  all: {
    src: All,
    color: "#2C6AC1",
  },
  grass: {
    src: grass,
    color: "#9bcc50",
  },
  fire: {
    src: fire,
    color: "#fd7d24",
  },
  water: {
    src: water,
    color: "#4592c4",
  },
  electric: {
    src: electric,
    color: "#eed535",
  },
  normal: {
    src: normal,
    color: "#a4acaf",
  },
  rock: {
    src: rock,
    color: "#a38c21",
  },
  poison: {
    src: poison,
    color: "#b97fc9",
  },
  bug: {
    src: bug,
    color: "#729f3f",
  },
  flying: {
    src: flying,
    color: "#758CBD",
  },
  ground: {
    src: ground,
    color: "#CE8056",
  },
  dragon: {
    src: dragon,
    color: "#2C6AC1",
  },
  psychic: {
    src: psychic,
    color: "#f366b9",
  },
  ghost: {
    src: ghost,
    color: "#7b62a3",
  },
  steel: {
    src: steel,
    color: "#9eb7b8",
  },
  fairy: {
    src: fairy,
    color: "#fdb9e9",
  },
  dark: {
    src: dark,
    color: "#707070",
  },
  fighting: {
    src: fighting,
    color: "#d56723",
  },
  ice: {
    src: ice,
    color: "#51c4e7",
  },
}

export default TypeAndIcons
