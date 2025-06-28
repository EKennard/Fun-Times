const meals = [
  { name: "Spinach Omelette", category: "Breakfast", calories: 280 },
  { name: "Grilled Chicken Salad", category: "Lunch", calories: 400 },
  { name: "Tofu Sushi Bowl", category: "Dinner", calories: 450 },
];

function generateMealPlan(goal) {
  let total = 0;
  let plan = [];

  const shuffled = meals.sort(() => 0.5 - Math.random());

  for (let meal of shuffled) {
    if (total + meal.calories <= goal) {
      plan.push(meal);
      total += meal.calories;
    }
  }
  return plan;
}
