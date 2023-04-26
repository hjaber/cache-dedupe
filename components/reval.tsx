"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function Reval() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  function handleReval() {
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <button
      className={`${
        isPending ? "text-opacity-50" : ""
      } mx-auto transition duration-500 ease-out border p-2 rounded`}
      onClick={handleReval}
      disabled={isPending}
    >
      {isPending ? "refreshing..." : "router.refresh()"}
    </button>
  );
}
