import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Level, Person, User } from "src/models";
import { Constants, Hash, Globals } from 'src/utils';
import {
    UpdateUserDTO
} from './recipes.entity';
import * as fs from 'fs';
import * as moment from 'moment';

@Injectable()
export class RecipeService {
    constructor(
        @InjectModel(User) private userModel: typeof User,
        @InjectModel(Person) private personModel: typeof Person,
    ) {

    }

    
}
