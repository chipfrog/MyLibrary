# User guide

## User creation
Application can't be used without creating an account. New account can bew created on the front page by clicking "Create User" button and choosing desired (unique) 
username and password. Both must be at least five characters long. Application will inform the user if username already exists or username/password doesn't match the criteria. Notification will also pop up upon successful user creation.

## Logging in
To login, one must simply type correct username and password on the corresponding fields and click "Login" button. If there is a typo etc., a red notification will pop up and inform what went wrong.
If username and password are correct, user will be directed to the main page of the application.

## Logging out
![Logging out](https://github.com/chipfrog/MyLibrary/blob/main/Documentation/pictures/options.png)

On the top right corner there is cog icon next to your username. Click the icon and then click "Logout" to logout. You will be directed back to the login page. 

## Searching and adding books
![Searchbar](https://github.com/chipfrog/MyLibrary/blob/main/Documentation/pictures/searchbar.png)

On the top right corner there is a search bar that is used for searching books from Google's database. To do a general search simply type something related to the book you're looking for (title, author, etc.) and click the blue search button. You will be directed to a search results page where results are shown as clickable 
book covers. You can also do more specific searches. By clicking the "Filter by" button next to the search bar you can choose to search by title or author field alone. To do a general search again, choose "No filter". Keywords can also be written inside quotation marks to search for exact word matches.
By clicking a book cover on the results page, you get to view the book's info page. Basic information about the book is shown there like title, author, description and category. If Google Books users have reviewed the book, an average review score is shown with the number of reviews. To add book to your library, click "Add book to library" button. You will be directed to the main page and the added book will appear on the page among your other books.

### Going back to search results
You can go back to last search results from anywhere by clicking "Book finder" on the navigation bar. If you haven't searched anything during your current session no books are shown. 

## Editing added books
### Info cards
![Info card](https://github.com/chipfrog/MyLibrary/blob/main/Documentation/pictures/bookcard_example.png)

_Info card_

Added books are listed as info cards on the main page. They show basic information about the book but also have some limited interactivity. The bottom right corner shows your review score for the book as a five star system. By default the score is set to 1/5 but you can change it by clicking the stars. Every time you change the score the page sorts books again from the highest score to the lowest. On the bottom left corner two green icons (see _Info card_-picture) may be shown. The green book icon is shown if you have marked the book as "read". The green box icon is shown if you have marked the book as "owned". To learn how to mark book as "read" and "owned" read further. The book cover thumbnail on the info card works as a link to the book's own page where you can read and edit more information about the book.

### Book view
![Book info page](https://github.com/chipfrog/MyLibrary/blob/main/Documentation/pictures/book_info.png)

_Added book's info page_

Functionalities on this page include writing a review, adding quotes and categories, changing the review score, marking the book as "read" and "owned", changing the background banner color and deleting the book. Let's go through these one by one. 

#### Changing the review score
The review score can be changed here as well. It works just like with the info cards. Just click the desired score/stars and it will update. The star rating can be found below title and author.

#### Marking book as read and owned
Below the rating there are two boxes: read and owned. Simply check the box "Read" if you have read the book and "Owned" if you own the book. You can also uncheck
if you clicked either of them accidentally. These changes will also update to the info card and the corresponding icons will appear/disappear.

#### Writing a review
Below the colored (gray by default) banner there is row of different tabs. A tab called Review is always open at the beginning but you can change between different tabs cy clicking them. To write a review, open the Review tab and click the Edit button. A text area will open and you can write your review there. To save your review, click "Save changes" button and your review will be shown. If you would like to edit your review click "Edit" and the text area will open again but this time it will contain your previously written review. Now you can edit it the way you like. Save the changes when you are done by clicking "Save changes". If you don't want to save changes, click the "Cancel" button and you'll get out of the editing mode.

#### Adding quotes
![Quotes](https://github.com/chipfrog/MyLibrary/blob/main/Documentation/pictures/quotes.png)

Switch to the "Quotes" tab to view, add and delete quotes. To add a new quote, click the blue plus icon. Writing quotes works just like writing the review except you can't edit quotes after you've added them. Quotes can be deleted by clicking the cross on the top right corner of the quote card. 

#### Adding categories
![Categories](https://github.com/chipfrog/MyLibrary/blob/main/Documentation/pictures/categories.png)

Switch to the "Categories" tab to view, add and delete categories. Everything works just like with quotes. 

#### Changing background color
![Changing background color](https://github.com/chipfrog/MyLibrary/blob/main/Documentation/pictures/background_color.png)

To change the color of the background banner, go to the Options tab and click "Change background color". A color picker will pop up next to the book thumbnail. You can select from the default colors by clicking them and the background color will change. You can also choose a different color by writing a hexadecimal color code to the bottom right corner. To close the color picker you have to click Close on the Options tab.

#### Deleting book
![Deleting book](https://github.com/chipfrog/MyLibrary/blob/main/Documentation/pictures/book_options.png)

If you want to completely delete the book go to the Options tab and click the red "Delete Book" button. A confirmation will pop up and you can finish deletion by clicking the red Delete button or cancel the deletion by clicking the Cancel button or the cross. Once you delete a book, it is completely removed from the database along with review, quotes, catergories etc. and cannot be recovered. However the book can be searched again normally trough the search bar and added as a new book with default information.

## Sorting and filtering added books
### Sorting
![Sorting books](https://github.com/chipfrog/MyLibrary/blob/main/Documentation/pictures/sortby.png)

On the main page (you get there after login or by clicking "My Library" on the top left corner of the navigation bar) added books are shown based on the score (highest to lowest). You can change the sorting criteria by clicking "Sort by" on the navigation bar and choosing a different sorting criteria. Books are then sorted based on your choice. This choice is not saved and gets reset to Rating: Highest-Lowest after a page refresh. 

### Filtering
![Filtering books](https://github.com/chipfrog/MyLibrary/blob/main/Documentation/pictures/filterby.png)

Books can also be filtered by "read", "unread", "owned" and "not owned" statuses. Click Filter by on the navigation bar on choose the desired criteria. Multiple criteria can be chosen and books matching the criteria are shown. Choosing "read" will disable "unread" and choosing "owned" will disable "not owned" and vice versa. Uncheck the filters or refresh the page to show all added books again. At the moment sorting and filtering don't work at the same time. If you have active filters and choose a sorting method, the filters get reset and all books are shown and sorted.

## Deleting account
To completeley and unreversibly delete your account and all associated information (books, reviews etc.) click the cog icon on the top right corner and choose red "Delete Account". A confirmation window will pop up and you can confirm deletion by clicking "Delete my account" or stop deletion by clicking Cancel button or cross. 

