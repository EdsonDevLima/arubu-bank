import { Body, Controller, Delete, HttpCode, Patch, Post, Res } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDTO, DepositDTO, RemoveAccountDTO, WithdrawaDTO } from './dto/Account';

@Controller('account')
export class AccountController {
    constructor(private readonly service: AccountService) { }

    @Post("create")
    @HttpCode(201)
    createAccount(@Body() dataAccount: CreateAccountDTO, @Res() response) {
        const result = this.service.createAccount(dataAccount)
        if (result.sucess) {
            return result
        } else {

        }
    }
    @Delete("delete")
    @HttpCode(201)
    deleteAccount(@Body() dataAccount: RemoveAccountDTO) {
        const result = this.service.removeAccount(dataAccount)
        if (result.sucess) {
            return result
        } else {

        }
    }
    @Patch("deposit")
    @HttpCode(201)
    depositIntoAccount(@Body() dataAccount: DepositDTO) {
        const result = this.service.depositIntoAccount(dataAccount)
        if (result.sucess) {
            return result
        } else {

        }
    }
    @Patch("withdraw")
    @HttpCode(201)
    withdrawAtAccount(@Body() dataAccount: WithdrawaDTO) {
        const result = this.service.withdrawFromAccount(dataAccount)
        if (result.sucess) {
            return result
        } else {

        }
    }
}
