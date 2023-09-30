import Stack from "@mui/joy/Stack";
import NextLink from "next/link";
import Link from "@mui/joy/Link";
import MeetingCard from "./MeetingCard";
import DrawerMobileNavigation from "./DrawerMobileNavigation";
export default function NavBar() {
  return (
    <Stack
      component="nav"
      direction={"row"}
      justifyContent={"space-between"}
      sx={{
        alignItems: "center",
        padding: "1rem",
        color: "white",
      }}
    >
      <DrawerMobileNavigation />
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
        }}
        direction={"row"}
        spacing={5}
      >
        <NextLink href="/hello" passHref>
          <Link>Hello</Link>
        </NextLink>
        <NextLink href="/about-us" passHref>
          <Link>About Us</Link>
        </NextLink>
        <NextLink href="/our-services" passHref>
          <Link>Our Services</Link>
        </NextLink>
        <NextLink href="/recent-projects" passHref>
          <Link>Recent Projects</Link>
        </NextLink>
      </Stack>
      <MeetingCard />
    </Stack>
  );
}
