import { SignupForm } from "../../_components/signForm";
import AuthLayout from "../auth-layout";

export default function signupPage() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}
