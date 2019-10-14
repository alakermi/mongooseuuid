
import * as uuid from 'uuid'
const _defaultoptions={
  field:"uniqueid"
}
export function mongooseuuid(schema, options) {
  schema.pre('save', async function (next) {
    const doc = this;
    const opts= options || Object.assign({},_defaultoptions)
    opts.field=opts.field|| _defaultoptions.field
    if(!schema.obj[opts.field]){
      throw new Error(`you must have ${opts.field} in your schema`)
    }
    let isfounded = true;
    let randomuid = uuid.v4();
    while (isfounded) {
      const res = await this.constructor.findOne({ uniqueid: randomuid });
      if (res) {
        randomuid = uuid.v4();
      } else {
        isfounded = false;
       
        doc[opts.field] = randomuid;
        next();
      }
    }
  });
}
