import { useFormik } from "formik";
import axios from "../axios/config.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetails, setTokens } from "../redux/userReducer.js";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const body = {
          email: values.email,
          password: values.password,
        };
        console.log(body, "=========");
        const response = await axios.post("/login", body);
        console.log(response);
        if (response?.data?.status === true) {
          localStorage.setItem("userAccessToken", response?.data?.token);
          localStorage.setItem('name',response?.data?.userData.username)

          dispatch(setUserDetails({ payload: response?.data?.userData }));
          dispatch(setTokens(response?.data?.token));

          toast.success("Login  Success");
          navigate("/");
        } else {
          toast.warn("Invalid Email or Password !");
        }
      } catch (err) {
        return { status: false, message: "some issues in Signup" };
      }
    },
  });
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="data:image/png;base64,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"
            alt="LOGO"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Signup
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
