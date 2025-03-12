export interface Beer {
  id: number;
  name: string;
  image: string;
  price: string;
  type: string;
  rating?: {
    average: number;
  };
}
