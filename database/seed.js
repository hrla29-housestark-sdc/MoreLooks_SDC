const Product = require('./index.js');
const mongoose = require('mongoose');
const data = require('../data.json');

const helper = (arr, size) => {
  for (var i = 0; i < 7; i++) {
    let helper = Math.floor(Math.random() * size.length)
    if (!arr.includes(size[helper])) {
      arr.push(size[helper])
    }
  }
  return arr
}

const randomShoeSizes = () => {
  let arr = []
  let size = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]

  helper(arr, size)
  let c = arr.sort((a, b) => a - b)
  return c
}

const randomClothingSize = () => {
  let size = [
    ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'],
    ['Small', 'Medium', 'X-Large'],
    ['X-Small', 'Medium', 'Large'],
    ['Small', 'Medium', 'Large', 'X-Large'],
    ['X-Small', 'X-Large']
  ]
  let helper = Math.floor(Math.random() * size.length)
  return size[helper]
}

const randomDesigner = () => {
  let designers = ['Gucci', 'Givency', 'Burberry', 'ALice + Olivia', 'Alexander Wang', 'Max Mara', 'Michael Kors', 'Moschino', 'Theory', 'Thom Browne']
  let helper = Math.floor(Math.random() * designers.length)
  return designers[helper]
}

const randomPrice = (max, min) => {
  return Math.floor(Math.random()*(max-min+1)+min);
}

const shoesdescription = () => {
  let adjectives = [ "elegant", "beautiful", "classy", "amazing", "expensive", "cute", "gorgeous", "trendy", "comfortable"];
  let randomindex = Math.floor(Math.random() * adjectives.length)
  

  let sentences = [
    `These ${adjectives[randomindex]} shoes are highly fashionable. Wearable at any occasion.`,
    `Sleek, modern, and ${adjectives[randomindex]}. Modern sandals to complete your favorite looks.`,
    `Modern strap design brings ${adjectives[randomindex]}, distinctive attitude to the bridge of a classic fitted sandal with a comfortably cushioned footbed.`,
    `A leather strap design gives a ${adjectives[randomindex]} signature statement on a slide sandal with a lightly cushioned footbed.`,
    `A raised, vintage-style logo details the vamp of a slide sandal, while a ${adjectives[randomindex]} palette keeps the look ${adjectives[randomindex]}.`
  ]
  let randomsentenceindex = Math.floor(Math.random() * sentences.length)
  
  return sentences[randomsentenceindex]
}

const earringdescription = () => {
  let adjectives = [ "elegant", "timeless", "classy", "amazing", "expensive", "cute", "gorgeous", "trendy", "comfortable"];
  let randomindex = Math.floor(Math.random() * adjectives.length)

  let sentences = [
    `${adjectives[randomindex]}, handcrafted studs feature sparkling stones secured by triple-pronged settings.`,
    `Oversized statement earrings made from ${adjectives[randomindex]} resin suspend ${adjectives[randomindex]} seashell-inspired shapes`,
    `${adjectives[randomindex]} stones and crystals give a vintage sophistication suitable for any formal occasion.`,
    `These everyday studs have a contemporary feel thanks to a ${adjectives[randomindex]} front/back design.`,
    `${adjectives[randomindex]} stones center ${adjectives[randomindex]} stud earrings that expertly catch and reflect the light.`
  ]
}

const pursesdescription = () => {
  let adjectives = [ "elegant", "timeless", "classy", "amazing", "expensive", "cute", "gorgeous", "trendy", "comfortable"];
  let randomindex = Math.floor(Math.random() * adjectives.length)

  let sentences = [
    `A campus-classic styled in textured leather, perfect for those looking for a ${adjectives[randomindex]} look.`,
    `${adjectives[randomindex]} backpack crafted from durable scratch-resistant faux leather.`,
    `Star studded and outfitted with single rosette stone. The modern and ${adjectives[randomindex]} design of this bag makes it extremely versatile.`,
    `An oversized logo gleams from a ${adjectives[randomindex]} leather bag you can carry as a clutch or sling over your shoulder.`,
    `Supersoft faux leather flips inside-out for a reversible tote makes this a ${adjectives[randomindex]} on the go bag.`
  ]
  let randomsentenceindex = Math.floor(Math.random() * sentences.length)
  
  return sentences[randomsentenceindex]
}




const seed = () => {
  Product.insertMany(data)
    .then(() => console.log('data seeded'))
    .then(() => mongoose.connection.close())
    .catch(err => console.error(err))
}
console.log(data)
// seed()