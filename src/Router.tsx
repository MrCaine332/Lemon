import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./layouts/home/Home";
import Recipes from "./layouts/recipes/Recipes";
import Recipe from "./layouts/recipe/Recipe";
import NotFound from "./components/general/not-found/NotFound";
import CreateRecipe from "./layouts/create-recipe/CreateRecipe";

const Router = () => {

    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/recipe/create" element={<CreateRecipe />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;