import { Link } from "wouter";
import { ArrowRight, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center circuit-bg">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-[#e60000]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-[#e60000]" />
        </div>
        <h1 className="font-heading text-6xl font-bold text-[#e60000] mb-2">404</h1>
        <h2 className="font-heading text-xl font-bold mb-3">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you are looking for does not exist. It may have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#e60000] text-white px-7 py-3.5 rounded-sm text-sm font-semibold hover:bg-[#cc0000] transition-all"
        >
          Back to Home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
