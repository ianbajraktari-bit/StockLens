import { Link, useLocation } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-dark-900/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-accent-light" />
          </div>
          <span className="text-lg font-semibold text-text-primary tracking-tight">
            StockLens
          </span>
        </Link>
        {!isHome && (
          <Link
            to="/"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors no-underline"
          >
            ← Back to companies
          </Link>
        )}
      </div>
    </nav>
  );
}
