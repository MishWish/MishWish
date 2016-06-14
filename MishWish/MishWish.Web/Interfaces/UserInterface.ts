
module UserDtoInterface {

    export interface IUserDto {
        UserId   : number,
        FirstName: string,
        LastName: string,
        Password: string;
        ConfirmPassword: string;
        AccountTypeCode: number,
        EmailAddress: string,
        DOB: string,
        IsMale: boolean,
        MobileNumber: string
    }

    export interface IUserVM {
        User: any;
    }
}