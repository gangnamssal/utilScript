import { Tuple } from './../../primitive';

/**
 * ToUnion
 *
 * 배열을 유니온 타입으로 변환하는 타입
 *
 * @param T Tuple / 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<ToUnion<[123, '456', true]>, 123 | '456' | true>>,
 *   Expect<Equal<ToUnion<[123]>, 123>>,
 * ]
 */

export type ToUnion<T extends Tuple> = T[number];
