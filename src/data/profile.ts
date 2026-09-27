export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  image: "/profile.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "blog", title: "블로그", url: "https://velog.io" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
  { id: "youtube", title: "YouTube", url: "https://youtube.com" },
];
