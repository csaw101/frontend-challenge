import { atom } from 'recoil';

export const itemsState = atom({
  key: 'itemsState',
  default: [],
});

export const itemCounterState = atom({
  key: 'itemCounterState',
  default: 0,
});

export const isHoveredState = atom({
  key: 'isHoveredState',
  default: false,
})
