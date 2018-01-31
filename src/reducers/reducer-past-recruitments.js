import _ from 'lodash';

import { UPCOMING_RECRUITMENTS} from "../actions/index";

export default function (state={},action) {

    switch (action.type){

        case UPCOMING_RECRUITMENTS:
            return _.mapKeys(action.payload.data,'id');

        default:
            console.log(action);
            return state;

    }

}