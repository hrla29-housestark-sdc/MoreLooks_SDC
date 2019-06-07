const faker = require('faker');
const Product = require('./index.js');
const mongoose = require('mongoose');
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
let sizes = [
  'X-Small', 'Small', 'Medium', 'Large', 'X-Large',
  'Small', 'Medium', 'X-Large',
  'X-Small', 'Medium', 'Large',
  'Small', 'Medium', 'Large', 'X-Large',
  'X-Small', 'X-Large'
]
let designers = ['Gucci', 'Givency', 'Burberry', 'ALice + Olivia', 'Alexander Wang', 'Max Mara', 'Michael Kors', 'Moschino', 'Theory', 'Thom Browne']
var itemType = ['shoes','dress','earings','bags','bracelet','purses','dress','suit','shirt','t-shirt','jacket','pants',
'watch','small bags','tie','socks','towel']
let counter = 1;
const generateData = () => {
  const random1 = Math.floor(Math.random() * Math.floor(images.length))
  const random2 = Math.floor(Math.random() * Math.floor(images.length))
  const random3 = Math.floor(Math.random() * Math.floor(images.length));
  const randomItem = Math.floor(Math.random() * Math.floor(itemType.length));
  const randomDesigner = Math.floor(Math.random() * Math.floor(designers.length));
  const randomSize =  Math.floor(Math.random() * Math.floor(sizes.length));
  const productname = names[random1];
  const imageurl = [images[random1], images[random2], images[random3]];
  let clothingsize = [];
  for(var i = 0; i< randomSize; i++){
    clothingsize.push(sizes[i])
  }

  const shoesizes = [random1, random2, random3];
  const designer = designers[randomDesigner];
  const price = Math.floor(Math.random() * Math.floor(500));
  const color = colors[random1]
  const itemtype = itemType[randomItem]
  const description = sentences[random1];
  const data = {
    id: counter++,
    productname: productname,
    imageurl: imageurl,
    shoesizes: shoesizes,
    designer: designer,
    clothingsizes: clothingsize,
    price: price,
    color: color,
    itemtype: itemtype,
    description: description
  }
  return data;
}


let writeStream = fs.createWriteStream('../dummydata.json', { flags: 'w' });
function writeOneMillionTimes(writer, encoding, callback) {
  let i = 10000002;
  write();
  function write() {
    let ok = true;
    
    do {
      i--;
      if (i === 10000001) {
        writer.write('[', encoding, callback);
      } else if (i === 1) {
        let randomData = JSON.stringify( generateData(), null, 2)
        writer.write(randomData, encoding, callback);
      } else if (i === 0) {
        // last time!
        writer.write(']', encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        let randomData = JSON.stringify( generateData(), null, 2) + ',';
        ok = writer.write(randomData, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
      // write()
    }
  }
}

writeOneMillionTimes(writeStream, 'utf8', (err) => {
  if (err) {
    console.log('Error', err)
  } else {
    console.log('Succesfully written')
  }
})
































