import LoginForm from "@/components/auth/LoginForm";
import SignInWithGoogle from "@/components/auth/SignInWithGoogle";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      {/* Left side - Dark Gray */}
      <div className="h-full w-full bg-[#2C2C35]" />

      {/* Right side - Login Form */}
      <div className="flex flex-col items-center justify-center overflow-y-auto bg-white p-8 lg:p-16">
        <div className="flex w-full max-w-md flex-col gap-8">
          {/* Logo */}
          <div className="mb-4 text-center lg:text-left">
            <h1 className="text-4xl font-light tracking-widest text-black">
              OtterGuide
            </h1>
          </div>

          {/* Express Login */}
          <div className="flex flex-col gap-2">
            <span className="text-muted-foreground text-xs font-medium">
              Sign in with:
            </span>
            <SignInWithGoogle />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="text-muted-foreground pb-1 font-medium transition-colors hover:text-black"
            >
              Log in
            </Link>
            <Link
              href="/sign-up"
              className="text-muted-foreground pb-1 font-medium transition-colors hover:text-black"
            >
              Sign up
            </Link>
          </div>

          {/* Form */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
