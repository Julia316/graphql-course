const Query = {
    users(parent, args, { db }, info) {
        if(!args.query){
            return db.users;
        }
        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    posts(parent, args, { db }, info) {
        if(!args.query){
            return db.posts;
        }
        let q = args.query.toLowerCase();
        return db.posts.filter((post) => {              
            return post.title.toLocaleLowerCase().includes(q) || post.body.toLocaleLowerCase().includes(q)
        })
    },
    comments(parent, args, { db }, info){
        return db.comments;
    }
};

export { Query as default }