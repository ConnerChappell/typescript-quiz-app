import { AnswerObject } from '../App'
// styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

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
    <Wrapper>
      <p className='number'>
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />

      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswers?.correctAnswer === answer}
            userClicked={userAnswers?.answer === answer}
          >
            <button disabled={!!userAnswers} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  )
}

export default QuestionCard
