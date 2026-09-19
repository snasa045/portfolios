import './App.css';

export default function App() {
  return (
    <main
      style={{
        minHeight: '100svh',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div>
        <h1>Sid — Portfolio</h1>
        <p style={{ color: '#666' }}>
          Coming soon. This app is a placeholder to keep the monorepo scalable.
          <br />
          See <code>apps/sneha-portfolio</code> for the active template.
        </p>
      </div>
    </main>
  );
}
