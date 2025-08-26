import { IsNumber, IsString } from "class-validator"

export class AccountDTO {
    @IsString()
    id: string
    @IsString()
    userName: string
    @IsString()
    password: string
    @IsNumber()
    balance: number

}
export class CreateAccountDTO extends AccountDTO { }

export class RemoveAccountDTO extends AccountDTO { }

export class DepositDTO {
    @IsString()
    userName: string
    @IsString()
    password: string
    @IsNumber()
    balance: number

}

export class WithdrawaDTO extends DepositDTO { }