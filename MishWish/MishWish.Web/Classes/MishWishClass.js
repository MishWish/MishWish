/// <reference path="../interfaces/mishwishinterface.ts" />
var MishWishClass;
(function (MishWishClass) {
    var MishWishClassVM = (function () {
        function MishWishClassVM(mishWish) {
            this.UserList = mishWish.UserList;
            this.OnTabChange = mishWish.OnTabChange;
            this.SelectedTab = mishWish.SelectedTab;
        }
        return MishWishClassVM;
    }());
    MishWishClass.MishWishClassVM = MishWishClassVM;
})(MishWishClass || (MishWishClass = {}));
//# sourceMappingURL=MishWishClass.js.map