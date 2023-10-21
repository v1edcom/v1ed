import fs from 'fs'

const getPostSlugs = (): string[] => {
  const dir = './posts/'
  const files = fs.readdirSync(dir)
  const allowedExtensions = ['.md', '.mdx']
  const markdownFiles = files.filter((file) => allowedExtensions.includes(file.substring(file.lastIndexOf('.'))))
  
  const slugs = markdownFiles.map((file) => {
    const filename = file.slice(file.lastIndexOf('/') + 1, file.lastIndexOf('.'))
    return filename
  })
    
  return slugs
}

export default getPostSlugs