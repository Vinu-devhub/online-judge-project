import { useState } from "react";
import LoginForm from "../components/views/LoginForm";

const Login = () => {
  const [error, setError] = useState(null);

  return (
    <div className=" w-full ">
      {error && (
        <p className=" text-red-600 text-3xl text-center font-bold pt-5">
          Error: {error.response.data.message}
        </p>
      )}
      <LoginForm setError={setError} />
    </div>
  );
};

export default Login;
