"use server";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma.jsx";

async function syncUser() {
  try {
    const user = await currentUser();
    if (!user) return;
    console.log("Syncing user:", user.id);

    const existinguser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });
    if (existinguser) return existinguser;
    const dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.emailAddresses?.[0]?.emailAddress,
        phone: user.phoneNumbers?.[0]?.phoneNumber || null,
      },
    });
    return dbUser;
  } catch (error) {
    console.log("Error in syncUser server action", error);
  }
}

export default syncUser;
