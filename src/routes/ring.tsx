import { useLayoutEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CombatShell } from "@/game/ui/combat-shell";

export const Route = createFileRoute("/ring")({ component: RingPage });

function RingPage() {
  useLayoutEffect(() => {
    let stop = () => {};
    let cancelled = false;
    void import("@/game/boot/combat").then(({ mountCombat }) => {
      if (cancelled) return;
      stop = mountCombat();
    });
    return () => {
      cancelled = true;
      stop();
    };
  }, []);
  return <CombatShell />;
}
