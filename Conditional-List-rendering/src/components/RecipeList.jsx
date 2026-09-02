import {recipes} from './Recipe.jsx';

function Recipe({id, name, ingredients}) {
    return(
        <div>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient => {
                    return <li key={ingredient}>{ingredient}
                    </li>
                })}
            </ul>
        </div>
    )
}
export default function RecipeList() {
    return(
        <div>
            <h1>Recipies</h1>
            {recipes.map(recipe => {
                return <Recipe key={recipe.id} {...recipe}/>
            })}
        </div>
    )
}