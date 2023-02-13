import { atom } from 'recoil';

export const lnbListState = atom({
    key: 'lnbListState',
    default: new Map(), // { id, text, scrollY, fontSize }
});