function BadgeCollection({ chapters, earnedBadges }) {
  return (
    <section className="badge-collection" aria-labelledby="badges-title">
      <h3 id="badges-title">Rozet Koleksiyonu</h3>
      {earnedBadges.length === 0 && <p>Henüz rozet kazanılmadı.</p>}
      <div className="badge-grid">
        {chapters.map((chapter) => {
          const isEarned = earnedBadges.includes(chapter.badge);

          return (
            <article
              className={`badge-card ${isEarned ? 'is-earned' : 'is-locked'}`}
              key={chapter.badge}
            >
              <span className="badge-icon">{chapter.icon}</span>
              <strong>{chapter.badge}</strong>
              <em>{isEarned ? 'Kazanıldı' : 'Kilitli'}</em>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default BadgeCollection;
