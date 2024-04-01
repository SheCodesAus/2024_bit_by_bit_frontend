// COMPONENTS
import RegisterUserForm from "../../components/UserComponents/RegisterUserForm";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <main className="flex flex-col sm:flex-row min-h-screen">
      {/* LHS: Form */}
      <section className="flex-1 flex justify-center items-center bg-white px-4 sm:w-3/5">
        <div className="w-full max-w-md">
          <img id="text logo" src="/imgs/BTlogo.png" className="shadow-md w-full my-8"/>
          <h1 className="text-xl font-bold mb-4">Register A New Account</h1>
          <RegisterUserForm />
          <p className="mb-4 text-center">
            Already have an account? <Link to="/" className="text-blue-500 hover:text-blue-700">Click here to login</Link>
          </p>
        </div>
      </section>
      
      {/* RHS: image */}
      <section className="flex-1 sm:w-2/5 bg-purple-500">
      <img id="SCportrait14" src="/imgs/SCportrait14.jpg" className="w-full h-full object-cover" />
      </section>
    </main>
  );
}

export default RegisterPage;
