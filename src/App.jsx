// IMPORT ANY NEEDED COMPONENTS HERE
import { Dataset } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header.jsx"
import Chip from "./components/Chip/Chip.jsx" // no curly because exported default
import NutritionLabel from "./components/NutritionalLabel/NutritionalLabel.jsx"
import {useState} from "react"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!

export function App() {
  const { data, categories, restaurants } = Dataset.createDataSet()
  const[selectedCategory, selectCategory] = useState(null);

  const[selectedRestaraunt, selectRestaraunt] = useState(null);
  const[selectedMenuItem, selectMenuItem] = useState(null);
  
  const currentMenuItems = data.filter((item) => {
    return item.food_category === selectedCategory && item.restaurant === selectedRestaraunt;
  });
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {/* <Chip label="chip label here" isActive={isActive} handleClick = {() => setIsActive(!isActive)} /> */}

          {categories.map(category => {
          return (
          <Chip 
            label = {category} 
            key={category} 
            isActive={selectedCategory === category} 
            onClick={()=>selectCategory(category)}
          />)
        })}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
            <Header 
              title={appInfo.title}
              tagline={appInfo.tagline}
              description={appInfo.description}
              dataSource={appInfo.dataSource}
            />
          {/* </div> */}
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {/* <Chip label="chip label here" isActive={isActive} handleClick = {() => setIsActive(!isActive)} /> */}
            {restaurants.map(restaurant => {
              // const buttonClassName;
              return (
          <Chip 
            label ={restaurant} 
            key={restaurant} 
            isActive={selectedRestaraunt === restaurant} 
            onClick={()=>selectRestaraunt(restaurant)}
            />)})
        }
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
          <div className="Instructions">{appInfo.instructions.start}</div>


        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {/* YOUR CODE HERE */}
            {currentMenuItems.map((menuItem, i) => { // i??
              // console.log("selected menu item ")
              return (
              <Chip 
                label = {menuItem.item_name} 
                key={`${menuItem.item_name}-${i}`} 
                isActive={selectedMenuItem && selectedMenuItem.item_name === item.item_name} 
                onClick={()=>selectMenuItem(menuItem)}

              />)
              })}

          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {/* YOUR CODE HERE */}
            {selectedMenuItem ? <NutritionLabel 
              // title={appInfo.title}
              item={selectedMenuItem}
            /> : null} 
            {/* if there is an item, put it in */}
            
            
            
            </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
