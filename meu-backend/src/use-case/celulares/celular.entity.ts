import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CelularType } from '../celular-types/celular-type.entity';
import { CelularModel } from '../celular-models/celular-model.entity';

@Entity('TCD-celular')
export class Celular {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ nullable: false })
  photo: string;

  @Column({ name: 'year-factory', nullable: false })
  yearFactory: number;

  @Column({ name: 'year-model', nullable: false })
  yearModel: number;

  @Column({ type: 'decimal', nullable: false, precision: 10, scale: 2 })
  priceRent: number;

  @ManyToOne(() => CelularType, { eager: true, nullable: false })
  @JoinColumn({ name: 'type-id' })
  type: CelularType;

  @ManyToOne(() => CelularModel, { eager: true, nullable: false })
  @JoinColumn({ name: 'model-id' })
  model: CelularModel;

  @CreateDateColumn({ name: 'created-at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated-at' })
  updateAt: Date;
}
