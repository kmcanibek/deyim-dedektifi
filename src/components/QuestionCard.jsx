function QuestionCard({
  question,
  selectedOption,
  isAnswered,
  onSelectOption,
  onAnswer,
  onNextQuestion,
}) {
  const isCorrectAnswer = selectedOption === question.answer;

  return (
    <article className="question-card">
      <h3>{question.question}</h3>

      <div className="options-list" role="list">
        {question.options.map((option) => (
          <button
            className={`option-button ${
              selectedOption === option ? 'is-selected' : ''
            } ${isAnswered && option === question.answer ? 'is-correct-option' : ''} ${
              isAnswered && selectedOption === option && option !== question.answer
                ? 'is-wrong-option'
                : ''
            }`}
            disabled={isAnswered}
            key={option}
            type="button"
            onClick={() => onSelectOption(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {!isAnswered ? (
        <button
          className="answer-button"
          disabled={!selectedOption}
          type="button"
          onClick={onAnswer}
        >
          Cevapla
        </button>
      ) : (
        <>
          <div
            className={`feedback-box ${
              isCorrectAnswer ? 'is-correct' : 'is-wrong'
            }`}
          >
            <strong>
              {isCorrectAnswer
                ? 'Doğru cevap! Yeni bir ipucu kazandın.'
                : 'Yanlış cevap. Ama dedektifler hatalarından öğrenir.'}
            </strong>
            {!isCorrectAnswer && <p>Doğru cevap: {question.answer}</p>}
            <p>{question.explanation}</p>
          </div>

          <button className="answer-button" type="button" onClick={onNextQuestion}>
            Sonraki Soru
          </button>
        </>
      )}
    </article>
  );
}

export default QuestionCard;
