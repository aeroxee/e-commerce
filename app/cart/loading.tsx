import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Loader size={60} className="animate-spin" />
      </div>
    </div>
  );
}
