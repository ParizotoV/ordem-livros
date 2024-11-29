import { error } from "@sveltejs/kit";
import series from "../../../constants/series.js";
import type { Serie } from "../../../entities/Series.js";

export function load(data): Serie {
  const authorId = data.params.id;

  const serie = series.find(author => author.id == authorId);

  return serie ? serie : error(404, "Série não encontrado");
}
