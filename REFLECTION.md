# Week 1 reflection

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?

Imperative is where I write every step myself like create the element put it here change the text declarative is where I just describe what the page should look like and React works out the steps

2. Why must a component name start with a capital letter?

React uses the capital letter to tell my components like <Header /> apart from normal HTML tags like <header if it was lowercase React would treat it as plain HTML.

3. What does a fragment <>...</> do, and why not just use a <div>?

A component can only return one element so the fragment wraps everything together unlike a div it doesn't add an extra element to the page so it won't mess up the layout

4. Name one benefit of splitting the UI into small components.

I can reuse them for example MenuItemCard can be used for every dish instead of copying the same code again and again