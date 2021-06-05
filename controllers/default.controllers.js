module.exports = {
    index: (req, res) => {
        const employees =[








            {
                "_id": "1",
                "name" : "khairat",
                "email" :"khairy@gmail.com",
                "address" : "no1 bukuru",
                "phone" : 1234567
            },
            
            {
                "_id": "2",
                "name" : "nanbyen",
                "email" :"nanbyen@yahoo.com",
                "address" : "no5 russau",
                "phone" : 56789
            },
            
            {
                "_id": "3",
                "name" : "lawrence",
                "email" :"xavier@gmail.com",
                "address" : "no11 Odus village",
                "phone" : 10111213
            },
            {
                "_id": "4",
                "name" : "kankies",
                "email" :"kankies@gmail.com",
                "address" : "no11 naraG village",
                "phone" : 12111213
            },
            {
                "_id": "5",
                "name" : "bobo",
                "email" :"bobo@gmail.com",
                "address" : "no11 jenta",
                "phone" : 13111213
            }, {
                "_id": "6",
                "name" : "fefe",
                "email" :"fef@gmail.com",
                "address" : "no11 Twad village",
                "phone" : 14111213
            }, {
                "_id": "7",
                "name" : "marcey",
                "email" :"marcey@gmail.com",
                "address" : "no12 rukuba road",
                "phone" : 15111213
            }
        ]
        res.render("defaultViews/index", {employees});
    },



    users: (req, res) => {



        const people = [
            {
                "name": "Khairat",
                "age": 34,
                "email": "khairy@gmail.com"
            },
            {
                "name": "nanbyen",
                "age": 16,
                "email": "byen@gmail.com"
            }
        ]   
        console.log(people);
        res.render("defaultViews/users", {people});
    }
}