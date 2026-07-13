export default function LoginPage() {
  return (
    <main>
      <div className="card">
        <header>
          <div aria-hidden="true">⚡</div>
          <h1>PrepAI</h1>
        </header>

        <p>Choose a provider to continue.</p>

        <button type="button" aria-label="Sign in with Google">
          Continue with Google
        </button>

        <button type="button" aria-label="Sign in with GitHub">
          Continue with GitHub
        </button>
      </div>
    </main>
  );
}
