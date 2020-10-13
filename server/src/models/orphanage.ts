import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orphanages')
export default class Orphanage {

  @PrimaryGeneratedColumn('increment')
  id: number; 
  
  @Column()
  name: string;

  @Column()
  latidude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instruction: string; 

  @Column()
  openning_hours: string;

  @Column()
  open_on_weekends: boolean;
}