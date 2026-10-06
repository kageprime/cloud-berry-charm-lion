import { useLayoutEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HollowShell } from "@/game/ui/hollow-shell";

export const Route = createFileRoute("/hollow")({ component: HollowPage });

function HollowPage() {
  useLayoutEffect(() => {
    let stop = () => {};
    let cancelled = false;
    void import("@/game/boot/hollow").then(({ mountHollow }) => {
      if (cancelled) return;
      stop = mountHollow();
    });
    return () => {
      cancelled = true;
      stop();
    };
  }, []);
  return <HollowShell />;
}
