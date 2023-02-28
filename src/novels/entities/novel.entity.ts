import { Profile } from 'src/profiles/entities/profile.entity';
import { Quiz } from 'src/quizs/entities/quiz.entity';
import { Tag } from 'src/tags/entities/tag.entity';
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

  @Column({ type: 'timestamp' })
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
