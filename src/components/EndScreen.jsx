function EndScreen({
  chapter,
  score,
  totalScore,
  wasAlreadyCompleted,
  onBackToChapters,
  onGoHome,
}) {
  return (
    <section className="complete-screen" aria-labelledby="complete-title">
      <div className="complete-badge">Rozet Kazanıldı</div>
      <h2 id="complete-title">Dosya Tamamlandı</h2>
      <p>Bu bölümdeki anlam karmaşasını çözdün.</p>
      <p className="completion-note">
        {wasAlreadyCompleted
          ? 'Bu dosyayı daha önce tamamlamıştın. Rozet ve toplam puan daha önce kazanıldı.'
          : 'Tebrikler! Bu rozeti koleksiyonuna ekledin.'}
      </p>

      <div className="reward-card">
        <span>Kazanılan rozet</span>
        <strong>{chapter.badge}</strong>
        <em>
          {wasAlreadyCompleted
            ? 'Bu rozet koleksiyonunda zaten var.'
            : 'Yeni rozet koleksiyona eklendi.'}
        </em>
      </div>

      <div className="score-card">
        <span>Bu bölümde kazanılan puan</span>
        <strong>{score}</strong>
      </div>

      <div className="score-card">
        <span>Toplam puan</span>
        <strong>{totalScore}</strong>
      </div>

      <div className="complete-actions">
        <button className="chapter-button" type="button" onClick={onBackToChapters}>
          Görev Dosyalarına Dön
        </button>
        <button className="back-button" type="button" onClick={onGoHome}>
          Ana Sayfaya Dön
        </button>
      </div>
    </section>
  );
}

export default EndScreen;
