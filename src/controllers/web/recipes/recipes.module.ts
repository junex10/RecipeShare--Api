import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { RecipeService } from './recipes.service';
import { RecipeController } from './recipes.controller';
import { Person, User } from 'src/models';

@Module({
    imports: [
        SequelizeModule.forFeature([
            User,
            Person
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
