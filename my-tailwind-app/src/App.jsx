function App() {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-blue-500 p-4'>
        <div className='w-full max-w-md bg-white rounded-2xl shadow-xl p-8'>
          <div className='text-center mb-8'>
            <h1 className='text-2xl font-semibold text-gray-900'>
              Create an Account
            </h1>
            <p className='text-sm text-gray-500 mt-2'>
              Create a account to continue
            </p>
          </div>

          <form className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='email'
                className='text-sm font-medium text-gray-500'
              >
                Email address:
              </label>
              <input
                type='email'
                id='email'
                placeholder='esteban_schiller@gmail.com'
                className='px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label
                htmlFor='username'
                className='text-sm font-medium text-gray-500'
              >
                Username
              </label>
              <input
                type='text'
                id='username'
                placeholder='Username'
                className='px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <div className='flex justify-between items-center'>
                <label
                  htmlFor='password'
                  className='text-sm font-medium text-gray-500'
                >
                  Password
                </label>
                <a
                  href='#'
                  className='text-xs text-gray-500 hover:text-blue-600 transition-colors'
                >
                  Forget Password?
                </a>
              </div>
              <input
                type='password'
                id='password'
                placeholder='••••••••'
                className='px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div className='flex items-center gap-3 mt-1'>
              <input
                type='checkbox'
                id='terms'
                className='w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 cursor-pointer'
              />
              <label
                htmlFor='terms'
                className='text-sm text-gray-600 cursor-pointer'
              >
                I accept terms and conditions
              </label>
            </div>

            <button
              type='button'
              className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 rounded-lg transition-colors mt-2'
            >
              Sign Up
            </button>
          </form>

          <div className='text-center mt-6'>
            <p className='text-sm text-gray-600'>
              Already have an account?{' '}
              <a
                href='#'
                className='text-blue-500 hover:underline font-medium'
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
