import { Body, Controller, Post, Res, HttpStatus, UseInterceptors, UploadedFile, UnprocessableEntityException } from '@nestjs/common';
import { RecipeService } from './recipes.service';
import { Constants, UploadFile, JWTAuth } from 'src/utils';
import { FileInterceptor } from '@nestjs/platform-express';
import { 
    NewRecipeDTO
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
}
