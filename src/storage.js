// @flow
function MemoryStorage() {
  let structureLocalStorage = {};
  this.set = (key: string, value: any) => {
    structureLocalStorage[key] = value;
  };
  this.get = (key: string) => {
    if (typeof structureLocalStorage[key] !== 'undefined') {
      return structureLocalStorage[key];
    }
    return null;
  };
  this.remove = (key: string) => delete structureLocalStorage[key];
  this.clear = () => {
    structureLocalStorage = {};
  };
}

function LocalStorage() {
  this.set = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  this.get = (key: string) => {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (error) {
      const item = window.localStorage.getItem(key);
      window.localStorage.setItem(key, JSON.stringify(item));
      return item;
    }
  };
  this.remove = (key: string) => window.localStorage.removeItem(key);
  this.clear = () => window.localStorage.clear();
}

function getStorage() {
  let storageImpl;
  try {
    window.localStorage.setItem('_', '');
    window.localStorage.removeItem('_');
    storageImpl = new LocalStorage();
  } catch (e) {
    storageImpl = new MemoryStorage();
  }
  return storageImpl;
}

const storage = getStorage();

export default storage;
