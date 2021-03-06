import { Product, ProductType } from '../types/product.types'

export const productList: Product[] = [
  {
    productId: 1,
    type: ProductType.Watch,
    productTitle: 'Apple Watch',
    productSubTitle: 'Series 5 SE',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada purus volutpat vel sed viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus pellentesque sagittis. Felis rhoncus facilisis massa eget purus in purus. Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque sit mattis in egestas neque. Eu porta tempor sodales nisl integer turpis porttitor sed sed. Ut senectus odio dictum enim velit tempor diam quisque suspendisse.\n' +
      'Orci vel ridiculus diam viverra. Libero malesuada orci, quis placerat suscipit augue imperdiet. Et praesent augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam sit viverra enim. Id id placerat eu etiam nulla laoreet.\n' +
      'Dignissim leo fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra hendrerit risus.\n' +
      'Odio phasellus nibh senectus nec id enim quam sed. At potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut feugiat varius risus eros.\n',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis.',
    price: 529.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/cwvkb0z/Name-Watch.png',
  },
  {
    productId: 2,
    type: ProductType.Headphones,
    productTitle: 'Sony ZX330BT',
    productSubTitle: 'Light Grey',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada purus volutpat vel sed viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus pellentesque sagittis. Felis rhoncus facilisis massa eget purus in purus. Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque sit mattis in egestas neque. Eu porta tempor sodales nisl integer turpis porttitor sed sed. Ut senectus odio dictum enim velit tempor diam quisque suspendisse.\n' +
      'Orci vel ridiculus diam viverra. Libero malesuada orci, quis placerat suscipit augue imperdiet. Et praesent augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam sit viverra enim. Id id placerat eu etiam nulla laoreet.\n' +
      'Dignissim leo fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra hendrerit risus.\n' +
      'Odio phasellus nibh senectus nec id enim quam sed. At potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut feugiat varius risus eros.\n',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 39.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/t850R8j/Name-Headphones.png',
  },
  {
    productId: 3,
    type: ProductType.Phone,
    productTitle: 'Iphone 11',
    productSubTitle: 'Serious Black',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada purus volutpat vel sed viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus pellentesque sagittis. Felis rhoncus facilisis massa eget purus in purus. Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque sit mattis in egestas neque. Eu porta tempor sodales nisl integer turpis porttitor sed sed. Ut senectus odio dictum enim velit tempor diam quisque suspendisse.\n' +
      'Orci vel ridiculus diam viverra. Libero malesuada orci, quis placerat suscipit augue imperdiet. Et praesent augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam sit viverra enim. Id id placerat eu etiam nulla laoreet.\n' +
      'Dignissim leo fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra hendrerit risus.\n' +
      'Odio phasellus nibh senectus nec id enim quam sed. At potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut feugiat varius risus eros.\n',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 619.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/Y3593Wh/Name-Iphone-12-01.png',
  },
  {
    productId: 4,
    type: ProductType.Phone,
    productTitle: 'Iphone 11',
    productSubTitle: 'Subway Blue',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada purus volutpat vel sed viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus pellentesque sagittis. Felis rhoncus facilisis massa eget purus in purus. Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque sit mattis in egestas neque. Eu porta tempor sodales nisl integer turpis porttitor sed sed. Ut senectus odio dictum enim velit tempor diam quisque suspendisse.\n' +
      'Orci vel ridiculus diam viverra. Libero malesuada orci, quis placerat suscipit augue imperdiet. Et praesent augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam sit viverra enim. Id id placerat eu etiam nulla laoreet.\n' +
      'Dignissim leo fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra hendrerit risus.\n' +
      'Odio phasellus nibh senectus nec id enim quam sed. At potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut feugiat varius risus eros.\n',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 619.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/fvbpYGw/Name-Iphone-12-02.png',
  },
  {
    productId: 5,
    type: ProductType.Laptop,
    productTitle: 'Macbook Pro 16???',
    productSubTitle: 'Silver - M1 Pro',
    fullDescription: 'lorem lorem',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 3249.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/QXrJy4d/Name-Macbook.png',
  },
  {
    productId: 6,
    type: ProductType.Phone,
    productTitle: 'Iphone 11',
    productSubTitle: 'Product RED',
    fullDescription: 'lorem lorem',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 619.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/5KpXr7p/Name-Iphone-12-03.png',
  },
  {
    productId: 7,
    type: ProductType.Phone,
    productTitle: 'Iphone 11',
    productSubTitle: 'Milky White',
    fullDescription: 'lorem lorem',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 619.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/fQdyFV5/Name-Iphone-12-04.png',
  },
  {
    productId: 8,
    type: ProductType.Phone,
    productTitle: 'Iphone 12',
    productSubTitle: 'Rose Pink',
    fullDescription: 'lorem lorem',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 729.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/3MQnKJm/Product-Image.png',
  },
  {
    productId: 9,
    type: ProductType.Phone,
    productTitle: 'Iphone 12',
    productSubTitle: 'Navy Blue',
    fullDescription: 'lorem lorem',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 729.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/9tG4Kp6/Product-Image-1.png',
  },
  {
    productId: 10,
    type: ProductType.Laptop,
    productTitle: 'Dell XPS 15 2-in-1',
    productSubTitle: 'Midnight Gray',
    fullDescription: 'lorem lorem',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 3199.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/mGPLsch/Product-Image-2.png',
  },
  {
    productId: 11,
    type: ProductType.Phone,
    productTitle: 'Iphone 13 Pro',
    productSubTitle: 'Silly Silver',
    fullDescription: 'lorem lorem',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 1029.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/19TcLVq/Product-Image-3.png',
  },
  {
    productId: 12,
    type: ProductType.Phone,
    productTitle: 'Iphone 13 Pro',
    productSubTitle: 'Grey',
    fullDescription: 'lorem lorem',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 1099.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/7Jpx12F/Product-Image-4.png',
  },
  {
    productId: 13,
    type: ProductType.Phone,
    productTitle: 'Samsung Galaxy Note 21 ',
    productSubTitle: '2 - Options',
    fullDescription: 'lorem lorem',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 999.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/xghbSMQ/Product-Image-5.png',
  },
  {
    productId: 14,
    type: ProductType.Phone,
    productTitle: 'Samsung Galaxy S21+',
    productSubTitle: 'Lilac Purple',
    fullDescription: 'lorem lorem',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 849.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/3R995MK/Product-Image-6.png',
  },
  {
    productId: 15,
    type: ProductType.Laptop,
    productTitle: 'Dell XPS 13',
    productSubTitle: 'White',
    fullDescription: 'lorem lorem',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 1799.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/1qdB2kF/Product-Image-7.png',
  },
  {
    productId: 16,
    type: ProductType.Laptop,
    productTitle: 'Dell XPS 15',
    productSubTitle: 'Light Grey',
    fullDescription: 'lorem lorem',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ',
    price: 1899.99,
    quantity: 1,
    photoPath: 'https://i.ibb.co/LzZ6F9Z/Product-Image-8.png',
  },
]
