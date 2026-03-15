import { SectionType } from "./section";

export type PostType = {
  _id: string;
  title: string;
  slug: string;
  sections: SectionType[];
}