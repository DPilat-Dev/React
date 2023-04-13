# About React
React is a javaScript library for building dynamic and interactive user interfaces, unlike Angular and Vue which are Frameworks. 
In React applications, we don't query and update the DOM. Instead, we describe our application using small, reusable components.
React will take care of efficiently creating and updating DOM elements. 

When our application starts, React takes a tree of components and builds a JavaScript data structure called the virtual DOM. 
This virtual DOM is different from the actual DOM in the browser. It’s a lightweight, in-memory representation of our component tree.

When the state or the data of a component changes, React updates the corresponding node in the virtual DOM to reflect the new state. 
Then, it compares the current version of virtual DOM with the previous version to identify the nodes that should be updated. 
It’ll then update those nodes in the actual DOM.

In browser-based apps, updating the DOM is done by a companion library called ReactDOM. 
In mobile apps, React Native uses native components to render the user interface.

Since React is just a library and not a framework like Angular or Vue, we often need other tools for concerns such as routing, state management, 
internationalization, form validation, etc.

Special thanks to [coding with mosh](https://codewithmosh.com/) for the great lessons.

# Building Components
In React apps, a componet can only return a single element. 

```TSx
const Componet = () => {
  return (
    <h1>Hello World</h1>
  );
}

export default Componet;
```

To return multiple elements, we wrap them in a fragment, which is represented by empty angle brackets, or you can also wrap it in a <div>.

```TSx
const Componet = () => {
  return (
    <> /* or <div>*/
      <h1>Hello World</h1>
    </> /* or </div>*/
  );
}

export default Componet;
```

### Rendering Arrays

To render a list in JSX, we use the ‘array.map()’ method. When mapping items, each item must have a unique key, which can be a string or a number.

```TSX
const Componet = () => {
  const items = ['a', 'b', 'c'];
  return(
    <ul>
      {items.map((item) => {
        <li key={item}>item</li>
      ))}
    </ul>
  );
};
```
### if statements and Ternary operators

To conditionally render content, we can use an ‘if’ statement or a ternary operator. 

```TSX
{items.length === 0 ? 'a' : 'b'}
<items.length === 0 && 'a'>
```
### Adding State Hooks

We use the state hook to define state (data that can change over time) in a component. A hook is a function that allows us to tap into built-in features in React.

```TSX
/* Declare a state hook */
const [name, setName] = useState('');

/* Updating a State hook */
setName('NEW NAME');
```

### Adding Properties

Components can optionally have props (short for properties) to accept input.
We can pass data and functions to a component using props. 
Functions are used to notify the parent (consumer) of a component about certain events that occur in the component, such as an item being clicked or selected.
We should treat props as immutable (read-only) and not modify them.
When the state or props of a component change, React will re-render the component and update the DOM accordingly.

```TSX
 interface Props {
  name: string;
 }
 
 const Component = ({ name }: Props) => {
  return <p>{name}</p>
 };
```
We can also passin function void methods in to a Prop by declaring it a void and pass it to the componet such as a button

```TSX
interface Props {
  onClick: () => void;
 }
 
 const Component = ({ onClick }: Props) => {
  return <button onClick = {onClick}>CLICK ME</button>
 };
```
We can also case the children variable into the component for example we use the componet with the name Component <Componet>the Text here</Component>
the children variable needs to be a ReactNode so make sure to import ReactNode into the component in question
```TSX
/* Inside the Component.tsx */
 import { ReactNode } from "react";

 interface Props {
  children: ReactNode;
 }
 
 const Component = ({ children }: Props) => {
  return <p>{children}</p>
 };
 
 export default App;
 ```
 ```TSX
 /* Inside the App.tsx */
 import Component from "./components/Component";
 
 function App() {
  return (
    <Component>Hello World</Component>
  );
}

export default App;
```
# Styling Components
We have several options for styling React components, including vanilla CSS, CSS modules, CSS-in-JS, and inline styles.

### Vanilla CSS

With vanilla CSS, we write our component styles in a separate CSS file and import it into the component file.
However, we may encounter conflicts if the same CSS classes are defined in multiple files.

```CSS
.list-group {
  list-style: none;
}
```

```TSX
import './Example.css';

function Component() {
  return <ul classname="list-group"></ul>;
}
```
### CSS Modules

CSS modules resolve this issue by generating unique class names during the build process.

```CSS
.list-group {
  list-style: none;
}
```

```TSX
import styles from './Example.module.css';

function Component() {
  return <ul classname="{styles[`list-group`]}"></ul>;
}
```

If you have noticed from the code above that you hadd to add styles['list-group'] thats beacause you would get a compulation error if we did stlyes.list-group,
so to fix this issue we have to change the css class name to there isn't a '-' or add stlyes['list-group'].

if for example you had multiple css classes you would need to creat a array of styles and then join them with a space

```TSX
<ul className={[styles.listGroup, styles.container].join(' ')}> </ul>
```
### CSS-in-JS

With CSS-in-JS, we define all the styles for a component alongside its code. Like CSS modules, this provides scoping for CSS classes and eliminates conflicts. 
It also makes it easier for us to change or delete a component without affecting other components.

The separation of concerns principle suggests that we divide a program into distinct sections or modules where each section handles a specific functionality. 
It helps us build modular and maintainable applications. With this principle, the complexity and implementation details of a module are hidden behind
a well-defined interface.
Separation of concerns is not just about organizing code into files, but rather dividing areas of functionality. 
Therefore, CSS-in-JS does not violate the separation of concerns principle as all the complexity for a component remains hidden behind its interface.

First we will need to import a library

```npm
npm i styled-componets
```

If you still have a error when importing styled-componets then also install this package.

```npm
npm i @types/styled-components
```

Now to use CSS-in-JS we need to import the styled-components library into the component.tsx. 
Then we will creat a const variable that we can refrence when when creating the component.

```TSX
import styled from 'styled-componets';

const List = styled.ul`
  list-style: none;
`;

function Comonent() {
  return <List></List>;
}
```
### Inline-CSS

Although inline styles are easy to apply, they can make our code difficult to maintain over time and should only be used as a last resort.

### Adding React Icons

We can add icons to our applications using the react-icons library.

```npm
npm i react-icons@4.7.1
```
You can refrence this site on all the diffrent icons you can use in the project. [React Icons](https://react-icons.github.io/react-icons)

For example lets say I chose this [BsFillCalendarFill](https://react-icons.github.io/react-icons/search?q=bsfillcalendarfill) 
icon so I will have to refrence react-icons and when refencing i will have to make sure its from the bs folder by doing react-icons/bs.
To use the Icon you will just refrence it by name. 
```TSX
import { BsFillCalendarFill } from 'react-icons/bs'

function App() {
  return(
    <div>
      <BsFillCalendarFill />
    </div>
  );
}

```

# Managing Component State

From the **Building a Component** section you saw that you can use State Hooks minipulate variables. But React update components asynchronously.
This means not right away, but instead it takes the the update into a queue and updates everything all at once and rerenders the page.
States are stored outside the component, and only removes the state variable when the componet is nolonger rendered on the screen.
Use state hooks at the top layer of your component for example:

```TSX
const [isVisable, setVisibility] = useState(false);
const [isApproved, setApproved] = useState(true);
```
React will will store these variables in an array without the variable name and it will pop the values into the variable when loaded. [ false, true]
this means we can't declare state variables inside if statements and for loops and so on.

### Choosing the state Structure

There are a few best practices when using states, first avoid redundant state variables for example:

```TSX

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

/* A state object for fullname is redundent here use a Const fullname and assaign 
first and last name to them or create a person object that holds first and last name */

//const [fullName, setFullName] = useState('');
const fullName = firstName + ' ' + lastName;

/* or */

return <p> {firstName} {lastName}</p>
```
you can always combine first and last name variables into a object state. BUT DONT nest your object to deeply or else it will be a pain to update them:

```TSX
const [person, setPerson] = useState({
  firstName: '',
  lastName: ''
});
```
So in conclusion Avoid redundant state variables, Group Related variables inside an object, and Avoid Deeply nested structures perfur to use a flat structure.

### Keeping Components Pure

What is a Pure Function? Given the same input, always returns the same result.

for example if yoe call a function multiple times it will return the same value: 

```TSX 
const reult = myFunc(1);
// result = 'A'
```

But is you get diffrent results with were you are expecting the same one that is a impure function.
In React  it expects that ever component you create is a pure one. If the component isnt pure it will rerender the component.

How do you keep a component pure? Keep changes out of the rendering phase.

This is a example of a pure component:
```TSX
let count = 0;

const Message = () => {
  return <div>message {count}</div>
};

export default Message;
```

Now if we add a count++ we will get a diffrent result everytime:
```TSX
let count = 0;

const Message = () => {
  count++;
  return <div>message {count}</div>
};

export default Message;
```

this was a example of a impure componet, but its find if we move the count variable into the Message component, this makes it a pure componet.
```TSX
const Message = () => {
  let count = 0;
  count++;
  return <div>message {count}</div>
};

export default Message;
```

### Under standing the strict Mode

If you look at the previous cod in **Keeping Components Pure** and you rendered the message 3 times in the app.tsx you would have noticed that the reults would have
been [2, 4, 6] in stead of  [1, 2, 3]. Thats because of the strict mode inside your main.tsx. What strict mode does is it renders 2 versons of the componet and uses
the second one, since you are developing. The First render is mainly used so react can report any potential issues within the code. These checks only happen in
Development mode.

### Updating Objects

Earlier you saw you can create state oject variables for example:

```TSX
const [drink, setDrink] = useState({
    title; "Americano",
    price: 5
  });
```
And inside this component we want to update the price of a drink:

```TSX
fucntion App(){
  const [drink, setDrink] = useState({
    title; "Americano",
    price: 5
  });
  
  const handleClick = () => {
  
  };
  
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
```
So first thing that you would thing is how about doing **drink.price = 6; setDrink(drink);** but that won't update the drink, it acually won't do anything.
How do we change the price then? We create a whole new opject that changes the drink price.

```TSX
const handleClick = () => {
  const newDrink = {
    title: drink. title,
    price = 6
  };
  setDrink(newDrink);
};
```
With this code it will update the new drink price. But Then what would happen if you had a massive oject then? You would have to type out every variable or
use the Javascript spread operator **...**:

```TSX
const handleClick = () => {
  const newDrink = {
    ...drink,
    price = 6
  };
  setDrink(newDrink);
};
```
this copys all the variables form the drink opject then you modify price.

###Updating Nested Objects

Now let take a look at nested object for example:

```TSX
const [customer, setCustomer] = useState({
    Name; "Bob",
    Address: {
      city: 'Seattle',
      zipCode: '98101'
    }
  });
```
How would we update the zipcode of this cusomer opject? Well like before we will have to recreate the object , but we can just the the spread operator the same way
since what would happen is both old and new customers will use the same address regardless to what we want to do is allso spread the address object for example:

```TSX
 const handleClick = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address, 
        zipCod: 98105
      }
    });
  };
```

### Updating Arrays

When it comes to updating arrays we don't want to update the array by mutating it, but we need to create a new array all together for example a array of tags:

```TSX
const [tags, setTags] = useState(['happy', 'sad']);
```

The way that you would add an element to an array is by spreading the array and adding the new value at the end:

```TSX
 setTags([...tags, 'exiting']);
```

How about removing an element form an array:

```TSX
setTags(tags.filter(tag => tag !== 'sad'));
```
Now how about updating an element in an array:

```TSX
setTags(tags.map(tag => tag === 'sad' ? 'depression': tag));
```

### Updating Array of Objects

Lets take a look at updating an array of Objects:

```TSX
const [bugs, setBugs] = useState([
  { id: 1, title: 'Bug 1', fixed: false },
  { id: 2, title: 'Bug 2', fixed: false }
]);
```

Now lets say that we want to update the first bug to be fixed first we will use the same processes as above by using the map method:

```TSX
setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug));
```

### Simplifying Update Logic with Immer

As you say updating and array without mutations can get a little bit complicated and repetitive. So lets yse the Immer library to help with it

```NPM
npm i immer@9.0.19
```

now to use the library imported in to a file like this

```TSX
import produce from 'immer';
```

now lets simplify the previous code form updating a bug from above.

```TSX
setBugs(produce(draft => {
  const bug = draft.find(bug => bug.id ===1);
  if (bug) bug.fixed = true;
}));
```

why use draft? Well draft is the changes that we are going to apply to the array, and draft is a copy of the bugs array so we are now free to multate and modify the
array. So we dont have to map anything or make a copy of any thing, but behind the sence immer does all the work for us.

### Sharing State between Components

Sometimes we need to share a state between diffrent components. For example an e-commerce store for how many items are in a cart. and if you look at the structure
of the application our app will be structure like this: App is the parent and the navbar and cart are the children of App. As a Rule of Thumb the component that holds
the state is responsible for updating the state.

```TSX
import { useState } from "react";

function App(){
  const[cartItems, setCartItems] = useState(['Product1', 'Product2']);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
```

Here is the Navbar component

```TSX
interface Props{
  cartItemsCount: number
}

const NavBar = ( { cartItemsCount } : Props) => {
  return (
    <div>navBar: {cartItemsCount}</div>
  );
}
export default NavBar
```
Here is the Cart Component

```Tsx
interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
```
