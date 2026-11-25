// ===== EDIT YOUR MOVIES HERE =====
// One line per day (first line = Day 1).
//   title:  movie name
//   where:  where to watch (Netflix, Disney+ ...)
//   poster: picture file name. Put the picture in the "public/posters" folder,
//           then write e.g. poster: "/posters/day1.jpg". Leave it out to use the example picture.
export type Movie = { title: string; where: string; poster?: string };
export const MOVIES: Movie[] = [
  { title: "Elf", where: "Netflix", poster: "/posters/day1.jpg" },
  { title: "Home Alone", where: "Disney+", poster: "/posters/day2.jpg" },
  { title: "The Polar Express", where: "Netflix", poster: "/posters/day3.jpg" },
  { title: "Love Actually", where: "Netflix", poster: "/posters/day4.jpg" },
  { title: "The Muppet Christmas Carol", where: "Disney+", poster: "/posters/day5.jpg" },
  { title: "It's a Wonderful Life", where: "Prime Video", poster: "/posters/day6.jpg" },
  { title: "Klaus", where: "Netflix", poster: "/posters/day7.jpg" },
  { title: "The Holiday", where: "Netflix", poster: "/posters/day8.jpg" },
  { title: "How the Grinch Stole Christmas", where: "Peacock", poster: "/posters/day9.jpg" },
  { title: "Die Hard", where: "Disney+", poster: "/posters/day10.jpg" },
  { title: "Miracle on 34th Street", where: "Disney+", poster: "/posters/day11.jpg" },
  { title: "Arthur Christmas", where: "Netflix", poster: "/posters/day12.jpg" },
  { title: "The Nightmare Before Christmas", where: "Disney+", poster: "/posters/day13.jpg" },
  { title: "Frozen", where: "Disney+", poster: "/posters/day14.jpg" },
  { title: "A Christmas Story", where: "Netflix", poster: "/posters/day15.jpg" },
  { title: "National Lampoon's Christmas Vacation", where: "Netflix", poster: "/posters/day16.jpg" },
  { title: "The Santa Clause", where: "Disney+", poster: "/posters/day17.jpg" },
  { title: "Paddington 2", where: "Netflix", poster: "/posters/day18.jpg" },
  { title: "Little Women", where: "Netflix", poster: "/posters/day19.jpg" },
  { title: "Scrooged", where: "Paramount+", poster: "/posters/day20.jpg" },
  { title: "Jingle All the Way", where: "Disney+", poster: "/posters/day21.jpg" },
  { title: "The Grinch", where: "Peacock", poster: "/posters/day22.jpg" },
  { title: "Gremlins", where: "Netflix", poster: "/posters/day23.jpg" },
  { title: "White Christmas", where: "Netflix", poster: "/posters/day24.jpg" },
];
