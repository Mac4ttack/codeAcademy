/*
Meal Maker
As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!
*/



const menu = {
    _courses: {
      appetizers:[],
      mains:[],
      desserts:[]
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName, 
        price: dishPrice
      }
           this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randNum = Math.floor(Math.random() * dishes.length)
      return dishes[randNum];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totPrice = appetizer.price + main.price + dessert.price;
  
      return `Total Price: $${totPrice}. Your Dishes are ${appetizer.name}, ${main.name}, and ${dessert.name}`;
      }   
  }
  
  menu.addDishToCourse('appetizers', 'Wings', 13.00);
  menu.addDishToCourse('mains', 'Burger', 15.00);
  menu.addDishToCourse('desserts', 'Ice Cream', 13.00);
  menu.addDishToCourse('appetizers', 'Nachos', 10.00);
  menu.addDishToCourse('mains', 'Steak', 17.00);
  menu.addDishToCourse('desserts', 'Brownie', 3.00);
  
  
  
  const meal = menu.generateRandomMeal();
  console.log(meal)
  const meal2 = menu.generateRandomMeal();
  console.log(meal2)