import { useState } from 'react';
import BadgeCollection from './components/BadgeCollection';
import BackgroundMusic from './components/BackgroundMusic';
import ChapterCard from './components/ChapterCard';
import EndScreen from './components/EndScreen';
import QuestionCard from './components/QuestionCard';
import StatusBar from './components/StatusBar';
import { chapters } from './data/chapters';

const storageKeys = {
  totalScore: 'deyimDedektifi.totalScore',
  completedChapters: 'deyimDedektifi.completedChapters',
  earnedBadges: 'deyimDedektifi.earnedBadges',
};

const initialChapterState = {
  selectedChapter: null,
  currentQuestionIndex: 0,
  selectedOption: null,
  isAnswered: false,
  score: 0,
};

const questionScores = {
  multipleChoice: 10,
  fillBlank: 15,
  shortAnswer: 20,
};

const readStoredValue = (key, fallbackValue) => {
  try {
    const storedValue = localStorage.getItem(key);

    if (!storedValue) {
      return fallbackValue;
    }

    return JSON.parse(storedValue);
  } catch {
    return fallbackValue;
  }
};

const readStoredScore = () => {
  const storedScore = readStoredValue(storageKeys.totalScore, 0);
  return typeof storedScore === 'number' ? storedScore : 0;
};

const readStoredArray = (key) => {
  const storedArray = readStoredValue(key, []);
  return Array.isArray(storedArray) ? storedArray : [];
};

function App() {
  const [screen, setScreen] = useState('home');
  const [selectedChapter, setSelectedChapter] = useState(
    initialChapterState.selectedChapter,
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    initialChapterState.currentQuestionIndex,
  );
  const [selectedOption, setSelectedOption] = useState(
    initialChapterState.selectedOption,
  );
  const [isAnswered, setIsAnswered] = useState(initialChapterState.isAnswered);
  const [score, setScore] = useState(initialChapterState.score);
  const [totalScore, setTotalScore] = useState(readStoredScore);
  const [completedChapters, setCompletedChapters] = useState(() =>
    readStoredArray(storageKeys.completedChapters),
  );
  const [earnedBadges, setEarnedBadges] = useState(() =>
    readStoredArray(storageKeys.earnedBadges),
  );
  const [completionResult, setCompletionResult] = useState(null);

  const resetChapterProgress = () => {
    setSelectedChapter(initialChapterState.selectedChapter);
    setCurrentQuestionIndex(initialChapterState.currentQuestionIndex);
    setSelectedOption(initialChapterState.selectedOption);
    setIsAnswered(initialChapterState.isAnswered);
    setScore(initialChapterState.score);
    setCompletionResult(null);
  };

  const saveProgress = (nextTotalScore, nextCompletedChapters, nextBadges) => {
    try {
      localStorage.setItem(
        storageKeys.totalScore,
        JSON.stringify(nextTotalScore),
      );
      localStorage.setItem(
        storageKeys.completedChapters,
        JSON.stringify(nextCompletedChapters),
      );
      localStorage.setItem(storageKeys.earnedBadges, JSON.stringify(nextBadges));
    } catch {
      // İlerleme kaydı desteklenmezse oyun akışı yine çalışmaya devam eder.
    }
  };

  const goHome = () => {
    resetChapterProgress();
    setScreen('home');
  };

  const goChapters = () => {
    resetChapterProgress();
    setScreen('chapters');
  };

  const openChapter = (chapter) => {
    setSelectedChapter(chapter);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setCompletionResult(null);
    setScreen('chapter');
  };

  const answerQuestion = (isCorrect) => {
    if (isAnswered) {
      return;
    }

    const currentQuestion = selectedChapter.questions[currentQuestionIndex];

    if (isCorrect) {
      setScore(
        (currentScore) =>
          currentScore + questionScores[currentQuestion.questionType],
      );
    }

    setIsAnswered(true);
  };

  const completeChapter = () => {
    const wasAlreadyCompleted = completedChapters.includes(selectedChapter.id);

    if (wasAlreadyCompleted) {
      setCompletionResult({ wasAlreadyCompleted, totalScoreAfter: totalScore });
      setScreen('chapterComplete');
      return;
    }

    const nextCompletedChapters = [...completedChapters, selectedChapter.id];
    const nextBadges = [...new Set([...earnedBadges, selectedChapter.badge])];
    const nextTotalScore = totalScore + score;

    setCompletedChapters(nextCompletedChapters);
    setEarnedBadges(nextBadges);
    setTotalScore(nextTotalScore);
    saveProgress(nextTotalScore, nextCompletedChapters, nextBadges);
    setCompletionResult({
      wasAlreadyCompleted,
      totalScoreAfter: nextTotalScore,
    });
    setScreen('chapterComplete');
  };

  const goNextQuestion = () => {
    const isLastQuestion =
      currentQuestionIndex === selectedChapter.questions.length - 1;

    if (isLastQuestion) {
      completeChapter();
      return;
    }

    setCurrentQuestionIndex((questionIndex) => questionIndex + 1);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const resetSavedProgress = () => {
    const shouldReset = window.confirm(
      'İlerlemeni sıfırlamak istediğine emin misin?',
    );

    if (!shouldReset) {
      return;
    }

    setTotalScore(0);
    setCompletedChapters([]);
    setEarnedBadges([]);

    try {
      localStorage.removeItem(storageKeys.totalScore);
      localStorage.removeItem(storageKeys.completedChapters);
    localStorage.removeItem(storageKeys.earnedBadges);
    } catch {
      // localStorage kullanılamıyorsa ek bir işlem gerekmez.
    }
  };

  const restartGame = () => {
    setTotalScore(0);
    setCompletedChapters([]);
    setEarnedBadges([]);
    resetChapterProgress();

    try {
      localStorage.removeItem(storageKeys.totalScore);
      localStorage.removeItem(storageKeys.completedChapters);
      localStorage.removeItem(storageKeys.earnedBadges);
    } catch {
      // localStorage kullanılamıyorsa ek bir işlem gerekmez.
    }

    setScreen('home');
  };

  const renderHomeScreen = () => {
    const hasProgress = completedChapters.length > 0;
    const isGameComplete = completedChapters.length === chapters.length;

    return (
      <section className="hero-card" aria-labelledby="app-title">
        <div className="hero-badge">Gizem dosyası açıldı</div>

        <div className="hero-heading">
          <p className="hero-subtitle">Anlamı Kaybolan Şehir</p>
          <h1 id="app-title">Deyim Dedektifi</h1>
        </div>

        <div className="story-panel">
          <p>
            Sözler Şehri’nde her şey bir sabah değişti. İnsanlar deyimleri ve
            atasözlerini gerçek anlamlarıyla anlamaya başladı. ‘Karnım zil
            çalıyor.’ diyen birinin karnında zil arandı, ‘burnu havada’ denilen
            bir öğrenci gerçekten havaya bakmaya başladı. Şehrin anlamları
            karıştı, Anlamlar Kitabı kayboldu. Şimdi bu gizemi çözmek için bir
            Deyim Dedektifi’ne ihtiyaç var.
          </p>
        </div>

        <p className="mission-text">
          Görevin, kaybolan anlamları bulmak, deyimleri ve atasözlerini doğru
          yorumlamak ve Sözler Şehri’ni eski düzenine kavuşturmak.
        </p>

        <button
          className="start-button"
          type="button"
          onClick={() => setScreen('chapters')}
        >
          Dedektifliğe Başla
        </button>

        <p className="home-progress-summary">
          {isGameComplete
            ? 'Tüm görev dosyalarını tamamladın. Finali görmek için Görev Dosyaları ekranına geç.'
            : hasProgress
              ? `Şu ana kadar ${completedChapters.length} görev dosyası tamamladın ve ${earnedBadges.length} rozet kazandın.`
              : 'Henüz hiçbir görev dosyası tamamlanmadı. İlk ipucunu bulmak için dedektifliğe başla.'}
        </p>
      </section>
    );
  };

  const renderChaptersScreen = () => (
    <section className="chapters-screen" aria-labelledby="chapters-title">
      <div className="chapters-header">
        <button className="back-button" type="button" onClick={goHome}>
          Ana Sayfaya Dön
        </button>

        <p className="hero-subtitle">Sözler Şehri dosya arşivi</p>
        <h2 id="chapters-title">Görev Dosyaları</h2>
        <p className="chapters-description">
          Her dosyada Sözler Şehri’ndeki farklı bir anlam karmaşasını
          çözeceksin. Bir bölüm seç ve ipuçlarını toplamaya başla.
        </p>
      </div>

      <div className="chapter-grid">
        {chapters.map((chapter) => (
          <ChapterCard
            chapter={chapter}
            isCompleted={completedChapters.includes(chapter.id)}
            key={chapter.id}
            onOpen={() => openChapter(chapter)}
          />
        ))}
      </div>

      <BadgeCollection chapters={chapters} earnedBadges={earnedBadges} />

      {completedChapters.length === chapters.length && (
        <button
          className="final-button"
          type="button"
          onClick={() => setScreen('final')}
        >
          Finali Gör
        </button>
      )}

      <button
        className="reset-progress-button"
        type="button"
        onClick={resetSavedProgress}
      >
        İlerlemeyi Sıfırla
      </button>
    </section>
  );

  const renderChapterQuestionScreen = () => {
    const currentQuestion = selectedChapter.questions[currentQuestionIndex];

    return (
      <section className="chapter-play-screen" aria-labelledby="chapter-title">
        <button className="back-button" type="button" onClick={goChapters}>
          Görev Dosyalarına Dön
        </button>

        <div className="chapter-play-header">
          <span className="chapter-badge">{selectedChapter.badge}</span>
          <h2 id="chapter-title">{selectedChapter.title}</h2>
          <p className="question-progress">
            Soru {currentQuestionIndex + 1} / {selectedChapter.questions.length}
          </p>
          <p className="chapter-score">Bölüm Puanı: {score}</p>
        </div>

        <div className="chapter-layout">
          <article className="chapter-story-card">
            <img
              className="chapter-story-image"
              src={selectedChapter.coverImage}
              alt={`${selectedChapter.title} hikâye görseli`}
            />
            <h3>Bölüm Hikâyesi</h3>
            <p>{selectedChapter.story}</p>
          </article>

          <QuestionCard
            key={currentQuestion.question}
            question={currentQuestion}
            selectedOption={selectedOption}
            isAnswered={isAnswered}
            onSelectOption={setSelectedOption}
            onAnswer={answerQuestion}
            onNextQuestion={goNextQuestion}
          />
        </div>
      </section>
    );
  };

  const renderChapterCompleteScreen = () => (
    <EndScreen
      chapter={selectedChapter}
      score={score}
      totalScore={completionResult?.totalScoreAfter ?? totalScore}
      wasAlreadyCompleted={completionResult?.wasAlreadyCompleted}
      onBackToChapters={goChapters}
      onGoHome={goHome}
    />
  );

  return (
    <main className="app-shell">
      <BackgroundMusic />
      <StatusBar
        totalScore={totalScore}
        earnedBadgeCount={earnedBadges.length}
        completedChapterCount={completedChapters.length}
        chapterCount={chapters.length}
      />
      {screen === 'home' && renderHomeScreen()}
      {screen === 'chapters' && renderChaptersScreen()}
      {screen === 'chapter' && selectedChapter && renderChapterQuestionScreen()}
      {screen === 'chapterComplete' &&
        selectedChapter &&
        renderChapterCompleteScreen()}
      {screen === 'final' && completedChapters.length === chapters.length && (
        <section className="complete-screen final-screen" aria-labelledby="final-title">
          <div className="complete-badge">Büyük Söz Ustası Sertifikası</div>
          <h2 id="final-title">Anlamlar Kitabı Tamamlandı</h2>
          <p>
            Sözler Şehri artık eski anlamına kavuştu. Deyimleri, atasözlerini ve
            onların gerçek anlamlarını çözerek Anlamlar Kitabı’nın son sayfasını
            sen tamamladın.
          </p>
          <p className="completion-note">
            Artık sen yalnızca soruları cevaplayan biri değilsin. Sözleri
            nerede, nasıl ve neden kullanacağını bilen gerçek bir Büyük Söz
            Ustasısın.
          </p>
          <div className="reward-card">
            <span>Final ödülü</span>
            <strong>Büyük Söz Ustası Sertifikası</strong>
          </div>
          <div className="complete-actions">
            <button className="chapter-button" type="button" onClick={goChapters}>
              Görev Dosyalarına Dön
            </button>
            <button className="back-button" type="button" onClick={restartGame}>
              Oyunu Baştan Başlat
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
