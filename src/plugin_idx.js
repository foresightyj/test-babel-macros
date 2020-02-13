import idx from 'idx';

const user = {
    user: {
        name: 'yj',
        age: 12
    },
    company: {
        name: "jshh"
    }
}

idx(user, _ => _.user.name);