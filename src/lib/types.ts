type Task = {
  id: number;
  title: string;
  checked: boolean;
};

export type Book = {
  title: string;
  author: string;
  cover: string;
  link: string;
  finished: Date | null;
  status: string;
  rating: number | null;
};
