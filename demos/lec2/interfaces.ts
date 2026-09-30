// How would you make an interface for this?
const book: Book = {
  title: "The Pragmatic Programmer",
  author: {
    firstName: "Andrew",
    lastName: "Hung",
  },
  yearPublished: 1999,
  genres: ["programming", "software engineering"],
  available: true,
  ratings: {
    average: 4.5,
    count: 2150,
  },
};

interface Book {
  title: string;
  author: {
    firstName: string;
    lastName: string;
  };
  yearPublished: number;
  genres: Array<string>; // could also have 'object'
  available: boolean;
  ratings: {
    average: number;
    count: number; // notice that both integers and doubles are numbers!
  };
}

const newFunc = (s: string, n: number): string => s;
