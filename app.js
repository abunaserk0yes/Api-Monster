document.getElementById('searchBtn').addEventListener('click', function () {
    const itemsName = document.getElementById('searchItem').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ itemsName }`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const foodDetail = document.getElementById("foodDetail");
            data.meals.forEach(element => {
                const foodDiv = document.createElement('div')
                foodDiv.innerHTML = `
            <img src="${ element.strMealThumb }" onClick="checkItemsInfo(${ element.idMeal })">    
            <h1 onClick="checkItemsInfo(${ element.idMeal })" >${ element.strMeal }</h1>
            `;
                foodDiv.className = "foodDivClass";
                foodDetail.appendChild(foodDiv);
            });
        })
})

let checkItemsInfo = foodId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ foodId }`)
        .then(res => res.json())
        .then(data => {
            let foodInfo = document.getElementById('foodInfo');
            document.getElementById('foodInfo').style.display = 'block';
            let foodQfInfo = document.createElement('div')
            foodQfInfo.innerHTML = `
            <img src="${ data.meals[0].strMealThumb }">
 		    <h1>${ data.meals[0].strMeal }</h1>
            <br>
            <h5><i class="fas fa-check-square"></i> ${ data.meals[0].strMeasure1 }</h5>
            <h5><i class="fas fa-check-square"></i> ${ data.meals[0].strMeasure2 }</h5>
            <h5><i class="fas fa-check-square"></i> ${ data.meals[0].strMeasure3 }</h5>

            <p>${data.meals[0].strInstructions}</p>
            `;
            foodQfInfo.className = "food-details";
            foodInfo.appendChild(foodQfInfo);
        })
}