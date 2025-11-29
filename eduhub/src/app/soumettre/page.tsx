export default function Home() {
  return (
    <main className="container py-5">
      <h1>Bienvenue sur EduHub 🎉</h1>
      <div className="text-center mt-4">
        <a href="/formations" className="btn btn-outline-primary me-2">Voir les formations</a>
        <a href="/soumettre" className="btn btn-primary">Soumettre une formation</a>
      </div>
    </main>
  );
}
