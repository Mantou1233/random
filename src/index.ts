export function __random__number__(n: number, nmax?: number) {
    let min, max;
    if(nmax === undefined){
        min = 0;
        max = n;
    }
    else {
        min = n;
        max = nmax;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function __random__element__<T>(arr: T[]): T {
    return arr[__random__number__(arr.length - 1)];
}

function random<T>(arr: T[]): T;
function random<T, N extends number = 1>(arr: T[], amount: N): (T[] & { length: N });
function random(min: number, max?: number): number;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function random<T>(...args: [arg0: T[] | number, arg1?: number, ...restful: any[]]): T[] | T | number {
    if (args.length === 1) {
        if (Array.isArray(args[0])) {
            return __random__element__(args[0]);
        }
        return __random__number__(args[0]);
    } else {
        if (Array.isArray(args[0])) {
            const arr: T[] = [];
            for (let i = 0; i < args[1]; i++) arr.push(__random__element__(args[0]));
            return arr;
        }
        return __random__number__(args[0], args[1]);
    }
    return NaN;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function weightedChoose(...args: any[]) {
    let n = 0;
    for (let i = 1; i < args.length; i += 2) {
        if (args[i] <= 0) continue;
        n += args[i];
    }

    n = random(n);
    for (let i = 1; i < args.length; i += 2) {
        if (args[i] <= 0) continue;
        n -= args[i];
        if (n < 0) return args[i - 1];
    }

    return args[0];
}
export { random, weightedChoose };
