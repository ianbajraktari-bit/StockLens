import { Component, type ReactNode } from 'react';
import { Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4">
          <div className="text-center space-y-4 max-w-sm">
            <p className="text-4xl">😵</p>
            <h1 className="text-lg font-bold text-text-primary">Something went wrong</h1>
            <p className="text-sm text-text-secondary">
              This lesson hit an unexpected error. Try going back to the home screen.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = '/';
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
