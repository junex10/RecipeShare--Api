import { Column, Model, Table, CreatedAt, UpdatedAt, DeletedAt, HasMany, BelongsTo } from "sequelize-typescript";
import {
    User,
    Recipes
} from '.';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'ingredients_recipe'
})
export class IngredientsRecipes extends Model {

  @BelongsTo(() => Recipes, 'recipe_id')
  recipe: Recipes;

  @Column
  ingredient_description: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @DeletedAt
  @Column
  deleted_at: Date;
}