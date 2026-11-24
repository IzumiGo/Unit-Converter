# Metric / Imperial Unit Converter
 
> Type a number, hit **Convert**, and instantly see it translated between metric and imperial units.
 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
 
---
 
## Overview
 
A small converter that takes a single value and converts it both ways across three categories: **length**, **volume** and **mass**.
 
I built this **solo project** on my own as part of the [Scrimba](https://scrimba.com) **Fullstack Developer Path**.
 
## How it works
 
Enter a number, for example `20`, and click **Convert**. The app shows every conversion at once:
 
| Category | Metric → Imperial | Imperial → Metric |
| --- | --- | --- |
| **Length** | 20 meters = 65.617 feet | 20 feet = 6.096 meters |
| **Volume** | 20 liters = 5.284 gallons | 20 gallons = 75.700 liters |
| **Mass** | 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos |
 
Conversion factors used:
 
| Conversion | Factor |
| --- | --- |
| 1 meter → feet | 3.28084 |
| 1 liter → gallons | 0.2642 |
| 1 kilogram → pounds | 2.20462 |
 
All results are rounded to **3 decimal places**.
 
## Run it locally
 
No build step or dependencies. Just clone the repo and open the page:
 
```bash
git clone https://github.com/IzumiGo/unit-converter.git
cd unit-converter
open index.html
```
 
## Files
 
| File | Role |
| --- | --- |
| `index.html` | Layout: input card on top, results panel below |
| `index.css` | Styling: two-tone card design, Inter font, button feedback |
| `script.js` | Reads the input, computes the conversions and renders them |
 
## Key takeaways
 
Building this from scratch helped me practise:
 
- converting user input with `Number()`
- formatting results with `toFixed()`
- updating the page with `textContent` and template literals
- handling events with `addEventListener`
- building a clean, centered layout with Flexbox, plus hover and click feedback with CSS `filter` and `transform`
## Ideas for later
 
- [ ] Validate the input and show a message when it isn't a number
- [ ] Convert on **Enter** or live while typing
- [ ] Add more units (temperature, speed, area…)
- [ ] Add a light/dark theme toggle
- [ ] Make the layout responsive for mobile screens
---
 
<sub>Solo project · Scrimba Fullstack Developer Path</sub>
 
