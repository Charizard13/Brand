import LogoSvg from "@/assets/logo.svg";
import Sheet from "@mui/joy/Sheet";

type Props = {
  size: number;
};

export default function Logo({ size }: Props) {
  return (
    <Sheet
      href="/hello"
      sx={{
        cursor: "pointer",
        backgroundColor: "transparent",
        width: size,
        height: size,
        "svg path": {
          ":hover": {
            color: "success.400",
            transition: "all 0.5s ease-in-out",
          },
        },
      }}
      component="a"
      children={<LogoSvg />}
    />
  );
}
