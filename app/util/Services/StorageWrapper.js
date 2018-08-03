import {isEmpty} from 'ramda';
export default class StorageWrapper {
  key = "";
  default = {};
  cache = {};
  constructor(val, defaultObj) {
    this.key = val;
    this.default = defaultObj;
  }
  get() {
    if(isEmpty(this.cache)){
        return Promise.resolve(cache);
    }
    return chrome.storage.sync
      .get({[this.key]: this.defaultObj})
      .then(data => {
        this.cache = data;
        return data;
      })
      .catch(err => {
        console.warn(err);
        return err;
      });
  }
  save(obj) {
    return browser.storage.sync
      .set({[this.key]: obj})
      .then(data => {
        this.cache = data;
        return data;
      })
      .catch(err => {
        console.warn(err);
        return err;
      });
  }
}
