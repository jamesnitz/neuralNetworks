// Exclusive or
//We input something, then the network outputs based on the training we give it

// input 0 0, output 0
// input 0 1, output 1
// input 1 0, output 1
// input 1 1, output 0

//instantiate a new network with brain.js
//the more hidden layers the longer it takes to train
const net = new brain.NeuralNetwork({ hiddenLayers: [3]});
//Literally the data to train the brain
const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

//the training being run
//also logging the measuring AKA errors until the net catches on  
net.train(trainingData, {
  log: (error) => console.log(error),
  logPeroid: 100
});

//using a neural net, it's very hard for them to get exactly to 0 or 1, but they can get close
console.log(net.run([0, 0])) //[0.057399265468120575]
console.log(net.run([0, 1])) // [0.9307540655136108]
console.log(net.run([1, 1])) //[0.08771704882383347]

