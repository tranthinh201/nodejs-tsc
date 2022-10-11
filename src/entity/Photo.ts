import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class phpto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string
}