export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  created: string;
  image: string;
  location: {
    name: string,
    url: string
  };
}
