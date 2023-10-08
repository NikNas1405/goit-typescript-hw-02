/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

const one: KeyValuePair<string, number> = { key: "one", value: 10 };
const two: KeyValuePair<string, string> = { key: "two", value: "15" };
const three: KeyValuePair<string, boolean> = { key: "three", value: true };

export {};
