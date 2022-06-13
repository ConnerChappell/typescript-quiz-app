import { AnswerObject } from '../App'

type Props = {
  question: string
  answers: string[]
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void
  userAnswers: AnswerObject | undefined
  questionNum: number
  totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswers, questionNum, totalQuestions }) => {
  return (
    <div>
      <p className='number'>
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />

      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={!!userAnswers} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard
