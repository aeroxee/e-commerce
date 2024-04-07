type Blog = {
  id: string;
  title: string;
  slug: string;
  logo: string;
  content: string;
  views: number;
  status: "PUBLISHED" | "DRAFTED";
  updatedAt: Date;
  createdAt: Date;
};
