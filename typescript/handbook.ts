/* eslint-disable */

const arg1_1 = { a: 'a', b: 'b' as 'b' };
const arg1_2 = { c: 'c' } as const;
const fn1 = (p1: 'a', p2: 'b', p3: string) => `${p1}${p2}${p3}`;
fn1(arg1_1.a as 'a', arg1_1.b, arg1_2.c);

type x = 'x';
type y = { x: 'y' };
type IndexedAccess = y[x];
const arg2_1: IndexedAccess = 'y';
import type { ExportA } from './typescript';
import { type ExportB } from './typescript';
type TemplateLiteral = `$${ExportA | ExportB}`;
const arg2_2: Lowercase<TemplateLiteral> = '$b';
function fn2<T>(...params: T[]): T[] { return params; }
fn2(arg2_1, arg2_2);

declare interface Generic<T> { (p1: T): T; }
const fn3: Generic<number> = <T>(p1: T): T => p1;
fn3(Math.random());
