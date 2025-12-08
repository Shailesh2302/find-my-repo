import { prisma } from "@repo/db";

export default async function Page() {
  const user = await prisma.user.findFirst();

  return (
    <div className="text-5xl justify-center pt-10 text-red-500">
      {user?.email}
    </div>
  );
}
