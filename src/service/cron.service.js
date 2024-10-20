import cron from 'node-cron'
import moment from 'moment'
import sendEmail from './email.service.js'
import loanRepository from "../repositories/loan.repositories.js"


// abaixo minutos = 44, o restante dos * são: horas, dias, meses e anos 
// (você ainda pode adicionar os segundos opcionalmente antes dos minutos)
// isso vai agendar o seu envio de email de acordo com sua preferência dos periodos mencionados acima 
cron.schedule("44 * * * *" , async () => {
  console.log("Running daily job to check for due dates...")
  const loans = await loanRepository.findAllLoansRepository()
  const today = moment().startOf('day')



  loans.forEach(async (loan )=> {
    const dueDate = moment(loan.dueDate).startOf('day')
    const reminderDueDate = moment(dueDate).subtract(1, "days")
   


    if(today.isSame(reminderDueDate)){
      sendEmail(loan.email, loan.title, loan.dueDate, loan.username)
    }
    
  });
})