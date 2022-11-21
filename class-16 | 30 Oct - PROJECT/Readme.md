# User Groups
    - Admin
    - User

# Users registered for this application can

    - Browse books from the library Page
        - Filter on left side of the page 
        - Filter them based on category, author, publcations etc..
    - Book Detail Page
        - Pay & Rent button
        - Like
        - Review
    - Pay & Rent Page - payment info & a specific duration
    - My Books
        - Currently rented Books / Liked Books



# Admin of this application can

    - List/manage books
    - Add/Edit Book Page — title, author, publisher, stock, availability
    - Track rented books and thier availability
    - Send notifications via email to users once lease expires

# Collections
    - Users [ID, userType, userName, email, password, DOB, image]
    - Books [ID, title, author, publisher, image, stock, availabeBooks, price, Likes:[userID], ratings]
    - Payment [ID, userID, paymentMethod: 'card', amount]
    - Likes [ID, userID, bookID]
    - Reviews [ID, userID, bookID, comment, rating]
    - Rent [userID, bookID, paymentID, startDate, endDate, returnDate]
