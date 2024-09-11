import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const elementsIds = {
  services: "services",
  contacts: "contacts",
} as const;

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/talpiven",
  linkedinImageUrl:
    "https://media.licdn.com/dms/image/v2/D4D03AQG_oW5W0-jAvw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726026808276?e=1731542400&v=beta&t=CFghPorIigsp88xMp2cTPmTm5ehs-eXScmUvQEtBMy0",
} as const;
