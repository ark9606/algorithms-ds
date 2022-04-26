// BAD: has bad distribution
// BAD: depends on the input size
// BAD: deterministic - same input -> same output (for study ignore this)
function hash0(key: string, arrayLength: number): number {
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    let value = key.charCodeAt(i) - 65;
    sum = (sum + value) % arrayLength;
  }
  return sum % arrayLength;
}

console.log('\n hash v0:');
console.log(hash0('hello', 10));
console.log(hash0('hello', 10));
console.log(hash0('Hello', 10));
console.log(hash0('WORLD', 10));
console.log(hash0('pink', 10));
console.log(hash0('orange', 10));

// GOOD: with prime number has good distribution
// GOOD: less depends on the input size
// BAD: deterministic - same input -> same output (for study ignore this)
// prime numbers are used in hash functions to make them linear distribution
function hash1(key: string, arrayLength: number): number {
  let sum = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let value = key.charCodeAt(i) - 65;
    sum = (sum * WEIRD_PRIME + value) % arrayLength;
  }
  return sum % arrayLength;
}

console.log('\n hash v1:');
console.log(hash1('pink', 13));
console.log(hash1('orange', 13));
console.log(hash1('Hello,world!', 13));
console.log(hash1('loremipsumtext', 13));

class HashTable {
  private array: any[];

  constructor(private size = 53) {
    if (size % 2 === 0) {
      console.log('May be bad distribution because of non-prime array size.')
    }
    this.array = new Array(size);
  }

  private hash(key: string): number {
    let sum = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i) - 65;
      sum = (sum * WEIRD_PRIME + value) % this.size;
    }
    return sum % this.size;
  }

  public set(key: string, value: any): void {
    const hash = this.hash(key);
    if (!Array.isArray(this.array[hash])) {
      this.array[hash] = [];
    }
    this.array[hash].push([key, value]);
  }

  public get(key: string): any | undefined {
    const hash = this.hash(key);
    const record = this.array?.[hash];
    if (Array.isArray(record)) {
      for (const [_key, _value] of record) {
        if (_key === key) {
          return _value;
        }
      }
    }
    return undefined;
  }

  keys(): number[] {
    let keys: number[] = [];
    for (let i = 0; i < this.array.length; i++) {
      if (Array.isArray(this.array[i])) {
        for (const [_key] of this.array[i]) {
          keys.push(_key);
        }
      }
    }
    return keys;
  }

  values(): any[] {
    let values: any[] = [];
    for (let i = 0; i < this.array.length; i++) {
      if (Array.isArray(this.array[i])) {
        for (const [,_value] of this.array[i]) {
          values.push(_value);
        }
      }
    }
    return values;
  }
}

const table = new HashTable(5);
table.set('mo', 'monday');
table.set('tu', 'tuesday');
table.set('we', 'wednesday');
table.set('th', 'thursday');
table.set('fr', 'friday');
table.set('sa', 'saturday');
table.set('su', 'sunday');
table.set('yy', 'monday');

console.log(table.get('mo'));
console.log(table.get('tu'));
console.log(table.get('su'));
console.log(table.get('xx'));

console.log(table.keys());
console.log(table.values());
