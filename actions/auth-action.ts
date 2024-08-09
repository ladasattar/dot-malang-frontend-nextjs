"use server";
import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginUserService } from "../services/auth-service";

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

const schemaLogin = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function loginUserAction(prevState: any, formData: FormData) {
  const validatedFields = schemaLogin.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      data: {
        email: formData.get("email"),
        password: formData.get("password"),
      },
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
      success: false,
    };
  }

  const responseData: { error?: string; isLoggedin?: string } =
    await loginUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      data: {
        email: formData.get("email"),
        password: formData.get("password"),
      },
      zodErrors: null,
      message: "Ops! Something went wrong. Please try again.",
      success: false,
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      data: {
        email: formData.get("email"),
        password: formData.get("password"),
      },
      zodErrors: null,
      message: responseData.error,
      success: false,
    };
  }

  cookies().set("isLoggedin", responseData.isLoggedin || "", config);

  return {
    ...prevState,
    data: {
      email: formData.get("email"),
      password: formData.get("password"),
    },
    zodErrors: null,
    message: "Login Successful!",
    success: true,
  };
}

export async function logoutAction() {
  cookies().set("isLoggedin", "", { ...config, maxAge: 0 });
  redirect("/login");
}
