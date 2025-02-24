import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ClientPage from "../ClientPage"; // Importando o componente de cliente

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="w-100">
      <ClientPage session={session}/>
    </div>
  )
}
