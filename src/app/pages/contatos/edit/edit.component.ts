import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ContatosService } from 'src/app/services/contatos.service';
import { Contatos } from './../../../interfaces/contatos';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  contato: Contatos | undefined;
  cardForm: any;
  carregando = false;

  constructor(private route: ActivatedRoute, private location: Location, private formBuilder: FormBuilder, private contatosService: ContatosService) {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.contatosService.getContatoId(id).subscribe((contato: Contatos) => {
      this.contato = contato;
      this.cardForm = this.formBuilder.group({
        id: [id],
        nome: [this.contato.nome, Validators.required],
        email: [this.contato.email, Validators.required],
        telefone: [this.contato.telefone, Validators.required]
      });
      this.carregando = false;
    });
  }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }
  voltar() {
    this.location.back();
  }
  onSubmit(contato: Contatos): void {
    this.carregando = true;
    const lead = {id: contato.id, nome: contato.nome, email: contato.email, telefone: contato.telefone};
    console.log(lead);
    this.contatosService.editContato(contato).subscribe(
      {
        next: () => this.voltar(),
        error: (err) => {
          console.error(err);
          this.carregando = false;
        }
      }
    );
  }
}
