import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import { sectionType } from './section'
import { textBlock } from './textBlock'
import { tableBlock } from './blocks/tableBlock'
import { imageBlock } from './blocks/imageBlock'

export const schemaTypes = [
    post, 
    author, 
    category, 
    blockContent,
    sectionType,
    textBlock,
    tableBlock,
    imageBlock
]
