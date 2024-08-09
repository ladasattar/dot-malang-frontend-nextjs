"use cllient";

import React from "react";
import toast from "react-hot-toast";
import { Input } from "../fields/Input";
import { useFormState } from "react-dom";
import { loginUserAction } from "@/components/actions/auth-action";
import { MdCatchingPokemon } from "react-icons/md";
import { redirect } from "next/navigation";

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: "",
  success: false,
};

export default function LoginForm() {
  const [formState] = useFormState(loginUserAction, INITIAL_STATE);

  React.useEffect(() => {
    if (formState) {
      if (formState?.message) toast.error(formState?.message);
    }
  }, [formState]);

  return (
    <form
      action={async (formData) => {
        const res = await loginUserAction(formState, formData);
        if (res?.success) redirect("/pokemon/explore");
      }}
    >
      <Input
        id="email"
        label="Email"
        name="email"
        type="email"
        defaultValue="admin@pokewiki.com"
        placeholder="Email"
        required
        className="mb-2"
      />
      <Input
        id="password"
        label="Password"
        name="password"
        defaultValue="password"
        placeholder="Password"
        required
        type="password"
      />
      <button className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-2 px-4 mt-4 rounded flex items-center justify-center">
        <MdCatchingPokemon className={`mr-2 text-lg`} />
        Login
      </button>
    </form>
  );
}
