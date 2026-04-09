export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-7xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Numerical Method
          </h1>
          <div className="w-full max-w-md">
            <label className="block text-3xl font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              made by Tharatape Saelee 6604062636305
            </label>
            <label className="block text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-2 mt-6">
              Select Your calculation method
            </label>
            <label className="block text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-2 mt-6">
            </label>
            <select
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg text-black dark:bg-zinc-800 dark:border-zinc-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
              <option value="">-- Select a Method --</option>
              <option value="newton">Newton's Method</option>
              <option value="bisection">Bisection Method</option>
              <option value="secant">Secant Method</option>
              <option value="gauss">Gaussian Elimination</option>
              <option value="rk4">Runge-Kutta 4th Order</option>
            </select>

            
            <label className="block text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-2 mt-6">
            </label>
            
            <input
              type="text"
              placeholder="Enter your input"
              className="w-full px-4 py-2 border border-zinc-300 rounded-lg text-black dark:bg-zinc-800 dark:border-zinc-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
