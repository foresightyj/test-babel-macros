import idx from 'idx.macro';
const fiends_of_friends = idx(props, _ => _.user.friends[0].friends);
