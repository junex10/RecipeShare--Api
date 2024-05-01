import { Body, Controller, Post, Res, HttpStatus, UseInterceptors, UploadedFile, UnprocessableEntityException, Get } from '@nestjs/common';
import { RecipeService } from './recipes.service';
import { Constants, UploadFile, JWTAuth } from 'src/utils';
import { FileInterceptor } from '@nestjs/platform-express';
import { 
    NewRecipeDTO,
    RemoveRecipeDTO
} from './recipes.entity';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { RecipeInterceptor } from 'src/interceptors';

@ApiTags('Recipe')
@Controller('api/recipe')
@UseInterceptors(RecipeInterceptor)
export class RecipeController {
    constructor(
        private readonly recipeService: RecipeService
    ) {

    }

    @Post('/new')
    @UseInterceptors(FileInterceptor('photo',
      UploadFile('recipes')
    ))
    async new(@Body() request: NewRecipeDTO, @Res() response: Response, @UploadedFile() file: Express.Multer.File) {
        try {
            const newRecipe = await this.recipeService.new(request, file);
            
            return response.status(HttpStatus.OK).json({
				recipe: newRecipe
			});
        }
        catch(e) {
            throw new UnprocessableEntityException('Could not add the recipe', e.message);
        }
    }

    @Post('/update')
    @UseInterceptors(FileInterceptor('photo',
      UploadFile('recipes')
    ))
    async update(@Body() request: NewRecipeDTO, @Res() response: Response, @UploadedFile() file: Express.Multer.File) {
        try {
            const newRecipe = await this.recipeService.new(request, file);
            
            return response.status(HttpStatus.OK).json({
				recipe: newRecipe
			});
        }
        catch(e) {
            throw new UnprocessableEntityException('Could not add the recipe', e.message);
        }
    }

    @Post('/remove')
    async remove(@Body() request: RemoveRecipeDTO, @Res() response: Response) {
        try {
            const remove = await this.recipeService.remove(request);
            
            if (remove) {
                return response.status(HttpStatus.OK).json({
                    message: 'Recipe was eliminated'
                });
            } else {
                return response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
                    message: 'Could not remove the recipe'
                });
            }
            
        }
        catch(e) {
            throw new UnprocessableEntityException('Could not remove the recipe', e.message);
        }
    }

    @Get()
    async get(@Body() request: NewRecipeDTO, @Res() response: Response) {
        try {
            //const newRecipe = await this.recipeService.new(request, file);
            
            /*return response.status(HttpStatus.OK).json({
				recipe: newRecipe
			});*/
        }
        catch(e) {
            throw new UnprocessableEntityException('Could not add the recipe', e.message);
        }
    }
}
