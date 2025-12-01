import AuthGuard from "@/components/auth/AuthGuard";

export default async function Dashboard() {
  return (
    <AuthGuard>
      <h1>dashboard</h1>
    </AuthGuard>
  );
}
