import { useState } from "react";
import {
  default as SignUpForm
} from "../components/views/SignUpForm";

const Register = () => {
  const [error, setError] = useState(null);

  return (
    <div className=" w-full ">
      {error && (
        <p className=" text-red-600 text-3xl text-center font-bold pt-5">
          Error: {error.response.data.message}
        </p>
      )}
      <SignUpForm setError={setError} />
    </div>
  );
};

export default Register;
