export type TExtraValue = 'clear' | 'cancel' | 'enter' | ''

interface IExtraButton {
  value: TExtraValue
  color: string
}
export interface IMainButton {
  value: number | ''
  extra: [] | string[]
}

export const mainButtons: IMainButton[] = [
  {
    value: 1,
    extra: ['Q', 'Z']
  },
  {
    value: 2,
    extra: ['A', 'B', 'C']
  },
  {
    value: 3,
    extra: ['D', 'E', 'F']
  },
  {
    value: 4,
    extra: ['G', 'H', 'I']
  },
  {
    value: 5,
    extra: ['J', 'K', 'L']
  },
  {
    value: 6,
    extra: ['M', 'N', 'O']
  },
  {
    value: 7,
    extra: ['P', 'R', 'S']
  },
  {
    value: 8,
    extra: ['T', 'U', 'V']
  },
  {
    value: 9,
    extra: ['W', 'X', 'Y']
  },
  {
    value: '',
    extra: []
  },
  {
    value: 0,
    extra: []
  },
  {
    value: '',
    extra: []
  },
]

export const extraButtons: IExtraButton[] = [
  {
    value: 'cancel',
    color: '#ff4545'
  },
  {
    value: 'clear',
    color: '#eeff59'
  },
  {
    value: 'enter',
    color: '#26ff1f'
  },
  {
    value: '',
    color: ''
  }
]