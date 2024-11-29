import { error } from "@sveltejs/kit";
import authors from "../../../constants/authors.js";
import type { Author } from "../../../entities/Authors.js";

export function load(data): Author {
  const authorId = data.params.id;

  const author = authors.find(author => author.id == authorId);

  return author ? author : error(404, "Autor não encontrado");
}
