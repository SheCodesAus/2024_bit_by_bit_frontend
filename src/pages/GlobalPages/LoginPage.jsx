// COMPONENTS
import LoginForm from "../../components/UserComponents/LoginForm";

function LoginPage() {
  return (
    <main className="flex min-h-screen">
      {/* LHS: Form */}
      <div className="w-3/5 flex justify-center items-center bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold mb-4">Log In</h1>
          <LoginForm />
        </div>
      </div>
      
      {/* RHS: image */}
      <div className="w-2/5 bg-purple-500">
      </div>
    </main>
  );
}

export default LoginPage;
