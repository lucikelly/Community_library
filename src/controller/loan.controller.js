import loanService from "../service/loan.service.js";

async function createLoanController(req, res)  {
  const { bookId, dueDate } = req.body
  const userId = req.userId

  try {
    const createdLoan = await loanService.createLoanService(
      userId,
      bookId, 
      dueDate
    )

    return res.status(201).send(createdLoan)
  } catch (e) {
    return res.status(400).send(e.message)
  }
}

async function findAllLoansController(req, res ) {
  try {
    const loans = await loanService.findAllLoansService()
    res.send(loans)
  } catch (e) {
    res.status(404).send(e.message)
  }
}


async function findLoanByIdController(req, res) {
  const loanId = req.params.id
  
  try {
    
    const loan = await loanService.findLoanByIdService(loanId)
    return res.send(loan)
  } catch (e) {
    res.status(400).send(e.message)
  }

}

async function deleteLoanController(req, res) {
  const loanId = req.params.id
  const userId = req.userId
  try {
    const response = await loanService.deleteLoanService(loanId, userId)
    return res.send(response)
  } catch (e) {
    res.status(400).send(e.message)
  }
}
export default {
  createLoanController,
  findAllLoansController,
  findLoanByIdController,
  deleteLoanController
}