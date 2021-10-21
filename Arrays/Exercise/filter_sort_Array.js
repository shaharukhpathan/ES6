const movies = [
  { title: "a", year: 2018, ratings: 4.5 },
  { title: "b", year: 2018, ratings: 4.7 },
  { title: "c", year: 2018, ratings: 3 },
  { title: "d", year: 2021, ratings: 4.5 },
];

// All the movies in 2018 with ratings higher than 4
// Sort them by their rating
// Descending order
// Pick their title

const results = movies
  .filter((m) => m.year === 2018 && m.ratings > 4)
  .sort((a, b) => a.ratings - b.ratings)
  .reverse()
  .map((m) => m.title);

console.log(results);
