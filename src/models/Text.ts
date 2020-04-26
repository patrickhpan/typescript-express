import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Text {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  text: string;
}