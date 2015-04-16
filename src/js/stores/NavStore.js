import { MENU_SELECT } from '../constants/Constants.js';
import BaseStore from './BaseStore.js';

class NavStore extends BaseStore {
  constructor() {
    super(this._registerToAction.bind(this));
  }

  _registerToAction(action) {
    switch (action.actionType) {
      case MENU_SELECT:
        this._currentRoute = action.data;
        this.emitChange();
        break;

      default:
        break;
    }
  }

  get currentRoute() {
    return this._currentRoute;
  }
}

export default new NavStore();
