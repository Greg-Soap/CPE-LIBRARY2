import { SignupForm } from "../../_components/sign-form";
import AuthLayout from "../auth-layout";

export default function signupPage() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}
