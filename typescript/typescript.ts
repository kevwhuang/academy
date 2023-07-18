/* eslint-disable */

type MyType = boolean | number;
type MyFunc<T> = ({ a, b }: { b: Exclude<MyType, number>, a: T }) => void;
type MyUtil = (a: boolean, b: string) => ReturnType<MyFunc<any>>;

interface Obj {
    a: (any | unknown)[],
    b: (number | string)[],
    c?: {},
}
interface ObjInter extends Obj { d?: Object }
interface ObjAll extends Required<ObjInter> { }
interface ObjSome extends Omit<ObjAll, 'a' | 'b'> { }
interface ObjOne extends Pick<ObjSome, 'c'> { }
interface ClassProp extends Record<string, any> { pub: boolean }
interface ClassMethod<T> { print: () => T }

enum List {
    a = -1,
    b = '',
    c = 1,
    d,
}

const c: Function = console.log;
const tuple: readonly [a: boolean, b: number, c: string, d: null, e: undefined][]
    = [[true, 1, '1', null, undefined]];
const obj: ObjInter = {
    a: [],
    b: [1, '1'],
    c: {},
    d: true,
};
const index: { [key: Parameters<MyUtil>[1]]: any } = {
    a: true,
    0: null,
};
const utility: Partial<ObjOne> = { c: new Promise<unknown>(function () { }) };

c(function (item: number, key: keyof Obj): unknown[] {
    return [item, key, obj!.b];
}(List.d, 'c'));
c(function <T>(month: number = 0, day?: string | T): Date {
    return new Date(0, month, Number(day));
}(0, '1'));

const alias: MyFunc<number> = ({ b, a }) => c(a, b);
alias({ a: 0, b: false });
((...params: number[]): void => c(params))(1 as number, <number>2);

class Class implements ClassProp, ClassMethod<void> {
    public constructor(public pub: boolean) { }
    protected prot: [] = [];
    public print(): void { c(this.pub); }
}
class ClassExt extends Class {
    constructor(readonly pub: boolean = true) { super(pub); }
    private _priv: {} = {};
    override print() { c(this.prot, this._priv); }
}
abstract class Blueprint<T extends boolean | string = string> extends ClassExt {
    protected abstract abs: T;
}
class ClassAbs extends Blueprint<string> { readonly abs: string = ''; }
new ClassAbs().print();
