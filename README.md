# random

fuck the randomize fuckrz heres a good pakage

download

```bash
npm i @hikariware/random
# or
yarn add @hikariware/random
```

usag

```ts
// eslint-disable-next-line @typescript-eslint/no-var-requires (for typefuck usrs)
globalThis.random = require("@hikariware/random");
/*
globalThis.choose = require("hikariware/random").choose // as typeof import("hikariware/random");
if you want to use choose
*/
```

doc

```ts
random(min: number, max: number): number;
random<T>(arr: T[]): T;
random<T, N = 1>(arr: T[], amount: N = 1): (T[] & {length: N}) | T;

```