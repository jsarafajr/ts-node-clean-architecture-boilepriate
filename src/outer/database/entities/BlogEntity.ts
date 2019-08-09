import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Blog } from '../../../domain/blog/Blog';

@Entity('blogs')
export class BlogEntity implements Blog {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public owner: number;

  public constructor(name: string, owner: number) {
    this.name = name;
    this.owner = owner;
  }
}