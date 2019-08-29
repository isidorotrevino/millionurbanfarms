import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'user', action: Action){
    switch (action.type){
        case 'anonymous':
            return state = 'anonymous';

        case 'cliente':
            return state = 'cliente';

        case 'productor':
            return state = 'productor';

        case 'inversionista':
            return state = 'inversionista';

        case 'proveedorb':
            return state = 'proveedorb';

        case 'proveedors':
            return state = 'proveedors';

        default:
            return state = 'user';
    }
}