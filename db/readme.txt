books.json :
    {
        id: book's id as in ISBN
        reldt: book's release date
        author: book's author
        title: book's title
        stock: full stock of the book
        remain: remaining stock of the book
    }

borrow.json :
    {
        id: borrower's id
        borrowed: book's id(s), separated by (;) 
    }

login.json :
    {
        id: user's username
        name: user's fullname
        password: user's password (not hashed)
    }

src for books : https://www.usabledatabases.com/database/books-isbn-covers/sample/