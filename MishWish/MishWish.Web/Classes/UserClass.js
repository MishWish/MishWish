/// <reference path="../interfaces/userinterface.ts" />
var UserClass;
(function (UserClass) {
    var UserClassDto = (function () {
        function UserClassDto(user) {
            this.UserId = user.UserId;
            this.FirstName = user.FirstName;
            this.LastName = user.LastName;
            this.AccountTypeCode = user.AccountTypeCode;
            this.EmailAddress = user.EmailAddress;
            this.DOB = user.DOB;
            this.IsMale = user.IsMale;
            this.MobileNumber = user.MobileNumber;
            this.Password = user.Password;
            this.ConfirmPassword = user.ConfirmPassword;
        }
        return UserClassDto;
    }());
    UserClass.UserClassDto = UserClassDto;
    var UserVM = (function () {
        function UserVM(user) {
            this.User = user.User;
        }
        return UserVM;
    }());
    UserClass.UserVM = UserVM;
    var LoginVM = (function () {
        function LoginVM(user) {
            this.UserName = user.UserName;
            this.Password = user.Password;
        }
        return LoginVM;
    }());
    UserClass.LoginVM = LoginVM;
})(UserClass || (UserClass = {}));
//# sourceMappingURL=UserClass.js.map