// src/view.js
import { escapeHTML } from './utils.js';
import { TimedTask } from './TimedTask.js';

/**
 * Render the tasks into the provided <ul> element.
 * @param {HTMLUListElement} listEl
 * @param {Array} tasks
 * @param {'all'|'active'|'completed'} filter
 */
export function renderTasks(listEl, tasks, filter) {
  const data = tasks.filter(t => {
    if (filter === 'active') return !t.done;
    if (filter === 'completed') return t.done;
    return true;
  });

  listEl.innerHTML = data.map(t => {
    
    const isTimedTask = t instanceof TimedTask;
    const overdueClass = isTimedTask && t.isOverdue ? 'overdue' : '';
    const dueDateHTML = isTimedTask ? `
      <div class="due-date">
        📅 Due: ${t.dueDate.toLocaleDateString()}
        ${t.isOverdue ? '<span class="overdue-badge">OVERDUE</span>' : ''}
      </div>
    ` : '';
    
    return `
      <li class="task ${t.done ? 'done' : ''} ${overdueClass}" data-id="${escapeHTML(t.id)}">
        <div class="left">
          <input type="checkbox" ${t.done ? 'checked' : ''} 
                 aria-label="Mark ${escapeHTML(t.title)} as ${t.done ? 'incomplete' : 'complete'}">
          <div class="title-wrapper">
            <span class="title">${escapeHTML(t.title)}</span>
            ${dueDateHTML}
          </div>
        </div>
        <button class="delete" title="Delete task" aria-label="Delete task">✕</button>
      </li>
    `;
  }).join('');
}

/**
 * Update counts text content.
 * @param {HTMLElement} countsEl
 * @param {Array} tasks
 */
export function updateCounts(countsEl, tasks) {
  const total = tasks.length;
  const active = tasks.filter(t => !t.done).length;
  const completed = tasks.filter(t => t.done).length;
  const overdue = tasks.filter(t => t instanceof TimedTask && t.isOverdue).length;
  countsEl.textContent = `${total} total, ${active} active, ${completed} completed` +
    (overdue > 0 ? ` · ${overdue} overdue ⚠️` : '');
}

/**
 * Highlight the active filter button.
 * @param {HTMLElement} groupEl
 * @param {'all'|'active'|'completed'} filter
 */
export function applyFilterStyles(groupEl, filter) {
  const buttons = Array.from(groupEl.querySelectorAll('button[data-filter]'));
  buttons.forEach(btn => {
    const isActive = btn.dataset.filter === filter;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });
}
