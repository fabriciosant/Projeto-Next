import LoginForm from "@/components/login-form";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-background">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
