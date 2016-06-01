/// <reference path="../interfaces/mishwishinterface.ts" />

module MishWishClass {

    export class MishWishClassVM implements MishWishInterface.IMishWishClassVM {

        UserList: any[];

        public constructor(mishWish: MishWishInterface.IMishWishClassVM) {

            this.UserList = mishWish.UserList;
        }
    }
}