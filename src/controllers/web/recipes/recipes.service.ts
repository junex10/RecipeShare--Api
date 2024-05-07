import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Level, Person, Recipes, User } from "src/models";
import { Constants, Hash, Globals } from 'src/utils';
import {
    GetRecipeDTO,
    NewRecipeDTO,
    RemoveRecipeDTO,
    UpdateRecipeDTO
} from './recipes.entity';
import * as fs from 'fs';
import * as moment from 'moment';
import { Op } from 'sequelize';

@Injectable()
export class RecipeService {
    constructor(
        @InjectModel(User) private userModel: typeof User,
        @InjectModel(Person) private personModel: typeof Person,
        @InjectModel(Recipes) private recipeModel: typeof Recipes,
    ) {

    }

    new = async (request: NewRecipeDTO, file: Express.Multer.File) => {
        const newRecipe = await this.recipeModel.create({
            user_id: request.user_id,
            name: request.name,
            photo: file ? ('recipes/' + file.filename) : null,
            description: request.description,
            cooking_time_type: request.cooking_time_type || Constants.COOKING_TYPE_TIME.MINUTES,
            cooking_time: request.cooking_time || 0,
            difficulty: request.difficulty_field || Constants.DIFFICULTY.EASY,
            prep_time_type: request.preparation_time_type || Constants.COOKING_TYPE_TIME.MINUTES,
            prep_time: request.preparation_time || 0,
            meal_people: 1 // -> Prepared for one person per meal
        });

        return newRecipe;
    }

    remove = async (request: RemoveRecipeDTO) => {

        const recipe = await this.recipeModel.findOne({
            where: {
                id: request.id
            }
        });

        if (recipe?.photo) {
            const PATH = `./public/storage/${recipe.photo}`;
            if (fs.existsSync(PATH)) fs.unlinkSync(PATH);
        }

        this.recipeModel.destroy({
            where: {
                id: request.id
            }
        });


        return true;
    }

    getRecipes = async (request: GetRecipeDTO) => {

        let recipes = [];

        if (!request.search) {
            recipes = await this.recipeModel.findAll({
                where: {
                    user_id: request.user_id
                }
            });
    
        } else {
            recipes = await this.recipeModel.findAll({
                where: {
                    [Op.or]: [
                        {
                            name: {
                                [Op.like]: `%${request.search}%`
                            }
                        },
                        {
                            description: {
                                [Op.like]: `%${request.search}%`
                            }
                        },
                        {
                            cooking_time: {
                                [Op.like]: `%${request.search}%`
                            }
                        },
                        {
                            meal_people: {
                                [Op.like]: `%${request.search}%`
                            }
                        }
                    ]
                }
            });
        }
        return recipes;
    }

    update = async (request: UpdateRecipeDTO, file: Express.Multer.File) => {
        const recipe = await this.recipeModel.findOne({ where: { id: request.id } });
        if (file !== undefined && recipe?.photo !== null) {
            const PATH = `./public/storage/${recipe?.photo}`;
            if (fs.existsSync(PATH)) fs.unlinkSync(PATH);
        }

        this.recipeModel.update(
            {
                name: request.name,
                photo: file ? ('recipes/' + file.filename) : null,
                description: request.description,
                cooking_time_type: request.cooking_time_type || Constants.COOKING_TYPE_TIME.MINUTES,
                cooking_time: request.cooking_time || 0,
                difficulty: request.difficulty_field || Constants.DIFFICULTY.EASY,
                prep_time_type: request.preparation_time_type || Constants.COOKING_TYPE_TIME.MINUTES,
                prep_time: request.preparation_time || 0,
                meal_people: 1 // -> Prepared for one person per meal
            },
            {
                where: {
                    id: request.id
                }
            }
        );

        const recipeChanged = await this.recipeModel.findOne({ where: { id: request.id } })
        return recipeChanged
    }
}
