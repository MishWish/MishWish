/// <reference path="../interfaces/userinterface.ts" />

module UserClass {

    export class UserClassDto implements UserDtoInterface.IUserDto {

        UserId: number;
        FirstName: string;
        LastName: string;
        Password: string;
        ConfirmPassword: string;
        AccountTypeCode: number;
        EmailAddress: string;
        DOB: string;
        IsMale: boolean;
        MobileNumber: string;


        public constructor(user: UserDtoInterface.IUserDto) {

            this.UserId = user.UserId;
            this.FirstName = user.FirstName;
            this.LastName = user.LastName
            this.AccountTypeCode = user.AccountTypeCode;
            this.EmailAddress = user.EmailAddress;
            this.DOB = user.DOB;
            this.IsMale = user.IsMale;
            this.MobileNumber = user.MobileNumber;
            this.Password = user.Password;
            this.ConfirmPassword = user.ConfirmPassword;
        }
        
    }

    export class UserVM implements UserDtoInterface.IUserVM {

        User: any;

        public constructor(user:UserDtoInterface.IUserVM) {
            this.User = user.User
        }

    }

    export class LoginVM implements UserDtoInterface.ILoginVM {

        UserName: string;
        Password: string;

        public constructor(user: UserDtoInterface.ILoginVM) {

            this.UserName = user.UserName;
            this.Password = user.Password;

        }
    }
}