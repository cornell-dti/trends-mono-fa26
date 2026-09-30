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
const CreateBook = (
  title: string,
  firstName: string,
  lastName: string,
  yearPublished: number,
  genres: object,
  available: boolean,
  ratings?: Ratings,
): OptionalRatingBook => {
  const tempObj = {
    title: title,
    author: {
      firstName: firstName,
      lastName: lastName,
    },
    yearPublished: yearPublished,
    genres: genres,
    available: available,
  };

  return ratings ? { ...tempObj, ratings: ratings } : tempObj;
};

// The longer way:

// const CreateBook = (
//   title: string,
//   firstName: string,
//   lastName: string,
//   yearPublished: number,
//   genres: object,
//   available: boolean,
//   ratings?: Ratings,
// ): OptionalRatingBook => {
//   if (ratings) {
//     return {
//       title: title,
//       author: {
//         firstName: firstName,
//         lastName: lastName,
//       },
//       yearPublished: yearPublished,
//       genres: genres,
//       available: available,
//       ratings: ratings,
//     };
//   } else {
//     return {
//       title: title,
//       author: {
//         firstName: firstName,
//         lastName: lastName,
//       },
//       yearPublished: yearPublished,
//       genres: genres,
//       available: available,
//     };
//   }
// };
