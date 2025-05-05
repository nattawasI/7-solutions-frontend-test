import { TypographyH1 } from '@/components/ui/typography'
import { AutoDeleteTodoListContent } from '@/components/modules/auto-delete-todo-list-content'

export default function AutoDeleteTodoList() {
  return (
    <div className="flex h-screen flex-col">
      <div className="shrink-0">
        <div className="cs-container py-10">
          <TypographyH1>Auto Delete Todo List</TypographyH1>
        </div>
      </div>
      <div className="scrollbar-hidden flex-1 overflow-x-auto overflow-y-hidden pb-10">
        <AutoDeleteTodoListContent />
      </div>
    </div>
  )
}
