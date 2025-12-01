import { getSession } from "@/server/better-auth/server";
import { redirect } from "next/navigation";

export default async function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return <>{children}</>;
}
