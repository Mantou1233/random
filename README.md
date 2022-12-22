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
globalThis.random = require("@hikariware/random") // as typeof import("hikariware/random").random;
```

doc

```ts
random(min: number, max: number): number;
random<T>(arr: T[]): T;
random<T, N = 1>(arr: T[], amount: N): (T[] & {length: N});
```