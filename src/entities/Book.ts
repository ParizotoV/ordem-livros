import type { Author } from "./Authors";

export type Book = {
  id: string;
  title: string;
  author: Author;
  year: number;
  order: number;
  image: string;
  link: string;
};
