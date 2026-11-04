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

## Week 3
- Tool(s): Claude
- What I asked for: Step-by-step help with the Week 3 lab. Moving the vendors into public/api/vendors.json and fetching them with useEffect (loading, error and Try again), a real cart with quantities and a derived total, the checkout form with validation, and my personal feature (filter menu by category). I also asked it to explain things I didn't get, like controlled inputs and why the total isn't stored in state.
- What I kept, changed or rejected, and why:  I used my own three vendors in vendors.json instead of taking shops from classmates. I changed MenuItemCard to use item.available === false so items still work without an available field. I kept the total and the filtered menu as derived values instead of putting them in state.


## Week 4
- Tool(s): Claude
- What I asked for: Turning the app into pages with React Router (layout, vendor page, cart, orders and a 404). I also asked for my personal feature, putting the category filter in the URL with useSearchParams. I asked it to explain things I didn't get, like Context and why the URL can hold state.
- What I kept, changed or rejected, and why: I kept the lab's file structure (hooks, context and pages folders). I used my own three vendors in vendors.json. 

