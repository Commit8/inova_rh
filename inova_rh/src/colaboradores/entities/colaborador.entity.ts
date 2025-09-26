import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_colaboradores' })
export class Colaborador {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  cargo: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  admissao: Date;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  salario: number;
}
