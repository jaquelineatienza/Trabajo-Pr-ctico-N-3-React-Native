
const API_URL = "http://localhost:3000/"; // usa tu IP real en dispositivo físico

export interface Movie {
    id: any,
    title: string,
    details: string,
    author: string,
    img: any

}
export const saveMovie = async (
    title: string,
    details: string,
    author: string
): Promise<Movie> => {
    const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, details, author }),
    });

    if (!response.ok) {
        throw new Error("Error al guardar la película");
    }

    const newMovie = await response.json();
    return newMovie;
};

export const getAllMovies = async (): Promise<Movie[]> => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data.movies
};

export const getMovieById = async (id: number): Promise<Movie> => {
    console.log(`Llamando al backend con ID: ${id}`);

    const response = await fetch(`${API_URL}${id}`);
    console.log(response)
    if (!response.ok) {
        throw new Error("Película no encontrada");
    }
    return await response.json();
};
