/* eslint-disable */

const args1 = { a: 'a', b: 'b' as 'b' };
const args2 = { c: 'c' } as const;
const fn1 = (p1: 'a', p2: 'b', p3: string) => `${p1}${p2}${p3}`;
fn1(args1.a as 'a', args1.b, args2.c);
