import type { Author } from "./Authors";
import type { Book } from "./Book";

export type Series = {
  id: string;
  title: string;
  description: string;
  author: Author;
  year: number;
  image: string;
  books: Book[];
};
