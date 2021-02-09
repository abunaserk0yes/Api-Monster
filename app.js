const searchMealBtn=()=>{
    const SearchMeal=document.getElementById('searchMeal').value;
    document.getElementById('searchMeal').value=''
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?f=${SearchMeal}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayMeals(data.meals))
}
const displayMeals=meals=>{
    const mealsContainer=document.getElementById('meals-container')
    meals.forEach(meal =>{
        const mealDiv=document.createElement('div');
        mealDiv.className='mealDivAll'
        mealDiv.innerHTML=`
        <h2 onclick="displayMealsDetails('${meal.idMeal}')">${meal.strMeal}</h2>
        <img onclick="displayMealsDetails('${meal.idMeal}')" src="${meal.strMealThumb}">
        `
        mealsContainer.appendChild(mealDiv);
    });

}
const displayMealsDetails=idMeal=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        // console.log(data)
        const mealsDetails=document.getElementById('meals-details');
        const mealsDetailsDiv=document.createElement('div');
        mealsDetailsDiv.className='mealsDetailsInfo';
        mealsDetailsDiv.innerHTML=`
        <h3>${data.meals[0].strMeal}</h3>
        <img src="${data.meals[0].strMealThumb}">
        <h5><i class="fas fa-check-square"></i>${data.meals[0].strIngredient1}</h5>
        <h5><i class="fas fa-check-square"></i>${data.meals[0].strIngredient2}</h5>
        <h5><i class="fas fa-check-square"></i>${data.meals[0].strIngredient3}</h5>
        <h5><i class="fas fa-check-square"></i>${data.meals[0].strIngredient4}</h5>
        <h5><i class="fas fa-check-square"></i>${data.meals[0].strIngredient5}</h5>
        `
        mealsDetails.appendChild(mealsDetailsDiv)
    })
}
