import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import type { Metadata } from "next";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Gandalf House",
  description: "Gandalf House",
};

export default function Home() {
  return (
    <div>
      <Stack
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Logo size={140} />
        <Typography
          level="h1"
          fontSize={"1.75rem"}
          sx={{
            mt: 3,
          }}
        >
          Gandalf House
        </Typography>
      </Stack>
      <Typography
        style={{
          position: "absolute",
          top: "75%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        level="body-sm"
      >
        Click on the hat if you want to take your vision on a magical journey..
      </Typography>
    </div>
  );
}
