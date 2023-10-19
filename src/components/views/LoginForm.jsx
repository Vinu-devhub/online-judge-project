/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import Input from "../ui/Input";
import SolidButton from "../ui/SolidButton";

const LoginForm = ({ setError }) => {
  //   const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));

    try {
      await authService
        .login({
          email: data.get("email"),
          password: data.get("password"),
        })
        .then((response) => {
          console.log("Response: ", response);
          if (response?.success) {
            navigate("/profile", { replace: true });
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log("catch: ", error);
          setError(error);
        });
    } catch (error) {
      console.log(error);
      setError(error);
    }

    // console.log("Response", response);
  };

  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className=" bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Don&apos;t have an account yet?
              <NavLink
                className="text-blue-600 decoration-2 pl-1 hover:underline font-medium"
                to="/register"
              >
                Sign up here
              </NavLink>
            </p>
          </div>

          <div className="mt-2">
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200  after:flex-[1_1_0%] after:border-t after:border-gray-200  dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600"></div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4 pb-10">
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                />

                <Input
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <SolidButton title={"Sign In"} type={"submit"} />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
