const menuList = [
  {
    title: '首页',
    id: '1',
    router: '/',
    icon: 'Document',
    children: [
      {
        title: '首页1',
        id: '1-1',
        router: '/index',
      },
      {
        title: '首页2',
        id: '1-2',
        router: '/test',
      }
    ]
  },
  {
    title: '聊天室',
    id: '2',
    router: '/history',
    icon: 'Document',
  }
]

export {
  menuList
}