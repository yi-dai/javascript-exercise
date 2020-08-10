import { restElement } from '@babel/types';

export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let result = 0;
  for (const element in source) {
    result += parseInt(source[element]);
  }
  return result;
}
