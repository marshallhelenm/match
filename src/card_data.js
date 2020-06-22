import { library } from '@fortawesome/fontawesome-svg-core'
import { faBug, faSun, faMoon, faLeaf, faRocket, faLemon, faHeart, faEye, faQuestion } from '@fortawesome/free-solid-svg-icons'

library.add(faBug, faSun, faMoon, faLeaf, faRocket, faLemon, faHeart, faEye, faQuestion)

const card_data = [
  { name: "A", id: "A1", icon: "bug" },
  { name: "A", id: "A2", icon: "bug" },
  { name: "B", id: "B1", icon: "sun" },
  { name: "B", id: "B2", icon: "sun" },
  { name: "C", id: "C1", icon: "moon" },
  { name: "C", id: "C2", icon: "moon" },
  { name: "D", id: "D1", icon: "leaf" },
  { name: "D", id: "D2", icon: "leaf" },
  { name: "E", id: "E1", icon: "rocket" },
  { name: "E", id: "E2", icon: "rocket" },
  { name: "F", id: "F1", icon: "lemon" },
  { name: "F", id: "F2", icon: "lemon" },
  { name: "G", id: "G1", icon: "heart" },
  { name: "G", id: "G2", icon: "heart" },
  { name: "H", id: "H1", icon: "eye" },
  { name: "H", id: "H2", icon: "eye" },
];

export default card_data;
