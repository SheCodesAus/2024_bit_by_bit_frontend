// COMPONENTS
import LoginForm from "../../components/UserComponents/LoginForm";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <main className="flex flex-col sm:flex-row min-h-screen">
      {/* LHS: Form */}
      <section className="flex-1 flex justify-center items-center bg-white px-4 sm:w-3/5">
        <div className="w-full max-w-md">
          <img id="text logo" src="/imgs/BTlogo.png" className="shadow-md w-full mb-8"/>
          <h1 className="text-xl font-bold mb-4">Log In</h1>
          <LoginForm />
          <p className="my-16 text-center">
            Don't have an account yet? <Link to="/register" className="text-blue-500 hover:text-blue-700"> <br/> Click here to register</Link>
          </p>
          <div className="w-full flex justify-center">
            <img id="SClogo" src="/imgs/SClogo.jpg" className="w-1/3"/>
          </div>
        </div>
      </section>
      
      {/* RHS: image */}
      <section className=" flex-1 sm:w-2/5 bg-purple-500">
        <img id="SCimage9" src="/imgs/SCportrait9.png" className="w-full h-screen object-cover" />
      </section>
    </main>
  );
}

export default LoginPage;
