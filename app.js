//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

function showFoods(){
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.foodDetails-section').style.display = 'none';


    const input = document.getElementById('input').value.trim();

const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`

fetch(url)
.then(res => res.json())
.then(data => displayMeals(data.meals))

}

function displayMeals(foods){

    const allBox = document.querySelector('.all-box')
    let foodBox = '';
    if(foods != null){
    foods.map(food => {
            foodBox += `
            <div class="box">
            <div class="img"><img src="${food.strMealThumb}" alt=""></div>
            <div class="content">
                <h2>${food.strMeal}</h2>
                <button onclick="showDetails('${food.strMeal}')">Get Recipie</button>
            </div>
            </div>
            `
            allBox.innerHTML = foodBox;

        document.getElementById('searchResult').innerText = "Search Result"

        
         })
    }

    else{
        document.getElementById('searchResult').innerText = " Search Result Is Not Found"
        allBox.innerHTML = '';
    }
}
document.getElementById('input').addEventListener('keypress', function(event){
    if( event.keyCode === 13 ){
        document.getElementById('search-btn').click();

    }
})

// Details Section

function showDetails(foodName){
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.foodDetails-section').style.display = 'block';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.meals[0]))
    
    const displayDetails = (meal) =>{
        console.log(meal);

        let details = '';

        const detailsDiv = document.querySelector('.foodDetails-section');

        details += `
        <h2 id="foodTitle">${meal.strMeal}</h2>
<div class="hero">
    <div class="left">
        <h1>Dish Of: <span>${meal.strArea}</span></h1>
        <h3>Type Of Food: <span>${meal.strTags}</span></h3>
        <h3>Category Of Food: <span>${meal.strCategory}</span></h3>
        <button>Order Now</button>
        
    </div>
    <div class="right">
        <img src="${meal.strMealThumb}" alt="">
    </div>
</div>
        `
        detailsDiv.innerHTML = details;

    }
}