import { Genre } from 'src/genres/entities/genre.entity';
import { Novel } from 'src/novels/entities/novel.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Profile extends BaseEntity {
  // BASIC COLUMNS
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  // INPUT COLUMNS
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  ages: string;

  @Column({ default: 0 })
  points: number;

  //   RELATION COLUMNS
  @OneToOne(() => User, (user) => user.profile)
  account: User;

  @OneToMany(() => Novel, (novel) => novel.authorProfile)
  myNovels: Novel[];

  @OneToMany(() => Tag, (tag) => tag.preferUsers, { eager: true })
  preferTags: Tag[];

  @OneToMany(() => Tag, (tag) => tag.hateUsers, { eager: true })
  hateTags: Tag[];

  @OneToMany(() => Novel, (novel) => novel.scrappedUsers, { eager: true })
  scraps: Novel[];

  @OneToMany(() => Genre, (genre) => genre.user, { eager: true })
  genres: Genre[];
}
