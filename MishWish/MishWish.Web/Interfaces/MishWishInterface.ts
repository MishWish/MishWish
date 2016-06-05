module MishWishInterface {

    export interface IMishWishClassVM {
        UserList: any[];
        OnTabChange: (selectedTab: number) => void;
        SelectedTab: number;
    }
}
