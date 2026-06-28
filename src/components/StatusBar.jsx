function StatusBar({ totalScore, earnedBadgeCount, completedChapterCount, chapterCount }) {
  return (
    <div className="status-bar" aria-label="İlerleme durumu">
      <span>
        <strong>Toplam Puan</strong>
        {totalScore}
      </span>
      <span>
        <strong>Rozet Sayısı</strong>
        {earnedBadgeCount}
      </span>
      <span>
        <strong>Tamamlanan Dosya</strong>
        {completedChapterCount} / {chapterCount}
      </span>
    </div>
  );
}

export default StatusBar;
