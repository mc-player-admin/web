import { readdirSync } from 'node:fs'
import { join } from 'node:path'

const dir = readdirSync(join(__dirname, '../../'))

// todo: 多级目录
const sidebar = dir
  .filter((e) => {
    return e.split('.')?.at(-1) == 'md'
  })
  .map((e) => {
    return {
      text: e.replace(/.md$/, ''),
      link: e.replace(/.md$/, '')
    }
  })

export default sidebar
