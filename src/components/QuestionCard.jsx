import { useState } from 'react';

const normalizeAnswer = (value) => value.trim().toLocaleLowerCase('tr-TR');

function QuestionCard({
  question,
  selectedOption,
  isAnswered,
  onSelectOption,
  onAnswer,
  onNextQuestion,
}) {
  const [writtenAnswer, setWrittenAnswer] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [writtenResult, setWrittenResult] = useState(null);

  const isMultipleChoice = question.questionType === 'multipleChoice';
  const isFillBlank = question.questionType === 'fillBlank';
  const isShortAnswer = question.questionType === 'shortAnswer';
  const isCorrectAnswer = isMultipleChoice
    ? selectedOption === question.answer
    : writtenResult?.isCorrect;

  const answerWrittenQuestion = () => {
    const normalizedAnswer = normalizeAnswer(writtenAnswer);

    if (!normalizedAnswer) {
      setValidationMessage('Önce cevabını yazmalısın.');
      return;
    }

    if (isShortAnswer && normalizedAnswer.length < 15) {
      setValidationMessage('Cevabını biraz daha açıklamalısın.');
      return;
    }

    setValidationMessage('');

    const isCorrect = isFillBlank
      ? question.acceptedAnswers.some(
          (acceptedAnswer) => normalizeAnswer(acceptedAnswer) === normalizedAnswer,
        )
      : question.answerKeywords.some((keyword) =>
          normalizedAnswer.includes(normalizeAnswer(keyword)),
        );

    setWrittenResult({ isCorrect, value: writtenAnswer });
    onAnswer(isCorrect);
  };

  return (
    <article className="question-card">
      <span className="question-type">
        {isMultipleChoice && 'Çoktan Seçmeli'}
        {isFillBlank && 'Boşluk Doldurma'}
        {isShortAnswer && 'Kısa Cevap'}
      </span>
      <h3>{question.question}</h3>

      {isMultipleChoice && (
        <div className="options-list" role="list">
          {question.options.map((option) => (
            <button
              className={`option-button ${
                selectedOption === option ? 'is-selected' : ''
              } ${
                isAnswered && option === question.answer ? 'is-correct-option' : ''
              } ${
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
      )}

      {isFillBlank && (
        <input
          className="written-answer"
          disabled={isAnswered}
          onChange={(event) => setWrittenAnswer(event.target.value)}
          placeholder="Cevabını yaz..."
          type="text"
          value={writtenAnswer}
        />
      )}

      {isShortAnswer && (
        <textarea
          className="written-answer written-answer-large"
          disabled={isAnswered}
          onChange={(event) => setWrittenAnswer(event.target.value)}
          placeholder="Kısa açıklamanı yaz..."
          rows="5"
          value={writtenAnswer}
        />
      )}

      {validationMessage && !isAnswered && (
        <p className="validation-message">{validationMessage}</p>
      )}

      {!isAnswered ? (
        <button
          className="answer-button"
          disabled={isMultipleChoice && !selectedOption}
          type="button"
          onClick={isMultipleChoice ? () => onAnswer(isCorrectAnswer) : answerWrittenQuestion}
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
            {!isCorrectAnswer && isMultipleChoice && (
              <p>Doğru cevap: {question.answer}</p>
            )}
            {!isCorrectAnswer && isFillBlank && (
              <p>Doğru cevap: {question.answer}</p>
            )}
            {isShortAnswer && <p>Örnek cevap: {question.sampleAnswer}</p>}
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
