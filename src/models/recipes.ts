import { Column, Model, Table, CreatedAt, UpdatedAt, DeletedAt, HasMany, BelongsTo } from "sequelize-typescript";
import {
     User
} from '.';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'Recipes'
})
export class Recipes extends Model {

  @BelongsTo(() => User, 'user_id')
  user: User;

  @Column
  cooking_time_type: number;

  @Column
  cooking_time: string;

  @Column
  name: string;

  @Column
  difficulty: number;

  @Column
  prep_time_type: number;

  @Column
  prep_time: string;

  @Column
  meal_people: number;

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