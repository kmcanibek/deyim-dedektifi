function ChapterCard({ chapter, isCompleted, onOpen }) {
  return (
    <article className={`chapter-card ${isCompleted ? 'is-completed' : ''}`}>
      <div className="chapter-cover">
        <img src={chapter.coverImage} alt={`${chapter.title} bölüm görseli`} />
      </div>

      <span className="chapter-icon" aria-hidden="true">
        {chapter.icon}
      </span>
      <span className="chapter-number">
        {isCompleted ? '✓ ' : ''}
        Dosya {chapter.id}
      </span>
      <span className="chapter-badge">
        {isCompleted
          ? `Kazanılan Rozet: ${chapter.badge}`
          : `Kazanılacak Rozet: ${chapter.badge}`}
      </span>
      <span className="chapter-status">
        {isCompleted ? 'Tamamlandı' : 'Henüz tamamlanmadı'}
      </span>
      <h3>{chapter.title}</h3>
      <p>{chapter.description}</p>
      <button className="chapter-button" type="button" onClick={onOpen}>
        Dosyayı Aç
      </button>
    </article>
  );
}

export default ChapterCard;
