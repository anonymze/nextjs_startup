import type { PageProps } from "@/types/page";
import UserRegisterForm from "../../(not_logged)/inscription/components/user-register-form";

export default function Page({ params }: PageProps) {
  return (
    <>
      <h1 className="mb-12">Modifier votre profil expert</h1>
      <UserRegisterForm />
    </>
  );
}
