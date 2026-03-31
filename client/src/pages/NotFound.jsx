import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p>Page not found.</p>
      <Link to="/home">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}
