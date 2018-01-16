/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const { User, Product } = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({name: 'Pinata Joe', email: 'pjoe@aol.com', password: '123'}),
    User.create({name: 'Pinata Pauline', email: 'ppauline@aol.com', password: '123'})
  ])

  const products = await Promise.all([
    Product.create({name: 'Thomas the Train', price: 29.99, imgUrl: 'https://http2.mlstatic.com/bonita-pinata-de-thomas-tomas-D_NQ_NP_20489-MLM20191427015_112014-F.jpg', 'description': 'the finest train in town', 'category': '1'}),
    Product.create({name: 'Elmo', price: 10.00, imgUrl: 'http://natablog.porterlabs.com/wp-content/uploads/2009/10/021_oct3-682x1024.jpg', 'description': 'tickle me', 'category': '1'}),
    Product.create({name: 'Ariel the Mermaid', price: 15.00, imgUrl: 'https://d2j6tswx2otu6e.cloudfront.net/iG732U278mgfojPIKf55qLSNbNk=/600x1066/80f5/80f51be91dd74ad9ae6f40872fdde62a.jpg', 'description': 'under the sea', 'category': '1'}),
    Product.create({name: 'Smurf', price: 5.00, imgUrl: 'https://i.pinimg.com/236x/ee/53/78/ee5378953f9ed099eecd1cfb2ce678f2--smurf-birthday-party.jpg', 'description': 'say poppa', 'category': '1'}),
    Product.create({name: 'Iron Man', price: 70.00, imgUrl: 'https://i.pinimg.com/736x/d8/2c/a3/d82ca3ab127330e4962d497141c710f8.jpg', 'description': 'I am iron man -"Ozzy"', 'category': '1'}),
    Product.create({name: 'Pizza', price: 20.00, imgUrl: 'http://www.pinatacenter.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/i/pizza-slice-pinata.jpg', 'description': 'Pizza party', 'category': '1'}),
    Product.create({name: 'Donkey', price: 25.00, imgUrl: 'https://www.dollargeneral.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/0/6/06187902.jpg', 'description': 'CLASSIC', 'category': '1'}),
    Product.create({name: 'Bing Bong', price: 7.99, imgUrl: 'https://cdn.shopify.com/s/files/1/0780/2999/products/bing-bong_large.jpg?v=1475597072', 'description': 'What is this abomination', 'category': '1'}),
    Product.create({name: 'Harry Potter', price: 690.70, imgUrl: 'https://img0.etsystatic.com/059/1/6309417/il_570xN.748736108_6y01.jpg', 'description': 'Bazinga', 'category': '1'}),
    Product.create({name: 'Angry Bird', price: 89.99, imgUrl: 'http://www.pinatacenter.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/e/red-angry-bird-pinata.jpg', 'description': 'ANGRY', 'category': '1'})
  ])

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
