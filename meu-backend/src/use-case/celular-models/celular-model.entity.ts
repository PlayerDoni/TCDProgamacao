import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CelularFactory } from '../celular-factories/celular-factory.entity';

@Entity('TCD-model')
export class CelularModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 60, nullable: false })
  name: string;

  @ManyToOne(() => CelularFactory, { eager: true, nullable: false })
  @JoinColumn({ name: 'factory-id' })
  factory: CelularFactory;

  @CreateDateColumn({ name: 'created-at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated-at' })
  updateAt: Date;
}
