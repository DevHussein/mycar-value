import { AbstractEntity } from '../database/abstract.entity';
import { User } from '../users/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Report extends AbstractEntity<Report> {
  @Column({ default: false })
  approved: boolean;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;

  @ManyToOne(() => User, (user) => user.reports)
  user: User;
}
