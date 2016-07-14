var foodName =
    {
    
    Title: 'Cup Noodles',
    Servings: 1,
    Ingredients: ['Hot water', 'Noodles'],
    
    }

function describeFood(recipe)
{
    console.log('This is' + foodName.Title + 'which has' + foodName.Servings +"servings")
}

describeFood(foodName);