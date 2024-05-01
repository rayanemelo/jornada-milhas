import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Promocao } from '../../core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  promocoes!: Promocao[];

  constructor(private servicoPromocao: PromocaoService) {}

  ngOnInit(): void {
    this.servicoPromocao.listar().subscribe(res => {
      this.promocoes = res;
    })
  }

}
