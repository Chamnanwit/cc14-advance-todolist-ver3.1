import AuthPhoto from "../assets/auth.png";

function LoginPage() {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="flex-1 hidden lg:flex justify-center items-center">
        <div className="p-16">
          <img src={AuthPhoto} alt="banner" className="w-full" />
        </div>
      </div>
      {/* Rigth */}
      <div className="flex-1 flex items-center justify-center">
        <div className="m-[100px] flex flex-col gap-8 w-[80%]">
          <h1 className="text-9xl font-bold mb-12">Login</h1>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="example@mail.com"
              className="p-6 text-4xl outline-none rounded-lg border-2"
            />
            <input
              className="p-6 text-4xl outline-none rounded-lg border-2"
              placeholder="your password"
              type="password"
            />
            <button
              type="submit"
              className="mt-4 p-4 py-6 text-4xl bg-[#db4c3f] text-white rounded-lg hover:bg-red-600"
            >
              Login
            </button>
          </form>
          <div className="flex gap-4">
            <p className="text-2xl text-gray-600 font-bold hover:text-[#db4c3f] cursor-pointer">
              forgot password ?
            </p>
            <p className="text-2xl text-gray-600">
              Don't have an account ?{" "}
              <span className=" font-bold hover:text-[#db4c3f] cursor-pointer ">
                Go to sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
