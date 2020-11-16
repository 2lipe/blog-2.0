export interface PageContext {
  timeToRead: number;
  fields: {
    slug: string;
  };
  frontmatter: {
    background: string;
    category: string;
    date: string;
    description: string;
    title: string;
  };
}
