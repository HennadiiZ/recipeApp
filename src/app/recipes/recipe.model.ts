import { ShoppingList } from "../shared/shopping-list.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: ShoppingList[];

    constructor(name: string, descr: string, imagePath: string, ingredients: ShoppingList[]){
        this.name = name;
        this.description = descr;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}