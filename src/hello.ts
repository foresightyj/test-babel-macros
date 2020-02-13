import idx from 'idx.macro';
import mynameof from "../mynameof.macro";
import nameof from "ts-nameof.macro";


const user = {
    user: {
        fullName: 'yj',
        age: 12
    },
    company: {
        name: "jshh"
    }
}
idx(user, _ => _.user.fullName);

const n = mynameof(user.user.fullName);
console.log('should output fullName:', n); //outputs "fullName"
console.log("should output alert:", nameof(window.alert))