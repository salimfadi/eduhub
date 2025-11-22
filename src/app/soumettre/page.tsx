"use client";
import { useState } from "react";

export default function Soumettre() {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/formations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titre, description, categorie }),
    });
    alert("Formation soumise !");
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Publier une formation</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Titre</label>
          <input type="text" className="form-control" value={titre} onChange={e => setTitre(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Catégorie</label>
          <select className="form-select" value={categorie} onChange={e => setCategorie(e.target.value)}>
            <option>Technologie</option>
            <option>Langues</option>
            <option>Business</option>
            <option>Autre</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Soumettre</button>
      </form>
    </div>
  );
}
