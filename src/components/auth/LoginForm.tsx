"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldContent, FieldError } from "@/components/ui/field";
import { useState } from "react";

interface LoginFormValues {
  emailOrUsername: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4"
    >
      <Field>
        {/* <FieldLabel>Email or username</FieldLabel> */}
        <FieldContent>
          <div className="relative">
            <Input
              {...register("emailOrUsername", {
                required: "Email or username is required",
              })}
              placeholder="email or username"
              className="ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border-0 bg-gray-100 px-3 py-6 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </FieldContent>
        <FieldError errors={[errors.emailOrUsername]} />
      </Field>

      <Field>
        {/* <FieldLabel>Password</FieldLabel> */}
        <FieldContent>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              placeholder="password"
              className="ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border-0 bg-gray-100 px-3 py-6 pr-16 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 flex -translate-y-1/2 items-center gap-2 text-xs font-medium"
            >
              Show
            </button>
          </div>
        </FieldContent>
        <FieldError errors={[errors.password]} />
      </Field>

      <Button
        type="submit"
        className="text-md mt-2 h-12 w-full cursor-pointer bg-[#333333] font-medium text-white hover:bg-[#444444]"
      >
        Log in
      </Button>
    </form>
  );
}
