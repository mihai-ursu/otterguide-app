import { getSession } from "@/server/better-auth/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return <h1>Welcome {session.user.name}</h1>;
}
