/**
 * Create a type called 'Result'.
 *
 * It must allow EITHER:
 * 1) A success object:
 *   {
 *     success: true;
 *     data: string;
 *   }
 *
 * OR
 *
 * 2) A failure object:
 *   {
 *     success: false;
 *     error: string;
 *   }
 */

type Success = {
  success: true;
  data: string;
};

type Failure = {
  success: false;
  error: string;
};

type Result = Success | Failure;

let result: Result = {
  success: false,
  error: "this is a result",
};

// Could also write as below, but not as readable

type ResultUgly =
  | {
      success: true;
      data: string;
    }
  | {
      success: false;
      error: string;
    };

/**
 * Create two types:
 *
 * HasName, which has one attribute (a name that is a string)
 *
 * HasPrice, which has one attribute (a price that is a number)
 *
 * Create a new type called 'Product' that requires a name and a price.
 */

type HasName = {
  name: string;
};

type HasPrice = {
  price: number;
};

type Product = HasName & HasPrice;

/**
 * Create a type called 'SharedPets' using an intersection.
 *
 * It must allow only animals that appear in BOTH ApartmentPets and FamilyPets
 *
 * Then:
 * 1) Create a variable of type SharedPets with an allowed value.
 * 2) Try assigning a value that appears in only one of the types.
 *    Check that TypeScript reports an error.
 */

type ApartmentPets = "cat" | "fish" | "hamster";
type FamilyPets = "cat" | "dog" | "hamster";

type SharedPets = ApartmentPets & FamilyPets;

const myPet: SharedPets = "cat";
