import {defineField, defineType} from 'sanity'
import { blockTypes } from './blocks'

export const sectionType = defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    //Section
    defineField({
      name: 'type',
      title: 'Section Title',
      type: 'string',
    }),
    //Blocks
    defineField({
      name: 'blocks', 
      title: 'Blocks',
      type: 'array',
      of: [
        {
          type: 'textBlock'
        },
        {
          type: 'tableBlock'
        },
        {
          type: 'imageBlock'
        }
      ],
    }),
  ],
})