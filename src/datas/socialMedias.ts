import { iconPaths } from "../components/IconPaths";

export const socialMedias: SocialMedia[] = [
  {
    title: "Twitter",
    icon: "twitter",
    link: "https://www.twitter.com/ezraghzf",
  },
  {
    title: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/ezraghz/",
  },
  {
    title: "Github",
    icon: "github",
    link: "https://github.com/ezraghzf",
  },
  {
    title: "Linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/r-m-ezra-ghaziafi-a3955b152/",
  },
  {
    title: "Email",
    icon: "email",
    link: "mailto:ezraghzfwork@gmail.com",
  },
];

interface SocialMedia {
  title: string;
  link: string;
  icon: keyof typeof iconPaths;
}
