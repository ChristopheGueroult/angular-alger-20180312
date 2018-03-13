import { Item } from '../../shared/models/item.model';
import { State } from '../../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Christophe',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: 'a2',
    name: 'Juliette',
    reference: '4251',
    state: State.ENCOURS
  },
  {
    id: 'a3',
    name: 'Mohamed',
    reference: '6622',
    state: State.LIVREE
  }
];
