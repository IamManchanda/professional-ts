/* eslint-disable */

{
  const x: {
    user: {
      name: string;
      address?: {
        street: string;
        city: string;
      };
    };
  } = undefined as any;

  const y = x.user.address?.city;
  console.log(x.user.address?.city);
}

{
  class Foo {
    #name;
    constructor(rawName?: string) {
      this.#name = rawName || '(no name)';
    }

    log() {
      console.log(this.#name);
    }
  }
}

{
  type Foo<T extends any[]> = [boolean, ...T, boolean];

  type Address = [
    streetNumber: number,
    city: string,
    state: string,
    postal: number,
  ];

  function printAddress(...address: Address) {}

  printAddress(1, 'hello', 'world', 2);
}

{
  type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | {
        [k: string]: JSONValue;
      };

  const val: JSONValue = {
    name: 'Mike',
    address: {
      street: 'Spear St.',
      /* wave() {} => error */
    },
  };

  // type Corner = `${'top' | 'bottom'}-${'left' | 'right'}`;
}
