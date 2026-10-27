import { useState } from "react";
import ProfileCard from "./profile-card";
import "./profile-section.css";

export default function ProfilesSection({ profiles }) {
  const [query, setQuery] = useState("");

  const results = profiles.filter((p) =>
    `${p.name} ${p.role} ${p.location ?? ""}`
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );

  return (
    <section className="profiles">
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <input
          aria-label="Search profiles"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a name..."
        />
        <button type="button" onClick={() => setQuery("")}>Clear</button>
      </form>

      <p aria-live="polite">{results.length} of {profiles.length} profiles</p>

      <div className="grid">
        {results.length ? (
          results.map((p) => <ProfileCard key={p.id} {...p} />)
        ) : (
          <p>No profiles found.</p>
        )}
      </div>
    </section>
  );
}