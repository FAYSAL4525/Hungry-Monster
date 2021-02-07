function mealitem() {
    let search = document.getElementById("search-input");
    const term = search.value;
    if (term === null && term === "") {
        document.getElementById("display").innerHTML = `<p>There are no search results.Try again!</p>`;
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaymil(data))

        const displaymil = meal => {
            console.log(meal);
            const displayDiv = document.getElementById("display");
            meal.meals.map(mealt => {
                console.log(mealt.idMeal)
                const div = document.createElement("div");
                const divInfo = `<div class="meal-item"  >
                        
                                <div class="meal-img">
                                    <img onclick="Ingredients('${mealt.idMeal}')"src = "${mealt.strMealThumb}" 
                                </div>
                                <div class="meal-name">
                                    <h3>${mealt.strMeal}</h3>
                                </div>
                             </div>`;
                //  divInfo.className = "div1";
                div.innerHTML = divInfo;
                console.log(div)
                displayDiv.appendChild(div);
            });
        }
    }
}

function Ingredients(name) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=name`
    fetch(url)
        .then(res => res.json())
        .then(data => Ingredientsdata(data))

    const Ingredientsdata = meal => {
        // console.log(meal);
        const IngredientsDiv = document.getElementById("Ingredients");
        meal.meals.map(mealt => {
            const div = document.createElement("div");
            const divInfo = `<h1>${mealt.strIngredient1}</h1>
            <p>${mealt.strIngredient1}</p>
            <p>${mealt.strIngredient1}</P>
            <img src="${mealt.strMealThumb}" >`;
            //  divInfo.className = "div1";
            div.innerHTML = divInfo;
            console.log(div)
            IngredientsDiv.appendChild(div);

        });
    }
}

