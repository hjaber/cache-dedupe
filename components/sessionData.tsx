import { getSession } from "@/lib/session";

export default async function UserData() {
  const user = await getSession(42);
  return (
    <div className="">
      <div className="rounded-lg p-6">
        <div className="text-lg font-bold">{user.username}</div>
        <div className="text-gray-500">
          <div>ID: {user.id}</div>
          <div>Email: {user.email}</div>
          <div>Token: {user.token}</div>
        </div>
      </div>
    </div>
  );
}
