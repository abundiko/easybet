export default function LoginForm() {
  return (
    <form className="flex flex-col gap-3 max-w-[400px]">
      <h1 className="text-3xl ">Welcome back</h1>
      <p>Welcome back, please enter your details</p>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your Email"
        className="input-field "
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        className="input-field "
      />

      <div className="flex">
        <input type="checkbox" />
        <span className="text-sm">Remember</span>
        <a href="" className="text-sm mx-auto">
          Forgotten password
        </a>
      </div>
      <button className="btn-primary p-2">Sing in</button>
      <div className="flex gap-3">
        <button className="input-field w-1/2 items-center justify-center flex">
          <img src="/images/google.png" className="w-3/12" alt="" />
          <p> Google</p>
        </button>

        <button className="input-field w-1/2 items-center justify-center flex gap-1">
          <img src="/images/facebook.png" className="w-3/12" alt="" />
          <p> Facebook</p>
        </button>
      </div>
      <p className="text-center">
        Don't have account?
        <a href="" className="text-primary">
          Sing up
        </a>
      </p>
    </form>
  );
}
