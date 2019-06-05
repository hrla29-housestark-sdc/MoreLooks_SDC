const faker = require('faker');
const Product = require('./index.js');
const mongoose = require('mongoose');
const fs = require('fs')

const generateImage = () => {
    var images = [];
    for(var i = 0; i<1000; i++){
        images.push(faker.image.animals())
    }
    return images;
}
const generateName = () => {
    var names =[];
    for(var i=0; i < 1000; i++){
        names.push(faker.name.findName())
    }
    return names;
}
const generateSentence = () => {
    var sentences = [];
    for(var i = 0; i<1000; i++){
        sentences.push(faker.random.words())
    }
    return sentences;
}
const generateColor = () => {
    var colors = [];
    for(var i =0; i< 1000; i++){
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
    
    const shoesizes = [random1,random2,random3];
    const designer = names[random1];
    const price = Math.floor(Math.random() * Math.floor(500));
    const color = colors[random1]
    const itemType = names[random2];
    const description = sentences[random1];
    const data = {
        productname: productname,
        imageurl:imageurl, 
        shoesizes:shoesizes, 
        designer:designer,
        price:price,
        color: color,
        itemType: itemType,
        description: description
    }
    return data;
}
let dummyData = [];
for(var i = 0; i< 500000; i++){
    dummyData.push(generateData())
}
var str = JSON.stringify(dummyData,null,2);
var data = str.slice(1,str.length-1) + ','

    // var data = JSON.stringify(generateData(),null,2) + ','
    // console.log(data.slice(0,data.length-1));
     let writeStream = fs.createWriteStream('../dummydata.json',{flags: 'w'});
    function writeOneMillionTimes(writer, data, encoding, callback) {
        let i = 22;
        write();
        function write() {
          let ok = true;
          do {
            i--;
            if(i === 21){
                writer.write('[', encoding, callback);
            }else if(i === 1){
            writer.write(data.slice(0,data.length-1), encoding, callback);
            }else if (i === 0) {
              // last time!
              writer.write(']', encoding, callback);
            } else {
              // See if we should continue, or wait.
              // Don't pass the callback, because we're not done yet.
              ok = writer.write(data, encoding);
            }
          } while (i > 0 && ok);
          if (i > 0) {
            // had to stop early!
            // write some more once it drains
            writer.once('drain', write);
          }
        }
      }
    //   var str = JSON.stringify(generateData(),null,2) + ',';
     
      writeOneMillionTimes(writeStream,data,'utf8',(err) => {
            if(err){
                console.log('Error',err)
            }else {
                console.log('Succesfully written')
            }})

   
   






    
    
    
    
    
    
    
    
    
    
            // let writeStream = fs.createWriteStream('../dummydata.json',{flags: 'w'});
    // writeStream.write(JSON.stringify(dummyData,null,2), (err) =>{
    //     if(err){
    //         console.log('Error',err)
    //     }else {
    //         console.log('Succesfully written')
    //     }
    // })
            















// fs.writeFile('../dummydata.json',JSON.stringify(dummyData,null,2),'utf8',(err) => {
//     if(err){
//         console.log('Error',err)
//     }
//         console.log('Succesfully write the file')
// })
// fs.readFile('../dummydata.json', (err,data) => {
//     if(err){
//         console.log('Error readiing',err)
//     }else {

//         let datas = JSON.parse(data);
//         datas.push(dummyData)
//         fs.writeFile('../dummydata.json',JSON.stringify(datas,null,2),'utf8',(err) => {
//             if(err){
//                 console.log('Error',err)
//             }
//             console.log('Succesfully write the file')
//         })
//     }
// })


// const seed = () => {
//     Product.insertMany(dummyData)
//       .then(() => console.log('data seeded'))
//       .then(() => mongoose.connection.close())
//       .catch(err => console.error(err))
//   }
//   seed()

