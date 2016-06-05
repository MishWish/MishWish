/// <reference path="../interfaces/mishwishinterface.ts" />

module MishWishClass {

    export class MishWishClassVM implements MishWishInterface.IMishWishClassVM {

        UserList: any[];
        OnTabChange: (selectedTab: number) => void;
        SelectedTab: number;

        public constructor(mishWish: MishWishInterface.IMishWishClassVM) {

            this.UserList = mishWish.UserList;
            this.OnTabChange = mishWish.OnTabChange;
            this.SelectedTab = mishWish.SelectedTab;
        }
    }
}