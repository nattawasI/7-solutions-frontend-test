'use client'

/** libs */
import { useState } from 'react'
import { useTimeout } from '@/libs/hooks/use-timeout'

/** data */
import { initialItems } from './data'

/** components */
import { ColumnBlock } from './column-block'
import { TodoList } from './todo-list'

/** types */
import { TodoItemType } from './type'

const AutoDeleteTodoListContent = () => {
  const [mainList, setMainList] = useState<TodoItemType[]>(initialItems)
  const [fruitList, setFruitList] = useState<TodoItemType[]>([])
  const [vegetableList, setVegetableList] = useState<TodoItemType[]>([])

  const { startTimeout, clearTimeout } = useTimeout()

  const handleMoveBack = (item: TodoItemType) => {
    if (item.type === 'Fruit') {
      setFruitList((prev) => prev.filter((i) => i.name !== item.name))
    } else {
      setVegetableList((prev) => prev.filter((i) => i.name !== item.name))
    }
    setMainList((prev) => [...prev, item])
  }

  const handleMoveItem = (item: TodoItemType) => {
    setMainList((prev) => prev.filter((i) => i.name !== item.name))

    if (item.type === 'Fruit') {
      setFruitList((prev) => [...prev, item])
    } else {
      setVegetableList((prev) => [...prev, item])
    }

    startTimeout(item.name, () => handleMoveBack(item), 5000)
  }

  const handleClickItem = (item: TodoItemType) => {
    clearTimeout(item.name)
    handleMoveBack(item)
  }

  return (
    <div className="cs-container grid h-full min-w-[calc(1024px-2.5rem)] grid-cols-3 gap-5">
      <ColumnBlock>
        <TodoList items={mainList} onItemClick={handleMoveItem} />
      </ColumnBlock>
      <ColumnBlock variant="fruits">
        <TodoList items={fruitList} onItemClick={handleClickItem} showProgress />
      </ColumnBlock>
      <ColumnBlock variant="vegetables">
        <TodoList items={vegetableList} onItemClick={handleClickItem} showProgress />
      </ColumnBlock>
    </div>
  )
}

export { AutoDeleteTodoListContent }
