import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-works';
  
  constructor(private messageService: MessageService){ }

  ngOnInit(): void {
    this.messageService.message = 'Hello Message Service';
  }
  
}