const inputs = [1, 4, 1, 3, 1];

function CountBreaks(data) {
  var count = 0;
  for (let i of data) {
    if (i + 1 === data.length) {
      count = data.indexOf(i);
    }
  }
  return count;
}
// I didn't got the logic of this line below, so didn't wrote it. It would have been great if you would have elaborated the logic in the example as well.
// The optimal time for a break is between two tasks i and i+1, when the sum of all tasks from 0 to i equals the sum i+1 to n.

console.log(CountBreaks(inputs));
