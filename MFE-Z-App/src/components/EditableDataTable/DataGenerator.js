/* eslint no-mixed-operators: 0 */

/**
 * products generator for stories
 *
 * @param {Number} quantity - quantity of products
 * @param {Function} callback - callback func which is similiar to 'mapFunction'
 * aims to customize product format
 *
 * @return {Array} - products array
 */

export const employeeGenerator = (quantity = 100, callback) => {
    if (callback) return Array.from({ length: quantity }, callback);

    // if no given callback, rerun default product format.
    return (
        // Array.from({ length: quantity }, (value, index) => ({
        //     name: fullNames['name' + getRandomNum(20)],
        //     company: companyNames['name' + getRandomNum(3)],
        //     city: "Sydney",
        //     state: "NSW"
        // }))

        Array.from({ length: quantity }, (value, index) => ([
            fullNames['name' + getRandomNum(20)],
            companyNames['name' + getRandomNum(3)],
            "Sydney",
            "NSW"
        ]))
    );
};

function getRandomNum(range) {
  return Math.floor(Math.random() * range) + 1;
}

const fullNames = {
    name1: 'Justine Keller',
    name2: 'Karlee Wong',
    name3: 'Gaige Watkins',
    name4: 'Leon Mccarthy',
    name5: 'Colton Delacruz',
    name6: 'Nora Hickman',
    name7: 'Alia Alvarado',
    name8: 'Sullivan Fleming',
    name9: 'Dalton Tran',
    name10: 'Camille Chaney',
    name11: 'Cloe Griffin',
    name12: 'Jase Burns',
    name13: 'Madden Savage',
    name14: 'Briana Weaver',
    name15: 'Randall Rowe',
    name16: 'Breanna Mcintyre',
    name17: 'Yasmin Steele',
    name18: 'Salvador Howe',
    name19: 'Charlotte Levy',
    name20: 'Camron Castillo'
}

const companyNames = {
  name1 : 'TEST CORP',
  name2 : 'ACME LTD',
  name3 : 'ECORP'
}

export const productsQualityGenerator = (quantity = 5) =>
  Array.from({ length: quantity }, (value, index) => ({
    id: index,
    name: `Item name ${index}`,
    quality: index % 3
  }));

const jobType = ['A', 'B', 'C', 'D', 'E'];

const jobOwner = ['Allen', 'Bob', 'Cindy'];

export const jobsGenerator = (quantity = 5) =>
  Array.from({ length: quantity }, (value, index) => ({
    id: index,
    name: `Job name ${index}`,
    owner: jobOwner[Math.floor((Math.random() * 2) + 1)],
    type: jobType[Math.floor((Math.random() * 4) + 1)]
  }));

export const todosGenerator = (quantity = 5) =>
  Array.from({ length: quantity }, (value, index) => ({
    id: index,
    todo: `Todo item ${index}`,
    done: Math.random() > 0.4 ? 'Y' : 'N'
  }));

const startDate = new Date(2017, 0, 1);
const endDate = new Date();

export const stockGenerator = (quantity = 5) =>
  Array.from({ length: quantity }, (value, index) => ({
    id: index,
    name: `Todo item ${index}`,
    inStockDate:
      new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  }));

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
