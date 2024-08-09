const email = "admin@pokewiki.com";
const password = "password";

interface LoginUserProps {
  email: string;
  password: string;
  error?: string;
  isLoggedin?: string;
}

export async function loginUserService(userData: LoginUserProps) {
  try {
    if (userData.email !== email || userData.password !== password)
      return { error: "Invalid email or password." };

    return { isLoggedin: "true" };
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}
