// src/TimedTask.js
import { Task } from './Task.js';

export class TimedTask extends Task {
  constructor(id, title, dueDate, done = false) {
    super(id, title, done);
    this.dueDate = new Date(dueDate);
  }
  get isOverdue() {
    return !this.done && Date.now() > this.dueDate.getTime();
  }

  toJSON() {
    return { 
      id: this.id, 
      title: this.title, 
      done: this.done,
      dueDate: this.dueDate.toISOString(),
      type: 'timed'
    };
  }

  static from(obj) {
    if (!obj) return null;
    return new TimedTask(obj.id, obj.title, obj.dueDate, obj.done);
  }
}