//Grocery Lists with type of food and amount
//class 1
class Food {
    constructor(type, amount) {
    this.type = type;
    this.amount = amount;
    }
    describe() {
        return `${this.amount} ${this.type}`;
}
}
//class 2
class List {
    constructor(type) {
        this.type = type;
        this.foods = [];
    }
//adding food to the List
addFood(food) {
    if (food instanceof Food) {
        this.foods.push(food);
    } else {
        throw new Error(`You need to buy more groceries`);
    }
}

    describe() {
        return `${this.type} has ${this.foods.length} foods.`;
}
}
//outline of the Menu App
class Menu {
    constructor() {
        this.lists = [];
        this.selectedList = null; 
    }

    start () {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection) {
                case '1' :
                    this.createList();
                    break;
                case '2' :
                    this.viewList();
                    break;
                case '3' : 
                    this.deleteList();
                    break;
                case '4' : 
                    this.displayLists();
                    break;
                default: 
                    selection = 0;
                }
            selection = this.showMainMenuOptions();
        }
        alert('All Done!');
    }
//options shown to the user
    showMainMenuOptions () {
        return prompt (`
            0) back
            1) create a new Grocery List
            2) view a Grocery List
            3) delete a Grocery List
            4) display all Grocery Lists
        `);
    }
//second options menu shown to user that pops up when viewing a list
    showListMenuOptions(listType) {
        return prompt (`
        0) back
        1) add a new food
        2) delete a food
        ----------------
        ${listType}
        `);
    }
//how to display lists using properties to outline the values
    displayLists () {
        let listString = '';
            for (let i = 0; i < this.lists.length; i++) {
            listString += i+ ') ' + this.lists[i].type + '\n';
            }
            alert(listString);
            }
    createList () {
        let type = prompt('Enter which grocery store for list: ');
        this.lists.push(new List(type));
    }
//viewing the lists using a loop and allowing users to create/delete food
    viewList() {
        let selection = prompt("Enter the number of the list you want to see:");
        if (selection > 0 && selection < this.lists.length) {
            this.selectedList = this.lists[selection];
            let description = 'GroceryList: ' + this.selectedList.type + '\n';
            description += ' ' + this.selectedList.describe() + '\n'; 
            for (let i = 0; i < this.selectedList.foods.length; i++) {
                description += i + ') ' + this.selectedList.foods[i].describe() + '\n';
            }
            let selection1 = this.showListMenuOptions (description);
            switch (selection1) {
                case '1':
                    this.createFood();
                    break;
                case '2' :
                    this.deleteFood();
            }
        }
    }
    deleteList() {
        let selection = prompt('Enter the selection of the food that you wish to delete: ');
        if (selection > 0 && selection < this.lists.length) {
            this.lists.splice(selection,1);
        }
    }
//creating and deleting food prompts and using add/splice to either add or delete
    createFood() {
        let type = prompt('Enter type of food: ');
        let amount = prompt('Enter amount of food you want: ');
        this.selectedList.addFood(new Food(type,amount));
    }
    deleteFood() {
        let selection = prompt('Enter the selection of the food that you want to delete');
        if (selection > 0 && selection < this.selectedList.foods.length) {
            this.selectedList.foods.splice(selection, 1);
        }
    }
}
//these are needed to execute the menu
let menu = new Menu();
menu.start();