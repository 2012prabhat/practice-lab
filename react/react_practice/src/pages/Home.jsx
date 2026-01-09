import { useNavigate } from "react-router-dom";
import { routesConfig } from "../routesConfig";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">
        React Concepts Playground 🚀
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-4xl">
        {routesConfig
          .filter(route => route.showOnHome)
          .map(({ path, label }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="
                bg-blue-600 text-white font-medium
                px-6 py-4 rounded-xl
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                active:scale-95
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-blue-400
              "
            >
              {label}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Home;
