//Scalar types - String, Boolean, Int, Float, ID, 

//Demo user data
const users = [{
    id: "1",
    name: "Andrew",
    email: "andrew@example.com",
    age: 27,
    posts: "1"
}, {
    id: "2",
    name: "Sarah",
    email: "sarah@example.com",
    posts: "2"
},{
    id: "3",
    name: "Mike",
    email: "mike@example.com",
    posts: "3"
}]

//Dummy post data
let posts = [
    {
        id: "10",
        title: "post 1",
        body: "no content",
        published: true,
        author: '1'
    },
    {
        id: "11",
        title: "post 2",
        body: "test body",
        published: false,
        author: '3'
    },
    {
        id: "12",
        title: "the test title of post",
        body: "It is really a happy day.",
        published: true,
        author: '2'
    }
]

//Dummy comment data
let comments = [
    {
        id: "102",
        text:"This works well for me.",
        author: "3",
        post: "12"
    },
    {
        id: "103",
        text: "Glad you enjoy it",
        author: "1",
        post: "10"
    },
    {
        id: "104",
        text: "This did no work",
        author: "3",
        post: "12"
    },
    {
        id: "105",
        text: "Nevermind. I got it to work.",
        author: "2",
        post: "10"
    }
]

const db = {
    users,
    posts,
    comments
};

export {db as default};