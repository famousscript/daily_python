import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  type: 'user' | 'bot';
  message: string;
  timestamp: Date;
}

interface ChatSession {
  id: number;
  date: string;
  messages: ChatMessage[];
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  userInput: string = '';
  chatSessions: ChatSession[] = [];
  activeSessionId: number = 0;

  predefinedQuestions: string[] = [
    "What's the weather?",
    "How are you?",
    "Tell me a joke",
    "What can you do?",
    "Who made you?"
  ];

  ngOnInit() {
    this.startNewSession();
  }

  startNewSession() {
    const today = new Date().toLocaleDateString();
    const newSession: ChatSession = {
      id: this.chatSessions.length,
      date: today,
      messages: []
    };

    this.chatSessions.push(newSession);
    this.activeSessionId = newSession.id;
  }

  get activeSession(): ChatSession {
    return this.chatSessions.find(s => s.id === this.activeSessionId)!;
  }

  sendMessage() {
    const message = this.userInput.trim();
    if (!message) return;

    const now = new Date();
    const userMsg: ChatMessage = { type: 'user', message, timestamp: now };
    const botMsg: ChatMessage = {
      type: 'bot',
      message: this.getBotResponse(message),
      timestamp: new Date()
    };

    this.activeSession.messages.push(userMsg, botMsg);
    this.userInput = '';
  }

  getBotResponse(message: string): string {
    return `You asked: "${message}"`;
  }

  selectSession(id: number) {
    this.activeSessionId = id;
  }
}
