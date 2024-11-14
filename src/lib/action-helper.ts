/* eslint-disable @typescript-eslint/no-explicit-any */

export function actionDef<T>() {
  return (type: string) => (payload: T) => {
    return { type: type, payload: payload };
  };
}

export type ActionInfoMap = {
  [key: string]: (type: string) => any;
};

export function makeActionTypes<Map extends ActionInfoMap>(map: Map) {
  return Object.fromEntries(
    Object.entries(map).map((entry) => [entry[0], entry[1](entry[0])().type]),
  ) as { [Key in keyof Map]: Key };
}

export function makeActionCreators<Map extends ActionInfoMap>(map: Map) {
  return Object.fromEntries(
    Object.entries(map).map((entry) => [entry[0], entry[1](entry[0])]),
  ) as {
    [Key in keyof Map]: Map[Key] extends (
      type: string,
    ) => (payload: infer P) => { type: string; payload: any }
      ? (payload: P) => { type: Key; payload: P }
      : never;
  };
}

export type AnyFunc = (...args: any[]) => any;

export type UnionOf<T> = T[keyof T];

export type ReturnTypes<T extends { [key: string]: AnyFunc }> = {
  [K in keyof T]: ReturnType<T[K]>;
};
