# Specifications for the Rails Assessment

Specs:
- [x] Using Ruby on Rails for the project
- [x] Include at least one has_many relationship (x has_many y; e.g. User has_many Recipes) Chef has many Dishes
- [x] Include at least one belongs_to relationship (x belongs_to y; e.g. Post belongs_to User) Dish belongs to Chef
- [x] Include at least two has_many through relationships (x has_many y through z; e.g. Recipe has_many Items through Ingredients)  Dish has many Ingredients through Dish_ingredients
- [~] Include at least one many-to-many relationship (x has_many y through z, y has_many x through z; e.g. Recipe has_many Items through Ingredients, Item has_many Recipes through Ingredients)  Dish has many Ingredients through Dish_ingredients, visa versa (had trouble with this might need checking)
- [x] The "through" part of the has_many through includes at least one user submittable attribute, that is to say, some attribute other than its foreign keys that can be submitted by the app's user (attribute_name e.g. ingredients.quantity) Dish_ingredients has quantity
- [x] Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Recipe, Ingredient, Item) Chef login info has validations, dishes must have names and cook times
- [x] Include a class level ActiveRecord scope method (model object & class method name and URL to see the working feature e.g. User.most_recipes URL: /users/most_recipes) Dishes has socpes for cook time
- [x] Include signup (how e.g. Devise) Chef
- [x] Include login (how e.g. Devise) Chef
- [x] Include logout (how e.g. Devise) Chef
- [x] Include third party signup/login (how e.g. Devise/OmniAuth) github omniauth
- [x] Include nested resource show or index (URL e.g. users/2/recipes) chef/id/dishes/id
- [x] Include nested resource "new" form (URL e.g. recipes/1/ingredients/new) chef/id/dishes/new
- [x] Include form display of validation errors (form URL e.g. /recipes/new) shows message on view page

Confirm:
- [x] The application is pretty DRY I think so
- [x] Limited logic in controllers definitely
- [x] Views use helper methods if appropriate private methods
- [x] Views use partials if appropriate _forms
