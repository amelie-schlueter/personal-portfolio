import { type } from "os";

export type WorkType = {
  title: string;
  company: string;
  startingDate: Date;
  endDate: Date | null;
  link: string | null;
  description: string | null;
};

export type ProjectType = {
  title: string;
  slug: string;
  tags: string[];
  year: Date;
  type: string;
  link: string | null;
  imageDarkmode: string;
  imageLightmode: string;
  description: string;
};
