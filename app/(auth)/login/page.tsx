import { LoginForm } from "../../_components/loginform";
import AuthLayout from "../auth-layout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <h6 className="font-extralight text-xs mb-2">Welcome back</h6>
      <h3 className="text-4xl font-bold mb-[56px]">Sign in to continue</h3>
      <LoginForm />
    </AuthLayout>
  );
}
