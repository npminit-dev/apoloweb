export const LOCATIONS = [
  "Abadango",
  "Alien Acid Plant",
  "Alien Day Spa",
  "Alphabetrium",
  "Anatomy Park",
  "Avian Planet",
  "Bepis 9",
  "Bird World",
  "Birdperson's Consciousness",
  "Blips and Chitz",
  "Citadel of Ricks",
  "Cronenberg Earth",
  "Defiance's Base",
  "Defiance's Ship",
  "Detoxifier",
  "Dorian 5",
  "Draygon",
  "Earth (5-126)",
  "Earth (C-137)",
  "Earth (C-35)",
  "Earth (C-500A)",
  "Earth (Chair Dimension)",
  "Earth (D-99)",
  "Earth (D716)",
  "Earth (D716-B)",
  "Earth (D716-C)",
  "Earth (Evil Rick's Target Dimension)",
  "Earth (Fascist Dimension)",
  "Earth (Fascist Shrimp Dimension)",
  "Earth (Fascist Teddy Bear Dimension)",
  "Earth (Giant Telepathic Spiders Dimension)",
  "Earth (J-22)",
  "Earth (J19ζ7)",
  "Earth (K-22)",
  "Earth (K-83)",
  "Earth (Phone Dimension)",
  "Earth (Pizza Dimension)",
  "Earth (Replacement Dimension)",
  "Earth (Tusk Dimension)",
  "Earth (Unknown dimension)",
  "Earth (Wasp Dimension)",
  "Elemental Rings",
  "Eric Stoltz Mask Earth",
  "Fantasy World",
  "Ferkus 9",
  "Forbodulon Prime",
  "France",
  "Froopyland",
  "Gaia",
  "Galactic Federation Prison",
  "Gazorpazorp",
  "Gear World",
  "Giant's Town",
  "Girvonesk",
  "Glaagablaaga",
  "Globaflyn",
  "Glorzo Asteroid",
  "Gorgon Quadrant",
  "Gramuflack",
  "Greasy Grandma World",
  "Gromflom Prime",
  "Hamster in Butt World",
  "Heist-Con",
  "Heistotron Base",
  "Hell",
  "Hideout Planet",
  "Immortality Field Resort",
  "Interdimensional Cable",
  "Interdimensional Customs",
  "Jerryboree",
  "Krootabulon",
  "Kyle's Teenyverse",
  "Larva Alien's Planet",
  "Mega Gargantuan Kingdom",
  "Merged Universe",
  "Midland Quasar",
  "Monogatron Mothership",
  "Morglutz",
  "Morty",
  "Morty’s Story",
  "Mount Olympus",
  "Mount Space Everest",
  "Mr. Goldenfold's dream",
  "Mr. Meeseeks Box",
  "NX-5 Planet Remover",
  "Narnia Dimension",
  "Near-Duplicate Reality",
  "New Improved Galactic Federation Quarters",
  "Non-Diegetic Alternative Reality",
  "Normal Size Bug Dimension",
  "Nuptia 4",
  "Pawn Shop Planet",
  "Planet Squanch",
  "Plitzville Montana",
  "Plopstar",
  "Pluto",
  "Post-Apocalyptic Earth",
  "Purge Planet",
  "Resort Planet",
  "Rick and Two Crows Planet",
  "Rick's Battery Microverse",
  "Rick's Consciousness",
  "Rick's Memories",
  "Ricks’s Story",
  "Roy: A Life Well Lived",
  "Signus 5 Expanse",
  "Slartivart",
  "Snake Planet",
  "Snuffles' Dream",
  "Space",
  "Space Tahoe",
  "St. Gloopy Noops Hospital",
  "Story Train",
  "Testicle Monster Dimension",
  "The Menagerie",
  "The Ocean",
  "Tickets Please Guy Nightmare",
  "Trunk World",
  "Unity's Planet",
  "unknown",
  "Venzenulon 7",
  "Vindicator's Base",
  "Worldender's lair",
  "Z. Q. P. D.",
  "Zeep Xanflorp's Miniverse",
  "Zigerion's Base",
  "Árboles Mentirosos"
]

export const GENDERS = [
  'Male',
  'Female',
  'Genderless',
  'unknown',
]

export const STATUS = [
  'Alive',
  'Dead',
  'unknown'
]

export const NEWCHAR_DEFVALUES = { 
  name: '', 
  gender: 'unknown', 
  origin: 'unknown', 
  status: 'unknown', 
  species: 'unknown', 
  image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg' 
}

export const propRegexp = (keyword) => new RegExp(`(\\$${keyword}:.+?)(?=\\s|$|,|\\$)`, 'gim');
export const nameExtractRegexp = new RegExp(`((?<!\$)|(?<!:))((?<=,)|(?<=\s)|(?<=$)|(?<=^))[^$,]+(?!\$)`, 'gim')
