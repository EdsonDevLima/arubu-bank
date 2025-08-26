import { Injectable } from '@nestjs/common';
import { AccountDTO, CreateAccountDTO, DepositDTO, RemoveAccountDTO, WithdrawaDTO } from './dto/Account';
import { randomUUID } from 'crypto';


@Injectable()
export class AccountService {

    private Accounts: AccountDTO[]

    createAccount(newAccount: CreateAccountDTO): { message: string, sucess: boolean } {

        const accountExist = this.Accounts.filter((a) => a.userName.toLocaleLowerCase() == newAccount.userName.toLocaleLowerCase())

        if (accountExist) {

            return {
                message: "Já existe uma conta com esse nome",
                sucess: false
            }

        } else {

            const acc = new AccountDTO()
            acc.id = randomUUID()
            acc.userName = newAccount.userName
            acc.password = newAccount.password

            this.Accounts.push(acc)

            return {
                message: "Conta criada com sucesso",
                sucess: true
            }


        }

    }
    removeAccount(Account: RemoveAccountDTO) {

        const accountExist = this.Accounts.filter((a) => a.userName.toLocaleLowerCase() == Account.userName.toLocaleLowerCase())

        if (!accountExist[0]) {


            return {
                message: "Conta não encontrada",
                sucess: false
            }

        } else {
            if (accountExist[0].password !== Account.password) {

                return {
                    message: "Senha incorreta",
                    sucess: false
                }

            } else {

                this.Accounts = this.Accounts.filter((a) => a.userName !== accountExist[0].userName)

                return {
                    message: "Conta removida com sucesso",
                    sucess: true
                }

            }


        }




    }
    depositIntoAccount(dataDeposit: DepositDTO) {
        const accountExist = this.Accounts.filter((a) => a.userName.toLocaleLowerCase() == dataDeposit.userName.toLocaleLowerCase())

        if (!accountExist[0]) {
            return {
                message: "Conta não encontrada",
                sucess: false
            }

        } else {
            if (accountExist[0].password !== dataDeposit.password) {

                return {
                    message: "Senha incorreta",
                    sucess: false
                }

            } else {

                const accountIndex = this.Accounts.findIndex((a) => { a.userName.toLocaleLowerCase() == dataDeposit.userName.toLocaleLowerCase() })

                if (accountExist) {
                    const account = this.Accounts[accountIndex]

                    if (account.balance < dataDeposit.balance) {
                        return {
                            message: "Saldo insuficiente",
                            sucess: false
                        }
                    } else {

                        account.balance -= dataDeposit.balance
                        return {
                            message: "Saldo Atualizado",
                            sucess: true
                        }
                    }
                }
            }

        }
    }
    withdrawFromAccount(datawithdraw: WithdrawaDTO) {
        const accountExist = this.Accounts.filter((a) => a.userName.toLocaleLowerCase() == datawithdraw.userName.toLocaleLowerCase())

        if (!accountExist[0]) {
            return {
                message: "Conta não encontrada",
                sucess: false
            }

        } else {
            if (accountExist[0].password !== datawithdraw.password) {

                return {
                    message: "Senha incorreta",
                    sucess: false
                }

            } else {

                const accountIndex = this.Accounts.findIndex((a) => { a.userName.toLocaleLowerCase() == datawithdraw.userName.toLocaleLowerCase() })

                if (accountExist) {
                    const account = this.Accounts[accountIndex]

                    if (account.balance < datawithdraw.balance) {
                        return {
                            message: "Saldo insuficiente",
                            sucess: false
                        }
                    } else {

                        account.balance -= datawithdraw.balance
                        return {
                            message: "Saldo Atualizado",
                            sucess: true
                        }
                    }
                }



            }

        }

    }
}


