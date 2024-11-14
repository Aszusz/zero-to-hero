import {
  actionDef,
  makeActionCreators,
  makeActionTypes,
  UnionOf,
} from '@/lib/action-helper';

const actions = {
  ['ui/increment']: actionDef<null>(),
  ['ui/decrement']: actionDef<null>(),
  ['ui/increment-async']: actionDef<null>(),
  ['eff/increment-async-ready']: actionDef<number>(),
} as const;

/* Action Types */
export const AT = makeActionTypes(actions);

/* Action Creators */
export const AC = makeActionCreators(actions);

export type Action = UnionOf<typeof AC>;
