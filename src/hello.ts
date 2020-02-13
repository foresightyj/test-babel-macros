import idx from 'idx.macro';
import nameof from "ts-nameof.macro";
import mynameof from "../mynameof.macro";

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

console.log("should output alert:", nameof(window.alert))

const n = mynameof(user.user.fullName);
console.log('should output fullName:', n); //outputs "fullName"

const y = yournameof(user.user.fullName);
console.log('should also output fullName:', y);
