import { useState, useEffect } from "react"
import { Button, Radio, Progress, Space } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import classes from "./exam.module.scss"

const examQuestions: any[] = [
  {
    id: 1,
    question: "中国的首都是哪个城市？",
    options: ["上海", "北京", "广州", "深圳"],
    correctAnswer: "北京"
  },
  {
    id: 2,
    question: "长江是中国第几长的河流？",
    options: ["第一长", "第二长", "第三长", "第四长"],
    correctAnswer: "第一长"
  },
  {
    id: 3,
    question: "中国的国花是什么？",
    options: ["牡丹", "梅花", "菊花", "荷花"],
    correctAnswer: "牡丹"
  },
  {
    id: 4,
    question: "中国有多少个省级行政区？",
    options: ["31个", "32个", "33个", "34个"],
    correctAnswer: "34个"
  },
  {
    id: 5,
    question: "中国最高的山峰是哪座？",
    options: ["珠穆朗玛峰", "乔戈里峰", "干城章嘉峰", "南迦帕尔巴特峰"],
    correctAnswer: "珠穆朗玛峰"
  }
]

export default function Exam() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<any>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress((Object.keys(answers).length / examQuestions.length) * 100)
  }, [answers])

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prev: any) => ({ ...prev, [questionId]: answer }))
  }

  const handleNextQuestion = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    let correctAnswers = 0
    examQuestions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++
      }
    })
    setScore(correctAnswers)
    setSubmitted(true)
  }

  return (
    <div className={classes.questionCard}>
      <h2>智慧考试系统</h2>
      <div className={classes.cardBody}>
        {!submitted ? (
          <>
            <h3>
              问题 {currentQuestion + 1} / {examQuestions.length}
            </h3>
            <h4>{examQuestions[currentQuestion].id}. {examQuestions[currentQuestion].question}</h4>
            <Radio.Group className={classes.questionOptions}
              onChange={(event) => handleAnswerChange(examQuestions[currentQuestion].id, event.target.value)}
              value={answers[examQuestions[currentQuestion].id] || ""}
            >
              <Space direction="vertical">
                {examQuestions[currentQuestion].options.map((option: any, index: number) => (
                  <Radio

                    value={option}
                    key={`q${examQuestions[currentQuestion].id}-option${index}`}

                  >
                    {option}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </>
        ) : (
          <div className={classes.examResultDetail}>
            <h3>考试结果</h3>
            {examQuestions.map((question, index) => (
              <div key={index} className={classes.questionResult}>
                <h4>{question.id}. {question.question}</h4>
                <p>
                  <span className={classes.myAnswer}>您的答案: {answers[question.id]} </span>
                  {answers[question.id] === question.correctAnswer ? (
                    <CheckCircleOutlined className={classes.correctAnswer} />
                  ) : (
                    <CloseCircleOutlined className={classes.incorrectAnswer} />
                  )}
                </p>
                {answers[question.id] !== question.correctAnswer && (
                  <p>正确答案：<strong>{question.correctAnswer}</strong></p>
                )}
              </div>
            ))}
          </div>
        )}

        {!submitted ? (
          <div className={classes.examActions}>
            <Button
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
            >
              上一题
            </Button>
            <Progress percent={progress} />
            {currentQuestion < examQuestions.length - 1 ? (
              <Button
                onClick={handleNextQuestion}
                disabled={!(answers?.[examQuestions?.[currentQuestion]?.id])}
              >
                下一题
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={Object.keys(answers).length !== examQuestions.length}
                type="primary"
              >
                提交答案
              </Button>
            )}
          </div>
        ) : (
          <div className={classes.examResultTotal}>
            <span>
              您的得分：<strong>{score}/{examQuestions.length}</strong>
            </span>
            <span>
              正确率：<strong>{((score / examQuestions.length) * 100).toFixed(2)}%</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}