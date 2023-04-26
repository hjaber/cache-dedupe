import Reval from "@/components/reval";
import UserData from "@/components/sessionData";
import { Suspense } from "react";

export default function Cache2() {
  return (
    <div className="flex flex-col items-center">
      <Suspense
        fallback={
          <div className="flex min-h-screen flex-col items-center justify-center">
            /cache2/suspense...
          </div>
        }
      >
        {/* @ts-expect-error Async Server Component */}
        <UserData />
        <Reval />
      </Suspense>
    </div>
  );
}
