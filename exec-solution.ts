const args = process.argv;

const projectId = `${args[2]}`.padStart(4, '0');

const dynamicModule = require(`./solutions/proj-${projectId}`);
const func = dynamicModule[Object.keys(dynamicModule)[0]];

console.time(projectId);
const result = func();
console.timeEnd(projectId);
console.log(result);
