# @esm-pack/bcrypt

build from [bcrypt-ts](https://github.com/Mister-Hope/bcrypt-ts) esm version.

## Usage - Sync

To hash a password:

```js
import { genSaltSync, hashSync } from "@esm-pack/bcrypt";

const salt = genSaltSync(10);
const hash = hashSync("B4c0//", salt);
// Store hash in your password DB.
```

To check a password:

```js
import { compareSync } from "@esm-pack/bcrypt";

// Load hash from your password DB.
compareSync("B4c0//", hash); // true
compareSync("not_bacon", hash); // false
```

Auto-gen a salt and hash at the same time:

```js
import { hashSync } from "@esm-pack/bcrypt";

const hash = hashSync("bacon", 8);
```

## Usage - Async

To hash a password:

```js
import { genSalt, hash } from "@esm-pack/bcrypt";

const salt = await genSalt(10);
const hash = await hash("B4c0//", salt);
// Store hash in your password DB.
```

To check a password:

```js
import { compare } from "@esm-pack/bcrypt";

// Load hash from your password DB.
const hash = "xxxxxx";

await compare("B4c0//", hash) // true
await compare("not_bacon", hash) // false
```

Auto-gen a salt and hash:

```js
import { hash } from "@esm-pack/bcrypt";

const result = await hash("bacon")
```

[more docs](https://github.com/Mister-Hope/bcrypt-ts)

## License

New-BSD / MIT ([see](https://github.com/Mister-Hope/bcrypt-ts/blob/main/LICENSE))
