export const getYear = (movie) => {
  const release_date = movie.release_date;
  let release_year = new Date(release_date);
  release_year = release_year.getFullYear();
  return release_year;
};
