export interface ITask {
  id?: string,
  name: string,
  description: string,
  category?: string,
}

export interface IListItem {
  item: ITask,
}

export interface IWrapperTask {
  type: string,
  item: ITask
}

export interface IChildren {
  children: React.ReactNode
}

export interface IStateModal {
  type: string,
  value: string,
}