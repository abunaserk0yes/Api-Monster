document.getElementById('searchBtn').addEventListener('click', function () {
    const searchItem = document.getElementById('searchItem').value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const foodItem = document.getElementById('foodItems');
            data.meals.forEach(element => {
                const foodDiv = document.createElement('div');
                foodDiv.innerHTML = `
                    <img onclick="detailInfoMeals('data')" src="${element.strMealThumb}">
                    <h1>${element.strMeal}</h1>
                `
                foodDiv.className="foodBioData";
                foodItem.appendChild(foodDiv);
            });
        })
})

const detailInfoMeals=foodId=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
    .then(response=>response.json())
    .then(data=>{
        const foodInfo=document.createElement('div');
        foodInfo.innerHTML=`
            <img src='${data.meals[0].strMealThumb}'>
            <h3>${data.meals[0].strMeal}</h3>
            <h4>${data.meals[0].strCategory}</h4>
            <br>
            <h5></h5>
            <h5></h5>
            <h5></h5>
            <h5></h5>
            <h5></h5>
        `
    })
}