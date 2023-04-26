import Reval from "@/components/reval";
import UserData from "@/components/sessionData";
import { Suspense } from "react";

export default function Cache4() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-400">
        default runtime <span className="text-gray-700">nodejs (default)</span>
      </h1>
      <Suspense
        fallback={
          <div className="flex min-h-screen flex-col items-center justify-center">
            /cache4/suspense...
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
