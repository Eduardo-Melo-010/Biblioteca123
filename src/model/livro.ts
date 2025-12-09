import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("livro")
export class Livro {

    @PrimaryColumn()
    id!: number;

    @Column()
    titulo!: string;

    @Column()
    autor!: string;

    @Column({ unique: true })
    isbn!: string;

    @Column()
    anoPublicacao!: number;

    @Column({ default: true })
    disponivel!: boolean;
}
