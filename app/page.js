"use client";
import { useEffect } from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";


export default function Home() {
  const { user } = useUser();
  
  const createUser = useMutation(api.user.createUser)

  useEffect(() => {
    if (user) checkUser();
  }, [user]);

  const checkUser = async () => {
    try {
      const result = await createUser({
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl,
        userName: user?.fullName, 
      });
  
      console.log(result);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  
  

  return (
    <div>
      <h1>Hello There !!</h1>
      <Button>Hello</Button>
      <UserButton />
    </div>
  );
}
