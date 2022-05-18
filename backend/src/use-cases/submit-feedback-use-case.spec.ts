import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeebackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeebackSpy },
  { sendMail: sendMailSpy },
)
describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
   await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example feedback',
      screenshot: 'data:image/png;base64,salko0dfais98f7a89s67f87asy'
    })).resolves.not.toThrow();

    expect(createFeebackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  })

  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
       type: '',
       comment: 'example feedback',
       screenshot: 'data:image/png;base64,salko0dfais98f7a89s67f87asy'
     })).rejects.toThrow();
   })

   it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
       type: 'BUG',
       comment: '',
       screenshot: 'data:image/png;base64,salko0dfais98f7a89s67f87asy'
     })).rejects.toThrow();
   })

   it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
       type: 'BUG',
       comment: 'Example feedback',
       screenshot: 'teste.jpg'
     })).rejects.toThrow();
   })
})