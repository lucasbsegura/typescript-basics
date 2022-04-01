function insertAtBeginning(array: any[], value: any) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1);
updatedArray[0].split('');

//Generic Types
function insertAtBeginning1<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
const updatedArray1 = insertAtBeginning1(demoArray, -1);
//updatedArray1[0].split(''); 

const stringArray = insertAtBeginning1(['a', 'b', 'c'], 'd');
stringArray[0].split('');