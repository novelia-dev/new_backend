import { Novel } from 'src/novels/entities/novel.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Novel, (novel) => novel.tags)
  novel: Novel;

  @ManyToMany(() => Profile, (profile) => profile.preferTags)
  preferUsers: Profile[];

  @ManyToMany(() => Profile, (profile) => profile.hateTags)
  hateUsers: Profile[];
}
