export type Menu = {
  id: number
  name: MenuType
  duration: number
}
const menuTypeList = ['running', 'walking', 'squat', 'push ups'] as const
export type MenuType = typeof menuTypeList[number]
export const getMenuTypeList = () => {
  return menuTypeList
}
