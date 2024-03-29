# Development Notes

1. Add project to github, don't worry about hosting it just yet - done
2. start on the navigation and page routing: [Page Routing in Next JS](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)

- You can create your first page by adding [name].js file inside of the `app` directory.
- JS, JSX, and TSX file extensions can be used for pages
- Pages are server components by default but can be set to a client component
  - [Creating Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [Linking Pages in Navigation](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating)

3. [Creating HTML forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)

- [Creating Your first Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
- On page refresh, clear inputs
- How do I show what's being typed in the password input

With the label associated correctly with the input via its for attribute (which contains the input element's id attribute), a screen reader will read out something like "Name, edit text".

There is another way to associate a form control with a label — nest the form control within the label, implicitly associating it.

The main tag specifies the main content of a document. The content inside the main element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, nav links, copyright information, site logos, and/or search forms.

There cannot be more than one main element in a document.

4. Creating a search bar

- [How to create a search bar](https://www.maketechstuff.com/2023/02/create-search-bar-design.html)

5. Sign up and log in

- Use Formik for form validation. [How to use Formik in React](https://youtu.be/5QJQeqCUoFE?si=MVPy7_GFmJY7wZsl)
- Use regular expressions to validate a password:

  - [Password validation with Yup and Formik](https://stackoverflow.com/questions/49502436/password-validation-with-yup-and-formik)

  - [Password validation Regular Expression](https://stackoverflow.com/questions/2370015/regular-expression-for-password-validation)

  - [Regular Expression Password Validation in Java](https://www.geeksforgeeks.org/how-to-validate-a-password-using-regular-expressions-in-java/)


6. [How to use react-collapsible](https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/)

7. Adding Firebase for user authentication instead of using Vercel Postgres.:
https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/
https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
https://firebase.google.com/docs/auth/web/manage-users#get_a_users_profile
