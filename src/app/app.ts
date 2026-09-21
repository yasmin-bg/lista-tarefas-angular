import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  tarefas = [
    {
      descricao: 'Estudar Angular',
      concluida: false
    },
    {
      descricao: 'Fazer exercício de programação',
      concluida: true
    },
    {
      descricao: 'Revisar conteúdo da aula',
      concluida: false
    }
  ];

  novaTarefa = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim() === '') {
      return;
    }

    this.tarefas.push({
      descricao: this.novaTarefa,
      concluida: false
    });

    this.novaTarefa = '';
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }

  contarTarefasConcluidas() {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }
}