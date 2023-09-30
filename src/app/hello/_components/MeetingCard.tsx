"use client";
import { useSearchParams } from "next/navigation";

import { PopupModal } from "react-calendly";

import { useCallback } from "react";
import Button from "@mui/joy/Button";
export default function MeetingCard() {
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("new-meeting") === "true";
  const deleteQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete(name);
      return params.toString();
    },
    [searchParams]
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      debugger;
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      <Button id="__next" onClick={() => createQueryString("new-meeting", "true")}>
        Lets Meet :)
      </Button>
      {typeof window !== "undefined" && (
        <PopupModal
          url="https://calendly.com/talpivena9/new-meeting"
          rootElement={document.getElementById("__next")!}
          onModalClose={() => deleteQueryString("new-meeting")}
          open={isOpen}
        />
      )}
    </>
  );
}
