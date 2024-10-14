import type { PageProps } from "@/types/page";
import UserRegisterForm from "./components/user-register-form";
import Layout from "@/layouts/Layout";

export default function Page({ params }: PageProps) {
  return (
    <Layout params={params}>
      <h1 className="mb-4">Créer votre profil expert</h1>
      <p className="mb-12">Une fois votre inscription effectuée et votre email validé. Une vérification de votre compte sera effectué et vous pourrez vous connecter avec celui-ci.</p>
      <UserRegisterForm />
    </Layout>
  );
}
