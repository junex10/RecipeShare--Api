import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { RecipeService } from './recipes.service';
import { RecipeController } from './recipes.controller';
import { Person, Recipes, User } from 'src/models';

@Module({
    imports: [
        SequelizeModule.forFeature([
            User,
            Person,
            Recipes
        ])
    ],
    controllers: [
        RecipeController
    ],
    providers: [
        RecipeService
    ]
})
export class RecipeModule { }
