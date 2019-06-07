const faker = require('faker');
const fs = require('fs')

const generateImage = () => {
  var images = [];
  for (var i = 0; i < 1000; i++) {
    images.push(faker.image.animals())
  }
  return images;
}
const generateName = () => {
  var names = [];
  for (var i = 0; i < 1000; i++) {
    names.push(faker.name.findName())
  }
  return names;
}
const generateSentence = () => {
  var sentences = [];
  for (var i = 0; i < 1000; i++) {
    sentences.push(faker.random.words())
  }
  return sentences;
}
const generateColor = () => {
  var colors = [];
  for (var i = 0; i < 1000; i++) {
    colors.push(faker.random.word())
  }
  return colors;
}
var images = generateImage();
var names = generateName();
var sentences = generateSentence();
var colors = generateColor();
const generateData = () => {
  const random1 = Math.floor(Math.random() * Math.floor(images.length))
  const random2 = Math.floor(Math.random() * Math.floor(images.length))
  const random3 = Math.floor(Math.random() * Math.floor(images.length));
  const productname = names[random1];
  const imageurl = [images[random1], images[random2], images[random3]];

  const shoesizes = [random1, random2, random3];
  const designer = names[random1];
  const price = Math.floor(Math.random() * Math.floor(500));
  const color = colors[random1]
  const itemType = names[random2];
  const description = sentences[random1];
  const data = {
    productname: productname,
    imageurl: imageurl.join(','),
    shoesizes: shoesizes.join(','),
    designer: designer,
    price: price,
    color: color,
    itemtype: itemType,
    description: description
  }
  return data;
}
let dummyData = [];
for (var i = 0; i < 2000000; i++) {
  dummyData.push(generateData())
}

const fastcsv = require('fast-csv'); 
for(var i = 0; i<5; i++){
  const ws = fs.createWriteStream("../out.csv",{flags:'a'});  
  fastcsv  
    .write(dummyData, { headers: true })
    .pipe(ws);
}  