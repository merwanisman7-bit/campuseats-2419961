# AI usage log

## Week 1
- Tool(s): Claude
- What I asked for: Step-by-step guidance through the Week 1 lab (Git setup, Vite project, and the Header, VendorCard, MenuItemCard and Footer components), plus explanations of what each command and piece of code does.
- What I kept, changed or rejected, and why: Kept the component code from the lab sheet. Used a stand-in CSS because I couldn't find campuseats-starter.css on iTa'LeeM. Renamed FooterCard.jsx to Footer.jsx so it matches the import in App.jsx.
- One thing the AI got wrong and how I fixed it: My first git commit ran in C:\reactdev instead of C:\reactdev\campuseats, so it tracked my other projects too. I deleted the .git folder there and redid git init inside campuseats.

## Week 2
- Tool(s): Claude
- What I asked for: Moving the menu data into vendors.js, passing it down with props, using map() to make the cards, switching vendors with useState, and the cart badge.
- What I kept, changed or rejected, and why: I kept the component code and put my own restaurant and dishes in vendors.js. I didn't use cart.push() because React wouldn't redraw the badge. I used a new array instead.
- One thing the AI got wrong and how I fixed it: The badge didn't go up when I clicked Add to cart. The code was actually fine, the browser preview was just stale. A hard refresh (Ctrl+Shift+R) in the normal browser fixed it.