"use client";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { authClient } from "@/server/better-auth/client";
import { useRouter } from "next/navigation";

export default function LogOutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex w-full cursor-pointer items-center gap-2 px-2 py-1"
    >
      <LogOut />
      Log out
    </button>
  );
}
