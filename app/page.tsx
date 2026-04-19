export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center font-sans p-4">
      <main className="bg-gray-800 rounded-xl shadow-2xl p-10 max-w-lg w-full transform transition-all duration-300 hover:scale-105">
        <div className="flex flex-col items-center gap-8 text-white">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-6">
            <h1 className="text-5xl font-extrabold text-white text-center whitespace-nowrap">
              Numerical Method
            </h1>
          </div>
          <div className="w-full max-w-md">
            <p className="text-lg text-gray-400">made by Tharatape Saelee</p>
            <p className="text-md text-gray-500">6604062636305</p>
            <label className="block text-xl font-medium text-gray-200 mb-4 mt-8">Select Your calculation method</label>
            <select
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" >
              <option value="">-- Select a Method --</option>
              <option value="newton">Newton's Method</option>
              <option value="bisection">Bisection Method</option>
              <option value="secant">Secant Method</option>
              <option value="gauss">Gaussian Elimination</option>
              <option value="rk4">Runge-Kutta 4th Order</option>
            </select>

            
            <label className="block text-xl font-medium text-gray-200 mb-4 mt-8">Enter your input here</label>
            
            <input
              type="text"
              placeholder="Enter your input"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
            <button
            type="button"
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200">
            Calculate
            </button>


          </div>
        </div>
      </main>
    </div>
  );
}
