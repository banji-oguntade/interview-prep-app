export default function LoginPage() {
  return (
    <main>
      <div className="card">
        <header>
          <div className="logo-icon" aria-hidden="true">⚡</div>
          <h1>PrepAI</h1>
        </header>

        <span className="badge">✓ AI-powered interview practice</span>

        <h2 className="sign-in-heading">Sign in to PrepAI</h2>

        <p className="description">
          Practice technical interviews with AI feedback. <br />
          No password needed.
        </p>

        <button className="provider-button" type="button" aria-label="Sign in with Google">
          <span aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M21.6 12.23c0-.78-.07-1.53-.2-2.25H12v4.26h5.39a4.61 4.61 0 0 1-2 3.03v2.5h3.24c1.9-1.75 2.99-4.33 2.99-7.54Z" fill="#4285F4" />
              <path d="M12 22c2.7 0 4.96-.9 6.61-2.43l-3.24-2.5c-.9.6-2.05.96-3.37.96-2.59 0-4.79-1.75-5.58-4.1H3.08v2.58A10 10 0 0 0 12 22Z" fill="#34A853" />
              <path d="M6.42 13.93A6.02 6.02 0 0 1 6.42 10.07V7.49H3.08a10 10 0 0 0 0 12.88l3.34-2.44Z" fill="#FBBC05" />
              <path d="M12 6.04c1.46 0 2.78.5 3.82 1.49l2.86-2.86A9.96 9.96 0 0 0 12 2a10 10 0 0 0-8.92 5.49l3.34 2.44C7.21 7.79 9.41 6.04 12 6.04Z" fill="#EA4335" />
            </svg>
          </span>
          Continue with Google
        </button>

        <button className="provider-button" type="button" aria-label="Sign in with GitHub">
          <span aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.68.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.2-3.37-1.2-.45-1.16-1.11-1.47-1.11-1.47-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.54 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.03A9.4 9.4 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
          </span>
          Continue with GitHub
        </button>

        <div className="divider">secure sign-in</div>

        <div className="info-box">
          <span className="info-icon" aria-hidden="true">✓</span>
          <p>We only access your name and email. No posting, no repository access — ever.</p>
        </div>

        <p className="privacy-text">
          By signing in, you agree to our{' '}
          <a href="#terms">Terms of service</a> and{' '}
          <a href="#privacy">Privacy policy</a>.
        </p>
      </div>
    </main>
  );
}

