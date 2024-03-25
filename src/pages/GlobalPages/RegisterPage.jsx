// COMPONENTS
import RegisterUserForm from "../../components/UserComponents/RegisterUserForm";
function RegisterPage() {
  return (
    <main className="flex min-h-screen">
      {/* LHS: Form */}
      <div className="w-3/5 flex justify-center items-center bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold mb-4">Register User</h1>
          <RegisterUserForm />
        </div>
      </div>
      
      {/* RHS: image */}
      <div className="w-2/5 bg-purple-500">
      </div>
    </main>
  );
}

export default RegisterPage;
