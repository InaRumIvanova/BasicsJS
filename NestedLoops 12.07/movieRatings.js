function solve(input) {
  let n = Number(input.shift([0]));
  let sum = 0;
  let maxRating = Number.MIN_SAFE_INTEGER;
  let minRating = Number.MAX_SAFE_INTEGER;
  let highestRating = 0;
  let lowestRating = 0;
  let movieHighest = input;
  let movieLowest = input;
  
  for (let i = 1; i <= n; i++) {
    let currentMovie = input.shift([i]);
    let currentRating = Number(input.shift([i + 1]));
    sum += currentRating;
    if (currentRating > maxRating) {
      maxRating = currentRating;
      highestRating = maxRating;
      movieHighest = currentMovie;

    } else if (currentRating < minRating) {
      minRating = currentRating;
      lowestRating = minRating;
      movieLowest = currentMovie;

    }

  }
  let average = sum / n;
  console.log(movieHighest + " is with highest rating: " + highestRating.toFixed(1));
  console.log(movieLowest + " is with lowest rating: " + lowestRating.toFixed(1));
  console.log("Average rating: " + average.toFixed(1));
}
solve(['5', 'A Star is Born', '7.8', 'Creed 2', '7.3', 'Mary Poppins', '7.2', 'Vice', '7.2', 'Captain Marvel', '7.1']);