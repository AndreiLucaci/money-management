export default class ResourceManager {
  static json = {};
  loaded = false;

  get(key){
    if (!this.loaded){
      ResourceManager.loadData();
      this.loaded = true;
    }

    if (key in ResourceManager.json){
      return ResourceManager.json[key];
    }
    return `[${key}]`;
  }

  static loadData(){
    this.json = require('../assets/resources.json');
  }
}
