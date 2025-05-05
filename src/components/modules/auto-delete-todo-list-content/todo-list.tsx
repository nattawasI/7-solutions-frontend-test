'use client'

/** components */
import { TodoItem } from './todo-item'

/** types */
import type { TodoItemType } from './type'

type TodoListProps = {
  items: TodoItemType[]
  onItemClick: (item: TodoItemType) => void
  showProgress?: boolean
}

export const TodoList = ({ items, onItemClick, showProgress }: TodoListProps) => (
  <div className="space-y-3">
    {items.map((item) => (
      <TodoItem key={item.name} item={item} onClick={onItemClick} showProgress={showProgress} />
    ))}
  </div>
)
