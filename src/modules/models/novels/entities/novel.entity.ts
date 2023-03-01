import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Quiz } from '../../quizs/entities/quiz.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { Profile } from '../../profiles/entities/profile.entity';

@Entity()
export class Novel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  content: string;

  @Column()
  start_date: Date;

  @Column({ default: 0 })
  short_done: number;

  @Column({ default: 0 })
  multiple_done: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt?: Date;

  @OneToMany(() => Quiz, (quiz) => quiz.novel, { eager: true })
  quizs: Quiz[];

  @OneToMany(() => Tag, (tag) => tag.novel, { eager: true })
  tags: Tag[];

  @ManyToOne(() => Profile, (profile) => profile.myNovels)
  authorProfile: Profile;

  @ManyToOne(() => Profile, (profile) => profile.scraps)
  scrappedUsers: Profile[];
}
