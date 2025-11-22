export default function Home() {
  return (
    <main className="container py-5">
      <h1 className="display-4 text-center mb-4">EduHub</h1>
      <p className="lead text-center">Découvrez des formations proposées par des experts indépendants.</p>
      <div className="text-center">
        <a href="/soumettre" className="btn btn-primary btn-lg">Publier une formation</a>
      </div>
    </main>
  );
}
