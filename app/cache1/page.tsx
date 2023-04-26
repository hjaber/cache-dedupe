import Reval from "@/components/reval";
import UserData from "@/components/sessionData";
import { Suspense } from "react";

export default function Cache1() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-400">
        export const runtime = `&quot;`experimental-edge`&quot;` enabled
      </h1>
      <Suspense
        fallback={
          <div className="flex min-h-screen flex-col items-center justify-center">
            /cache1/suspense...
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

export const runtime = "experimental-edge";
