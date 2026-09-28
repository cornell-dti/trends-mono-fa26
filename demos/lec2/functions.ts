/**
 * Design a function that takes 'title', 'firstName', 'lastName', 'yearPublished', 'genres', 'available', and 'ratings'
 * and returns an OptionalRatingBook
 */

interface Author {
  firstName: string;
  lastName: string;
}

interface Ratings {
  average: number;
  count: number;
}

interface OptionalRatingBook {
  title: string;
  author: Author;
  yearPublished: number;
  genres: object;
  available: boolean;
  ratings?: Ratings;
}

// Don't forget the parameters!
const CreateBook = () => {
  // TODO
};
