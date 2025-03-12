0. export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
  }
  
1. export default function taskBlock(trueOrFalse) {
    let task = false;
    let task2 = true;
  
    if (trueOrFalse) {
      const task = true;
      const task2 = false;
    }
  
    return [task, task2];
  }

2. export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    this.addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }


3. export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19){
    return initialNumber + expansion1989 + expansion2019;
  }

4. export default function returnHowManyArguments(x, y, z, alpha) {
    return args.length;
  }

5. export default function concatArrays(array1, array2, string) {
    return [array1, array2, string];
  }


6. export default function getSanFranciscoDescription() {
    const year = 2017;
    const budget = {
      income: '$119,868',
      gdp: '$154.2 billion',
      capita: '$178,479',
    };
  
    return `As of ${year}, it was the seventh-highest income county in the United State with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}`;
  }

7. export default function getBudgetObject(income, gdp, capita) {
  const budget = {income, gdp, capita};
  return budget;
}
