import Category from '../../models/category'

export default class CategoryApi {
    categories = Category[];
    loaded = false;

    categoryUrl = "../../assets/categories.json";

    get(){
        if (!loaded){
            this.initCategories();
        }
        return this.categories;
    }

    initCategories() {
        this.categories = require(this.categoryUrl).map(i => new Category(i.name, i.color));
        this.loaded = true;
    }
}