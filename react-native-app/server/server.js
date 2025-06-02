import cors from "cors";
import express from "express";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const movies = [];
let id = 1;
app.post("/", (req, res) => {
  const img =
    "https://imgs.search.brave.com/8UThYVbtEtUvv6I_r4gDLU6gLPUpvHc43z1J5Xym9tE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuanVzdHdhdGNo/LmNvbS9wb3N0ZXIv/MTY1NTExNDAxL3Mz/MzIvbWFycmlhZ2Ut/c3Rvcnk";
  const { title, details, author } = req.body;
  const newMovie = {
    id: id++,
    title: title,
    details: details,
    author: author,
    img: img,
  };
  movies.push(newMovie);
  res.status(201).json({ msg: "ok" });
});
app.get("/", (req, res) => {
  res.status(200).json({ movies });
});
app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return res.status(404).json({ message: "Película no encontrada" });
  }

  res.status(200).json(movie);
});

app.listen(3000, () => {
  console.log("the port listen in the port 3000");
});
