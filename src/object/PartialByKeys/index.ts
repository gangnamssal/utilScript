import { Equal, Expect } from '../../commonness';

/**
 * Make certain properties of an object optional
 *
 * 특정 프로퍼티를 선택하여 부분적으로 만들어주는 타입
 *
 * @param T The original object type / 원본 객체 타입
 * @param K The keys to make optional / 선택적으로 만들 키
 *
 * @example
 *   interface User {
 *     name: string;
 *     age: number;
 *     address: string;
 *   }
 *   interface UserPartialName {
 *     name?: string;
 *     age: number;
 *     address: string;
 *   }
 * type cases = [
 *   Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
 * ];
 */

export type PartialByKeys<T, K extends keyof T = keyof T> = Omit<
  Partial<Pick<T, K>> & Omit<T, K>,
  never
>;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  interface User {
    name: string;
    age: number;
    address: string;
  }

  interface UserPartialName {
    name?: string;
    age: number;
    address: string;
  }

  interface UserPartialNameAndAge {
    name?: string;
    age?: number;
    address: string;
  }

  type cases = [
    Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
    Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
    Expect<Equal<PartialByKeys<User>, Partial<User>>>,
    // @ts-expect-error
    Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  ];
}
