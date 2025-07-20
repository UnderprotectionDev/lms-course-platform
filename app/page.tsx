"use client";

import { Button } from "@/components/ui/button";
import { ThemeToogle } from "@/components/ui/theme-toogle";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ThemeToogle />

      {session ? (
        <div>
          <p>{session.user?.name}</p>
          <Button
            onClick={() =>
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/");
                    toast.success("Singed out Successfully");
                  },
                },
              })
            }
          >
            Logout
          </Button>
        </div>
      ) : (
        <Button>Login</Button>
      )}
    </div>
  );
}
