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
})(UserClass || (UserClass = {}));
