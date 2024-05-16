import { NavLink } from "react-router-dom";
import type { FallbackProps } from "react-error-boundary";

export function ErrorLayout({ resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-1 flex-col place-content-center text-center items-center">
      <h1 className="text-2xl sm:text-5xl font-bold mb-4 text-accent">
        There was an error!
      </h1>
      <button
        onClick={resetErrorBoundary}
        className="bg-amber-500 border border-amber-500 hover:bg-amber-600 text-white font-bold py-1 px-2 rounded"
      >
        <NavLink to="/" className="text-xl">
          Go HomePage
        </NavLink>
      </button>
    </div>
  );
}
