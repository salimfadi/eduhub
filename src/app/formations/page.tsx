import Link from "next/link";

const formations = [
  { id: 1, titre: "Formation Next.js", description: "Déployez vos projets sur Vercel", lien: "/formations/1" },
  { id: 2, titre: "Formation Anglais", description: "Améliorez votre anglais professionnel", lien: "/formations/2" },
];

export default function Formations() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Catalogue des formations</h2>
      <div className="row">
        {formations.map(f => (
          <div className="col-md-4 mb-3" key={f.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{f.titre}</h5>
                <p className="card-text">{f.description}</p>
                <Link href={f.lien} className="btn btn-primary">Découvrir</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
