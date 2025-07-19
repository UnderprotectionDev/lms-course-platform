import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon } from "lucide-react";

export default function Login() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome back</CardTitle>
        <CardDescription>Login with your Github Email Account</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button className="w-full" variant="outline">
          <GithubIcon className="size-4" />
          Sign in with Github
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-x-0 after:top-1/2 after:h-px after:bg-border">
          <span className="relative z-10 bg-card px-2 text-muted-foreground">
            Or contunue with
          </span>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="me@example.com" />
          </div>
          <Button className="w-full">Continue with Email</Button>
        </div>
      </CardContent>
    </Card>
  );
}
