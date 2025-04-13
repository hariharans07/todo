const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "shksss2005"
const DATABASE_NAME = 'sample_mflix';
const CONNECTION_URI = `mongodb+srv://hariharan149:shksss2005@todo.bxlvbbl.mongodb.net/`
async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'hariharan149',
        pass: PASSWORD
    });
}

main().then(() => {
    console.log(`Connected`);
}).catch(console.log);