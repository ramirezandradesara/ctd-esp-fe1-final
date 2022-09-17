interface Personajes {
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    gender: string;
    location: Location
    episode: string[];
}

interface Location {
    name: string;
    url: string
}
export default Personajes; 