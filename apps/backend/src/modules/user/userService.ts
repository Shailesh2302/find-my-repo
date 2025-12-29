import { prisma } from "@repo/db";

export async function userInfo(user: any) {
  try {
    const userId = user?.id;

    const userData = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
        avatar_url: true,
        created_at: true,
        display_name: true,
        last_login_at: true,
        profile_url: true,
        username: true,
      },
    });
    if (!userData) {
      throw new Error("User data not found");
    }

    return userData;
  } catch (error) {
    console.log(error);
  }
}
