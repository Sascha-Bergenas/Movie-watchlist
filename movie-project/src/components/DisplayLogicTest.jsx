// Visar bara en av filmerna, som stämmer överens med condition, conditional render
const movieNumber = 1;
{
  /*Om filmen är första condition efter ? kommer den renderas på skärmen  */
}
{
  movieNumber === 1 ? (
    <MovieCard movie={{ title: "My Movie", release_date: "2026" }} />
  ) : (
    <MovieCard movie={{ title: "My Second Movie", release_date: "2026" }} />
  );
}
{
  /*Annars kommer alternativ efter : att renderas*/
}
