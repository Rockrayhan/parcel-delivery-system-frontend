import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const result = await login(data).unwrap();
      toast.success("Successfully logged in");
      navigate("/");
    } catch (error: any) {
      const errorMessage =
        error?.data?.message ||
        error?.message ||
        "Something went wrong! Please try again.";

      toast.error(errorMessage);
    }
  };

  // ✅ Demo Login Handler
  // Demo credential autofill (NO auto-submit)
  const handleDemoFill = (email: string) => {
    form.setValue("email", email, { shouldDirty: true });
    form.setValue("password", "123456789", { shouldDirty: true });

    toast.info("Demo credentials filled. Click Login to continue.");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form className="p-6 md:p-8" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Login to your account</h1>
                </div>

                {/* Email */}
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    {...form.register("email")}
                    required
                  />
                </div>

                {/* Password */}
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    {...form.register("password")}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Login
                </Button>

                
                {/* 🔥 Demo Credentials */}
                <div className="space-y-2">
                  <p className="text-center text-sm text-muted-foreground">
                    Try demo accounts
                  </p>

                  <div className="grid grid-cols-1 gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleDemoFill("admin@gmail.com")}
                    >
                      Demo Admin Login
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleDemoFill("sender@gmail.com")}
                    >
                      Demo Sender Login
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleDemoFill("receiver@gmail.com")}
                    >
                      Demo Receiver Login
                    </Button>
                  </div>
                </div>

                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link to="/register" className="underline underline-offset-4">
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </Form>

          {/* Right Image */}
          <div className="bg-muted relative hidden md:block">
            <img
              src="/login.png"
              alt="Login illustration"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.6]"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
