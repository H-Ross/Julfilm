// ===== EDIT YOUR MOVIES HERE =====
// One line per day (first line = Day 1).
//   title:  movie name
//   where:  where to watch (Netflix, Disney+ ...)
//   poster: picture file name. Put the picture in the "public/posters" folder,
//           then write e.g. poster: "/posters/day1.jpg". Leave it out to use the example picture.
export type Movie = { title: string; where: string; poster?: string };
export const MOVIES: Movie[] = [
  { title: "The Holiday Calendar", where: "Netflix", poster: "/posters/1_theHolidayCalendar.jpg" },
  { title: "The Holiday", where: "Disney+", poster: "/posters/2_theHoliday.jpg" },
  { title: "Holidate", where: "Netflix", poster: "/posters/3_Holidate.jpg" },
  { title: "The Christmas Chronicles", where: "Netflix", poster: "/posters/4_ChristmasChronicles.jpg" },
  { title: "Rudolph the Red-Nosed Reindeer", where: "YouTube", poster: "/posters/5_Rudolf.jpg" },
  { title: "How the Grinch Stole Christmas", where: "Disney+", poster: "/posters/6_Grinch.jpg" },
  { title: "Christmas at the Plaza", where: "HBO MAX", poster: "/posters/7_ChristmasatthePlaza.jpg" },
  { title: "The Muppet Christmas Carol", where: "Disney+", poster: "/posters/8_Mupparnas julsaga.jpg" },
  { title: "Holiday in the Wild", where: "Netflix", poster: "/posters/9_HolidayInTheWild.jpg" },
  { title: "A Dog's Perfect Christmas", where: "Netflix", poster: "/posters/10_Adogsperfectchristmas.jpg" },
  { title: "Noelle", where: "Disney+", poster: "/posters/11_Noelle.jpg" },
  { title: "The Santa Clause", where: "Disney+", poster: "/posters/12_theSantaClause.jpg" },
  { title: "Love Actually", where: "SVTplay", poster: "/posters/13_LoveActually.jpg" },
  { title: "I'll Be Home for Christmas", where: "Netflix", poster: "/posters/14_JagKommerHemIgenTillJul.jpg" },
  { title: "Die Hard", where: "Disney+", poster: "/posters/15_DieHard.jpg" },
  { title: "Christmas with the Kranks", where: " ", poster: "/posters/16_ChristmaswiththeKranks.jpg" },
  { title: "Operation Christmas Drop", where: "Netflix", poster: "/posters/17_OperationChristmasDrop.jpg" },
  { title: "The Family Stone", where: "Disney+", poster: "/posters/18_theFamilyStone.jpg" },
  { title: "Ebenezer", where: "Filmstaden", poster: "/posters/19_Ebenezer.jpg" },
  { title: "Fanny och Alexander", where: "SVTplay", poster: "/posters/20_FannyoAlexander.jpg" },
  { title: "It's a Wonderful Life", where: " ", poster: "/posters/21_ItsaWonderfulLife.jpg" },
  { title: "Office Christmas Party", where: "Netflix", poster: "/posters/22_OfficeChristmasParty.jpg" },
  { title: "A Christmas Carol", where: "Disney+", poster: "/posters/23_AChristmasCarol.jpg" },
  { title: "Karl-Bertil Jonssons Julafton", where: "Netflix", poster: "/posters/24_KarlBertilJonsson.jpg" },
];
