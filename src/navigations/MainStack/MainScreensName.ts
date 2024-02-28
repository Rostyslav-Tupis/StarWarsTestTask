import { ICharacter } from '@/types/characterType';
import { ParamListBase } from '@react-navigation/native';

export interface IMainScreens extends ParamListBase {
    GENERAL_LIST:undefined,
    ADDITIONAL_INFO: { item: ICharacter };
}

export const MAIN_SCREENS = {
    GENERAL_LIST:"GeneralList",
    ADDITIONAL_INFO:"ADDITIONAL_INFO",
}