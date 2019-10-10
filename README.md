<h1 align="left"> mongooseuuid 👋</h1>


> generate random unique uuid for Mongoose schema


## Prerequisites

- npm >=5.5.0

## Install

```sh
$ npm install @alakermi/mongooseuuid --save
```

## Use

```js
import mongoose from 'mongoose';
import mongooseuuid from 'mongooseuuid';
 
mongoose.connect('mongodb://localhost/Default');
 
// Default options
let options = {
  field:"uniqueid" // default field name for mongoose schema
};
 
// Add the plugin to the schema with default options
let Schema = mongoose.Schema({ uniqueid: 'string', });
Schema.plugin(mongooseuuid(options));
 
// Create a model
let Guest = mongoose.model('guest', Schema);
 
// Create and and save document
let guest = new Guest({})
await guest.save()

```

## Author

👤 **Abdelhak Akermi**

* Github: [@alakermi](https://github.com/alakermi)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/alakermi/mongooseuuid/issues).

## Show your support

Give a ⭐️ if this project helped you!

***
