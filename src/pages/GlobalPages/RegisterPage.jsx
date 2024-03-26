// COMPONENTS
import RegisterUserForm from "../../components/UserComponents/RegisterUserForm";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <main className="flex min-h-screen">
      {/* LHS: Form */}
      <section className="w-3/5 flex justify-center items-center bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold mb-4">Register User</h1>
          <RegisterUserForm />
          <p className="mb-4 text-center">
            Already have an account? <Link to="/" className="text-blue-500 hover:text-blue-700">Click here to login</Link>
          </p>
        </div>
      </section>
      
      {/* RHS: image */}
      <section 
      className="w-2/5 bg-purple-500">
      </section>
    </main>
  );
}

export default RegisterPage;
